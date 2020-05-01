var tabdata = [];
var urlInfo = [];
browser.tabs.onUpdated.addListener(function (b, a, c) {
    if (a.status == "loading") {
        init(b, c.url);
    }
    if (a.status == "complete") {
        tabdata[b].cur_title = c.title;
    }
});
browser.tabs.onActivated.addListener(function (a) {
    browser.tabs.get(a.tabId,
        function (b) {
            if (tabdata[a.tabId] === undefined) {
                window.setTimeout(function () {
                    init(a.tabId, b.url);
                },
                    100);
            }
        });
});
function init(b, a) {
    tabdata[b] = {};
    tabdata[b].info = {};
    tabdata[b].cur_title = "";
    tabdata[b].cur_tab = b;
    tabdata[b].cur_url = a;
    tabdata[b].cur_domain = get_domain(tabdata[b].cur_url);
    if (tabdata[b].cur_domain) {
        tabdata[b].info = findByURL(tabdata[b].cur_domain, tabdata[b].cur_tab);
        if (tabdata[b].info === null) {
            get_new_data(tabdata[b]);
        } else {
            show_icon(tabdata[b]);
        }
    } else {
        browser.pageAction.hide(b);
    }
}

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type == "getTabsData") {
        if (request.id) {
            sendResponse(tabdata[request.id]);
        } else {
            var adr = get_domain(request.addrs);
            if (!adr)
                return;
            var inf = findByURL(adr);
            if (inf != null) {
                sendResponse(inf);
                return;
            }

            getUrlInfo(adr,
                function (ipInfo) {
                    sendResponse(ipInfo);
                });
            return true;
        }
    }
});

function get_domain(a) {
    if (a.search("view-source:") === 0) {
        a = a.substr(12);
    }
    var b = a.substr(0, 8)
        , f = "";
    try {
        if (b.search("http://") === 0 || b.search("https://") === 0 || b.search("ftp://") === 0) {
            f = a.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/)[2];
        }
    } catch (c) {
        f = "";
    }
    return f.toLowerCase();
}

function findByURL(url, t) {
    var res = null;
    url = url.toLowerCase();
    /*tabdata.forEach(function(e) {
        if (e.cur_tab!=t && e.cur_domain === url) 
            res = e.info;
    });*/
    urlInfo.forEach(function (e) {
        if (url == e.domain)
            res = e.info;
    });
    return res;
}
function getUrlInfo(url, onSuccess) {
    const d = {};
    d.HostName = url;
    d.LIp = "";
    d.Referrer = "";

    AjaxPostCall("https://realip.info/api/external/GetIpInfo", d, function (ipInfo) {
        if (!ipInfo || ipInfo.Code != ResponseCode.Success)
            return;
        var u = {};
        u.domain = d.HostName.toLowerCase();
        u.info = ipInfo;
        urlInfo.push(u);

        onSuccess(ipInfo);
    });
}
function get_new_data(a) {
    /*const d = {};
    d.HostName = a.cur_domain;
    d.LIp = "";
    d.Referrer = "";

    AjaxPostCall("https://realip.info/api/external/GetIpInfo", d, function (ipInfo) {
        if (!ipInfo || ipInfo.Code != ResponseCode.Success)
            return;

        a.info = ipInfo;
        show_icon(a);
    });*/
    getUrlInfo(a.cur_domain,
        function (ipInfo) {
            a.info = ipInfo;
            show_icon(a);
        });

}
function show_icon(c) {
    if (!c || !c.info || !c.info.Data) {
        browser.pageAction.hide(c.cur_tab);
        return;
    }
    browser.pageAction.setIcon({
        path: "images/flags/" + c.info.Data.CountryCode3 + ".png",
        tabId: c.cur_tab
    });
    browser.pageAction.show(c.cur_tab);

    browser.pageAction.setTitle({
        title: "IP: {0}\nCountry: {1}\nISP: {2}".format(c.info.Data.Ip, c.info.Data.CountryName, c.info.Data.Isp),
        tabId: c.cur_tab
    });
    browser.pageAction.show(c.cur_tab);
}



var ResponseCode = {
    Success: 0,
    Error: 1,
    AccessDenied: 2,
    IpAddressInvalid: 3,
    HostNameInvalid: 4,
    IpOrHostInvalid: 5
};

var Protocol = {
    TCP: "TCP",
    UDP: "UDP"
};

var IpClass = {
    None: 0,
    ClassA: 1,
    ClassB: 2,
    ClassC: 3
}

function AjaxCall(url, type, data, onSuccess, onError) {
    var success = function (data, textStatus) { };
    var faild = function (xhr, textStatus, errorThrown) { };
    var rtype = "GET";
    var sdata = null;
    if (onSuccess)
        success = onSuccess;
    if (onError)
        faild = onError;
    if (type)
        rtype = type;
    if (data)
        sdata = JSON.stringify(data);

    $.ajax(
        {
            url: url,
            contentType: "application/json; charset=utf-8",
            type: rtype,
            timeout: 60000,
            dataType: "json",
            data: sdata,
            success: success,
            error: faild
        });
}

function AjaxPostCall(url, data, onSuccess, onError) {
    return AjaxCall(url, "POST", data, onSuccess, onError);
}

function AjaxGetCall(url, onSuccess, onError) {
    return AjaxCall(url, "GET", null, onSuccess, onError);
}

if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}
