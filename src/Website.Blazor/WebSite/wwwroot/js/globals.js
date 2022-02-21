//$(document).ready(function () {
function Load() {
    $('[data-toggle="tooltip"]').tooltip({
        'selector': '',
        'placement': 'top',
        'container': 'body'
    });
    if (PageName) {
        if (typeof PageName !== 'undefined')
            $("#{0}".format(PageName)).toggleClass("active");
    }

    GetClientDetection();
    //InitPopups();
    //setTimeout(LoadCrisp, 2000);
    //setTimeout(LoadAds, 6000);

    $(".copy-to-clipboard").click(function() {
        /*$("#generatedPass").focus();
        $("#generatedPass").select();*/
        var txt = GetObjectText($(this).attr("data-obj"));
        copyToClipboard(txt);
        /*SelectText($(this).attr("data-obj"));
        document.execCommand('copy');*/
        toastr.info('Copied to clipboard', null, { timeOut: 1000 });
        clearSelection();
    });
//});
}

//#region Validation Methods
function ValidEmail(email) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}

function ValidEmpty(value) {
    return value && (((typeof value === "string") && value.trim().length > 0) ||
        (/*(typeof value === "number") &&*/ value != 0));
}

function ValidRequired(val) {
    return ValidEmpty(val);
}

function ValidPhoneNumber(num) {
    if (Number.parseInt(num) === "NaN") {
        return false;
    }
    if (num.length < 11) {
        return false;
    }
    if ((num.length === 11 && num[0] != 0) || num.length > 11) {
        return false;
    }
    else {
        return true;
    }
}

function ValidMobileNumber(num) {
    return /^09?([0-9]{9})$/.test(num) && num.length === 11;
}

function ValidEnglishText(str) {
    return /[a-zA-Z]$/.test(str);
}

function ValidNationalCode(code) {
    if (code.length < 8 || parseInt(code, 10) == 0)
        return false;
    code = ('0000' + code).substr(code.length + 4 - 10);
    if (parseInt(code.substr(3, 6), 10) == 0)
        return false;
    if (code == '0000000000' || code == '1111111111' || code == '2222222222' || code == '3333333333'
        || code == '4444444444' || code == '5555555555' || code == '6666666666' || code == '7777777777' ||
        code == '8888888888' || code == '9999999999')
        return false;
    var c = parseInt(code.substr(9, 1), 10);
    var s = 0;
    for (var i = 0; i < 9; i++)
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
    s = s % 11;
    return (s < 2 && c == s) || (s >= 2 && c == (11 - s));
}

function ValidObjectEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
}

function ValidIPAddress(ip) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
        .test(ip);
}

function ValidNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//#endregion

//#region Ajax Call Methods
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

function AjaxShowErrorFunction(xhr, textStatus, errorThrown) {
    if (toastr)
        toastr.error("Error in receiving data!");
    // alert("خطا در دریافت اطلاعات");
}
//#endregion

//#region URL methods
function GetDomainAddress() {
    return document.location.origin;
}

function GetDomain() {
    return document.location.host;
}

function GetDomainProtocol() {
    return document.location.protocol;
}

function GetCurrentAddress() {
    return document.location.href;
}

function GetAddressOfPage(page) {
    return GetDomainAddress() + page;
}

function GetUrlParameter(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function ChangeAddress(url) {
    document.location = url;
}

function IsCurrentUrl(url) {
    url = url.toLowerCase();
    if (url[url.length - 1] == "/")
        url = url.slice(0, -1);
    return document.location.pathname.toLowerCase().startsWith(url);
}

function NormalizeUrl(url) {
    if (url.startsWith("http://"))
        url = url.substring(7);
    if (url.startsWith("https://"))
        url = url.substring(8);
    url = url.replaceAll(":", "");
    url = encodeURIComponent(url);
    return url;

}

function get_domain(a) {
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

//#endregion

//#region Extended Method
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    //return target.replace(new RegExp(search, 'g'), replacement);
    return target.split(search).join(replacement);
};
//#endregion

function Comma(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var LocalIP;
function GetLocalIP(fn) {
    try {
        window.RTCPeerConnection =
            window.RTCPeerConnection ||
            window.mozRTCPeerConnection ||
            window.webkitRTCPeerConnection; //compatibility for firefox and chrome
        var pc = new RTCPeerConnection({ iceServers: [] }), noop = function () { };
        pc.createDataChannel(""); //create a bogus data channel
        pc.createOffer(pc.setLocalDescription.bind(pc), noop); // create offer and set local description
        pc.onicecandidate = function (ice) { //listen for candidate events
            if (!ice || !ice.candidate || !ice.candidate.candidate) return;
            try {
                LocalIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
                    .exec(ice.candidate.candidate)[1];
            }catch(e) {
                pc.onicecandidate = noop;
            }
            if (fn)
                fn();
        };
    } catch (e) {
        if (fn)
            fn();
    }
}

function GetReferrer() {
    var res = "";
    try {
        res = document.referrer !== "" ? document.referrer.split('/')[2] : "";
    } catch (e) { }
    return res;
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

var ipUrlPopups = [
    { url: "/service/lookup/?host=", text: "Address Lookup" },
    { url: "/service/portsservice/?host=", text: "Open Ports Service" },
    { url: "/service/ssl/?host=", text: "SSL & Certificate" },
    { url: "/service/whois/?host=", text: "Whois Lookup" }
];

var domainUrlPopups = [
    /*{ url: "/domain/lookup/", text: "Test domain Lookup" },*/
];

function InitPopups() {
    InitLinkPopups();
    InitButtonPopups();
}

function InitLinkPopups() {
    var items = $("div.Popup, span.Popup");
    items.each(function () {
        try {
            if ($(this).hasClass("dropdown"))
                return;

            $(this).addClass("dropdown");
            var ip = $(this).attr("data-obj");

            var a = $("<a></a>")
                .addClass("dropdown-toggle")
                .attr("href", "#")
                .attr("data-toggle", "dropdown")
                .attr("role", "button")
                .attr("aria-haspopup", "true")
                .attr("aria-expanded", "false")
                .html("<i class=\"fa fa-chevron-circle-down c-accent\"></i>");
            $(this).append(a);

            var ul = $("<ul></ul>")
                .addClass("dropdown-menu");

            var t = 0;
            if ($(this).hasClass("Ip")) {
                t++;
                if (ipUrlPopups.length > 0) {
                    ipUrlPopups.forEach(function (element) {
                        if (IsCurrentUrl(element.url))
                            return;

                        var hr = $("<li></li>")
                            .html("<a href=\"{1}\" onclick=\"this.href='{1}'+NormalizeUrl($('#{0}').text().trim())\">{2}</a>"
                                .format(ip, element.url, element.text));
                        ul.append(hr);
                    });
                }
            }
            if ($(this).hasClass("Domain") && t > 0) {
                if (domainUrlPopups.length > 0) {
                    var hr = $("<li></li>")
                        .addClass("divider");
                    ul.append(hr);
                }
            }
            if ($(this).hasClass("Domain")) {
                t++;
                domainUrlPopups.forEach(function (element) {
                    if (IsCurrentUrl(element.url))
                        return;

                    var hr = $("<li></li>")
                        .html("<a href=\"{1}\" onclick=\"this.href='{1}'+NormalizeUrl($('#{0}').text().trim())\">{2}</a>"
                            .format(ip, element.url, element.text));
                    ul.append(hr);
                });
            }

            $(this).append(ul);
        } catch (e) { }
    });
}

function InitButtonPopups() {
    var items = $("button.Popup");
    items.each(function () {
        try {
            var n = $(this).next();
            if (n.prop("tagName") && n.prop("tagName").toLowerCase() == "button")
                return;

            var b = $("<button></button>")
                .addClass("btn btn-accent dropdown-toggle")
                .attr("data-toggle", "dropdown")
                .html("<span class=\"caret\"></span>");

            var ip = $(this).attr("data-obj");
            var p = $(this).parent();
            p.append(b);

            var ul = $("<ul></ul>")
                .addClass("dropdown-menu")
                .attr("role", "menu");

            var t = 0;
            if ($(this).hasClass("Ip")) {
                t++;
                if (ipUrlPopups.length > 0) {
                    ipUrlPopups.forEach(function (element) {
                        if (IsCurrentUrl(element.url))
                            return;

                        var hr = $("<li></li>")
                            .html("<a href=\"{1}\" onclick=\"this.href='{1}'+NormalizeUrl($('#{0}').val().trim())\">{2}</a>"
                                .format(ip, element.url, element.text));
                        ul.append(hr);
                    });
                }
            }
            if ($(this).hasClass("Domain") && t > 0) {
                if (domainUrlPopups.length > 0) {
                    var hr = $("<li></li>")
                        .addClass("divider");
                    ul.append(hr);
                }
            }
            if ($(this).hasClass("Domain")) {
                t++;
                domainUrlPopups.forEach(function (element) {
                    if (IsCurrentUrl(element.url))
                        return;

                    var hr = $("<li></li>")
                        .html("<a href=\"{1}\" onclick=\"this.href='{1}'+NormalizeUrl($('#{0}').val().trim())\">{2}</a>"
                            .format(ip, element.url, element.text));
                    ul.append(hr);
                });
            }

            p.append(ul);


        } catch (e) { }
    });
}

function GetClientDetection() {

    var unknown = '-';

    // screen
    var screenSize = '';
    if (screen.width) {
        width = (screen.width) ? screen.width : '';
        height = (screen.height) ? screen.height : '';
        screenSize += '' + width + " x " + height;
    }

    // browser
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 4);
    }
    // Edge
    else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
        browser = 'Microsoft Edge';
        version = nAgt.substring(verOffset + 5);
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
        browser = 'Chrome';
        version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
        browser = 'Safari';
        version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
        browser = 'Firefox';
        version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf('Trident/') != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    }
    // Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        browser = nAgt.substring(nameOffset, verOffset);
        version = nAgt.substring(verOffset + 1);
        if (browser.toLowerCase() == browser.toUpperCase()) {
            browser = navigator.appName;
        }
    }
    // trim the version string
    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
        version = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // cookie
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }

    // system
    var os = unknown;
    var clientStrings = [
        { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
        { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
        { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
        { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
        { s: 'Windows Vista', r: /Windows NT 6.0/ },
        { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
        { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
        { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
        { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
        { s: 'Windows 98', r: /(Windows 98|Win98)/ },
        { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
        { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
        { s: 'Windows CE', r: /Windows CE/ },
        { s: 'Windows 3.11', r: /Win16/ },
        { s: 'Android', r: /Android/ },
        { s: 'Open BSD', r: /OpenBSD/ },
        { s: 'Sun OS', r: /SunOS/ },
        { s: 'Linux', r: /(Linux|X11)/ },
        { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
        { s: 'Mac OS X', r: /Mac OS X/ },
        { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
        { s: 'QNX', r: /QNX/ },
        { s: 'UNIX', r: /UNIX/ },
        { s: 'BeOS', r: /BeOS/ },
        { s: 'OS/2', r: /OS\/2/ },
        { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
    ];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    // flash (you'll need to include swfobject)
    /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
    var flashVersion = 'no check';
    if (typeof swfobject != 'undefined') {
        var fv = swfobject.getFlashPlayerVersion();
        if (fv.major > 0) {
            flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
        }
        else {
            flashVersion = unknown;
        }
    }


    return {
        //screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        //mobile: mobile,
        os: os,
        osVersion: osVersion,
        //cookies: cookieEnabled,
        //flashVersion: flashVersion
    };
}

function LoadCrisp() {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "c606256a-ca99-44a9-8a7c-59d76522336d";
    (function () {
        d = document;
        s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
    })();
    $crisp.push(["set", "session:data", [[
        ["Browser", window.jscd.browser],
        ["BrowserVersion", window.jscd.browserVersion],
        ["Os", window.jscd.os]
    ]]]);

}

function LoadAds() {
    //$("#dvAds").append(
    //    $("<script></script")
    //    .attr("async","")
    //        .attr("src", "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"));
}

function SelectText(element) {
    var e = $("#"+element);
    if (e.is("input") || e.is("textarea")) {
        $("#generatedPass").focus();
        $("#generatedPass").select();

    } else {
        var doc = document, text = doc.getElementById(element), range, selection;
        if (doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}

function clearSelection() {
    if ( document.selection ) {
        document.selection.empty();
    } else if ( window.getSelection ) {
        window.getSelection().removeAllRanges();
    }
}

// Copies a string to the clipboard. Must be called from within an event handler such as click.
// May return false if it failed, but this is not always
// possible. Browser support for Chrome 43+, Firefox 42+, Edge and IE 10+.
// No Safari support, as of (Nov. 2015). Returns false.
// IE: The clipboard feature may be disabled by an adminstrator. By default a prompt is
// shown the first time the clipboard is used (per session).
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function GetObjectText(element) {
    var e = $("#" + element);
    var txt = "";
    if (e.is("input") || e.is("textarea")) {
        txt=e.val();

    } else {
        txt = e.html();
    }
    return txt;
}

//#region Show dialogs Methods

MessageBoxType = {
    Error: "error",
    Warning: "warning",
    Success: "success",
    Info: "info",
    Question: "question",
    None: "none"
};

GlobalTitles = {
    Error: "Error",
    OK: "OK",
    Cancel: "Cancel",
    Warning: "Warning"
};

function ShowDialogMessage(title,
    text,
    type,
    onDone,
    onCancel,
    confirmText,
    showCancel,
    cancelText,
    html,
    onOpen,
    autoClose) {
    var stype = "";
    if (!type || type !== MessageBoxType.None)
        stype = type;
    var confText = confirmText;
    if (!confText)
        confText = GlobalTitles.OK;

    var cancText = cancelText;
    if (!cancText)
        cancText = GlobalTitles.Cancel;

    var sw = {
        title: title,
        //text: text,
        type: stype,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-w-md btn-accent",
        confirmButtonText: confText,
        cancelButtonClass: "btn btn-w-md btn-danger",
        showCancelButton: showCancel,
        background: "rgba(68, 70, 79)",//, 0.5)",
        //color:"#ffffff",
        cancelButtonText: cancText,
        onOpen: onOpen
    };

    if (!html)
        sw.text = text;
    else
        sw.html = html;
    if (autoClose) {
        sw.showConfirmButton = false;
        sw.timer = 1500;
    }
    swal(sw).then(function (result) {


        if ($("html").hasClass("k-safari") && $("html").hasClass("k-mobile"))
            $("body").css("top", "0");

        if (onDone)
            onDone(result);
    },
        function (result) {
            if ($("html").hasClass("k-safari") && $("html").hasClass("k-mobile"))
                $("body").css("top", "0");

            if (onCancel)
                onCancel(result);
        }).catch(swal.noop);

    /*swal({
        title: title,
        text: text,
        type: stype,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: confText,
        cancelButtonClass: "btn btn-danger",
        showCancelButton: showCancel,
        cancelButtonText: cancText
    },
        function () {
            if (onDone)
                onDone();
        },
        function () {
            if (onCancel)
                onCancel();
        });//.catch(swal.noop);*/
}

/**
 * @param {String} title Title of message
 * @param {String} text Body text of message
 * @param {MessageBoxType} type Message type 
 * @param {Function} onDone Method for run on message close 
 */
function ShowMessage(title, text, type, onDone) {
    return ShowDialogMessage(title, text, type, onDone);
}

/**
 * @param {String} title Title of message
 * @param {String} text Body text of message
 * @param {MessageBoxType} type Message type 
 * @param {Function} onDone Method for run on message close
 * @param {Boolean} autoClose Automatic Close Message
 */
function ShowAutoCloseMessage(title, text, type, onDone, autoClose) {
    return ShowDialogMessage(title, text, type, onDone, null, null, null, null, null, null, autoClose);
}

/**
 * @param {String} title Title of message
 * @param {String} text Body text of message
 * @param {String} confirmText Ok button text
 * @param {MessageBoxType} type Message type 
 * @param {Function} onDone Method for run on message close 
 */
function ShowMessage2(title, text, confirmText, type, onDone) {
    return ShowDialogMessage(title, text, type, onDone, null, confirmText);
}

function ShowMessageWithContent(title, objectId, confirmText, type, onDone, onOpen) {
    var val = $("#{0}".format(objectId)).html();

    return ShowDialogMessage(title, null, type, onDone, null, confirmText, null, null, val, onOpen);
}

function ShowConfirmMessageWithContent(title, objectId, confirmText, cancelText, type, onDone, onOpen, onCancel) {
    var val = $("#{0}".format(objectId)).html();

    return ShowDialogMessage(title, null, type, onDone, onCancel, confirmText, true, cancelText, val, onOpen);
}

/**
 * @param {String} title Title of message
 * @param {String} text Body text of message
 * @param {MessageBoxType} type Message type 
 * @param {Function} onDone Method for run on message close 
 */
function ShowConfirmation(title, text, type, onDone, onCancel) {
    return ShowDialogMessage(title, text, type, onDone, onCancel, "", true, "");
}

/**
 * @param {String} title Title of message
 * @param {String} text Body text of message
 * @param {String} confirmText Ok button text
 * @param {String} cancelText Cancel button text
 * @param {MessageBoxType} type Message type 
 * @param {Function} onDone Method for run on message close 
 */
function ShowConfirmation2(title, text, confirmText, cancelText, type, onDone, onCancel) {
    return ShowDialogMessage(title, text, type, onDone, onCancel, confirmText, true, cancelText);
}

//#endregion

//#region Service worker
var deferredPrompt;

window.addEventListener('beforeinstallprompt',
    function (e) {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;

        showAddToHomeScreen();

    });

function showAddToHomeScreen() {
    if (Cookies.get("addToHomeScreen"))
        return;

    ShowConfirmation("",
        "Do you want to add this site to your home page?",
        MessageBoxType.Question,
        function (flag) {
            //Cookies.set("addToHomeScreen", "1", { expires: 30 });
            //SetConfig("AddToHomeScreen", true);
            if (!flag)
                return;
            deferredPrompt.prompt(); // Wait for the user to respond to the prompt
            deferredPrompt.userChoice
                .then(function (choiceResult) {

                    if (choiceResult.outcome === 'accepted') {
                        //console.log('User accepted the A2HS prompt');
                    } else {
                        //console.log('User dismissed the A2HS prompt');
                    }

                    deferredPrompt = null;

                });
        },
        function () {
            Cookies.set("addToHomeScreen", "1", { expires: 365 });
            //SetConfig("AddToHomeScreen", true);
        });

    /*var a2hsBtn = document.querySelector(".ad2hs-prompt");

    a2hsBtn.style.display = "block";

    a2hsBtn.addEventListener("click", addToHomeScreen);*/

}
//#endregion

var worldmap;
function InitMap(code) {
    $("#serverMap").empty();

    worldmap = new Datamap({
        element: document.getElementById("serverMap"),
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900"
        },
        responsive: true,
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0

        },
        data: {
            /*USA: { fillKey: "active" },
            RUS: { fillKey: "active" }*/
        }

    });

    // Resize map on window resize
    $(window).on("resize", function () {
        setTimeout(function () {
            worldmap.resize();
        }, 100);
    });

    SetCountry(code);
}

function SetCountry(code) {
    eval("worldmap.updateChoropleth({" + code + ": { fillKey: 'active' }});");
}