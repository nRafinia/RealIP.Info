var worldmap;
var cs;
var lp;
ContactName = "Name";
ContactAddress = "Address";
ContactPhoneNumber = "Phone Number";
ContactEMail = "EMail";

document.addEventListener("DOMContentLoaded", function () {
    function onGot(tabInfo) {
        browser.runtime.sendMessage({
            type: "getTabsData",
            id:tabInfo.id
        }).then(function (message) {
            var data = message;
            SetInfo(data.info, data);
        });

    }

    function onError(error) { }

    function getInfoForTab(tabs) {
        if (tabs.length > 0) {
            var gettingInfo = browser.tabs.get(tabs[0].id);
            gettingInfo.then(onGot, onError);
        }
    }

    var querying = browser.tabs.query({ currentWindow: true, active: true });
    querying.then(getInfoForTab, onError);
});

$(document).ready(function () {
    $("#ver").html(browser.runtime.getManifest().version);

    worldmap = new Datamap({
        element: document.getElementById("serverMap"),
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900"
        },
        responsive: true,
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0,
            popupOnHover: false

        },
        data: {
            /*USA: { fillKey: "active" },
            RUS: { fillKey: "active" }*/
        }

    });

    // Resize map on window resize
    //$(window).on("resize", function () {
    //    setTimeout(function () {
    //        worldmap.resize();
    //    }, 100);
    //});

    $('body').on('click', 'a', function () {
        if ($(this).attr('href').startsWith('#'))
            return;
        browser.tabs.create({ url: $(this).attr('href') });
        return false;
    });

    $("#txtIpAddress").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#openHost").click();
        }
    });

    $("#openHost").click(function () {
        browser.tabs.create({ url: "https://realip.info/service/lookup/{0}".format($("#txtIpAddress").val()) });
    });

});

function SetInfo(ipInfo, data) {
    $("#lblIp").html("");
    $("#lblReverse").html("");
    $("#lblNetRange").html("");
    $("#lblNetName").html("");
    $("#lblDescription").html("");
    $("#lblCountryName").html("");
    $("#lblCountryCode").html("");
    $("#lblRegionName").html("");
    $("#lblRegionCode").html("");
    $("#lblCity").html("");
    $("#lblZipCode").html("");
    $("#lblLatitude").html("");
    $("#lblLongitude").html("");
    $("#lblTimeZone").html("");
    $("#lblIsp").html("");
    $("#lblOrganization").html("");
    $("#lblAsNumberName").html("");
    var csd = {};
    csd[cs] = { fillKey: 'defaultFill' };
    worldmap.updateChoropleth(csd);

    if (ipInfo) {
        //$("#txtIpAddress").val(data.cur_domain);

        //$("#lblIp").html(ipInfo.Data.Ip);
        document.getElementById("lblIp").textContent = ipInfo.Data.Ip;
        //$("#lblReverse").html(ipInfo.Data.Reverse);
        document.getElementById("lblReverse").textContent = ipInfo.Data.Reverse;
        //$("#lblNetRange").html(ipInfo.Data.NetRange);
        document.getElementById("lblNetRange").textContent = ipInfo.Data.NetRange;
        //$("#lblNetName").html(ipInfo.Data.NetName);
        document.getElementById("lblNetName").textContent = ipInfo.Data.NetName;
        //$("#lblDescription").html(ipInfo.Data.Description);
        document.getElementById("lblDescription").textContent = ipInfo.Data.Description;
        //$("#lblCountryName").html(ipInfo.Data.CountryName);
        document.getElementById("lblCountryName").textContent = ipInfo.Data.CountryName;
        /*$("#lblCountryCode").html(ipInfo.Data.CountryCode
            ? ipInfo.Data.CountryCode + " (" + ipInfo.Data.CountryCode3 + ")"
            : "");*/
        document.getElementById("lblCountryCode").textContent = ipInfo.Data.CountryCode
            ? ipInfo.Data.CountryCode + " (" + ipInfo.Data.CountryCode3 + ")"
            : "";
        //$("#imgCountryFlag").attr("src", "/Content/image/flags/{0}.png".format(ipInfo.Data.CountryCode3));
        document.getElementById("imgCountryFlag").src="/images/flags/{0}.png".format(ipInfo.Data.CountryCode3);
        //$("#lblRegionName").html(ipInfo.Data.RegionName);
        document.getElementById("lblRegionName").textContent = ipInfo.Data.RegionName;
        //$("#lblRegionCode").html(ipInfo.Data.RegionCode);
        document.getElementById("lblRegionCode").textContent = ipInfo.Data.RegionCode;
        //$("#lblCity").html(ipInfo.Data.City);
        document.getElementById("lblCity").textContent = ipInfo.Data.City;
        //$("#lblZipCode").html(ipInfo.Data.ZipCode);
        document.getElementById("lblZipCode").textContent = ipInfo.Data.ZipCode;
        //$("#lblLatitude").html(ipInfo.Data.Latitude);
        document.getElementById("lblLatitude").textContent = ipInfo.Data.Latitude;
        //$("#lblLongitude").html(ipInfo.Data.Longitude);
        document.getElementById("lblLongitude").textContent = ipInfo.Data.Longitude;
        //$("#lblTimeZone").html(ipInfo.Data.TimeZone);
        document.getElementById("lblTimeZone").textContent = ipInfo.Data.TimeZone;
        //$("#lblIsp").html(ipInfo.Data.Isp);
        document.getElementById("lblIsp").textContent = ipInfo.Data.Isp;
        //$("#lblOrganization").html(ipInfo.Data.Organization);
        document.getElementById("lblOrganization").textContent = ipInfo.Data.Organization;
        //$("#lblAsNumberName").html(ipInfo.Data.AsNumberName);
        document.getElementById("lblAsNumberName").textContent = ipInfo.Data.AsNumberName;

        csd = {};
        cs = ipInfo.Data.CountryCode3;
        csd[cs] = { fillKey: 'active' };
        worldmap.updateChoropleth(csd);
    }

    drawContactPoint(ipInfo && ipInfo.Data ? ipInfo.Data.ContactInfos : null);
}

function drawContactPoint(contacts) {
    var tab = $("#tabContacts");
    tab.empty();

    if (!contacts || contacts.length <= 0)
        return;

    var idx = 0;
    var ul = $("<ul></ul>").attr("class", "nav nav-tabs");
    var dv = $("<div></div>").attr("class", "tab-content");
    contacts.forEach(function (contact) {
        idx++;

        var s = "";
        if (contacts.length > 1)
            s = idx.toString();//" <span class='label label-accent'>{0}</span>".format(idx.toString());

        var li = $("<li></li>")
            .html("<a data-toggle='tab' href='#tab-{0}' aria-expanded='true'>Contact {1}</a>"
                .format(idx.toString(), s));
        if (idx === 1)
            li.attr("class", "active");
        //ul.append(li);
        ul.get(0).appendChild(li.get(0));
        //------------------------------
        var d = $("<div></div>")
            .attr("class", "tab-pane")
            .attr("id", "tab-{0}".format(idx.toString()));
        if (idx === 1)
            d.toggleClass("active");
        var dc = $("<div></div>")
            .attr("class", "panel-body");
        //d.append(dc);
        d.get(0).appendChild(dc.get(0));
        var t = $("<table></table>")
            .attr("class", "table table-hover table-striped");
        //dc.append(t);
        dc.get(0).appendChild(t.get(0));

        var tb = $("<tbody></tbody>");
        //t.append(tb);
        t.get(0).appendChild(tb.get(0));
        //---------------------
        //tb.append($("<tr></tr>"));
        tb.get(0).appendChild($("<tr></tr>").get(0));
        var tr = tb.find("tr:last");
        /*tr.append($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactName, idx.toString())));*/
        tr.get(0).appendChild($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactName, idx.toString())).get(0));
        /*tr.append($("<td></td>")
            .html("<span>{0}</span>".format(contact.Name)));*/
        tr.get(0).appendChild($("<td></td>")
            .html("<span>{0}</span>".format(contact.Name)).get(0));

        //tb.append($("<tr></tr>"));
        tb.get(0).appendChild($("<tr></tr>").get(0));

        tr = tb.find("tr:last");
        /*tr.append($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactAddress)));*/
        tr.get(0).appendChild($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactAddress)).get(0));

        /*tr.append($("<td></td>")
            .html("<span>{0}</span>".format(contact.Address)));*/
        tr.get(0).appendChild($("<td></td>")
            .html("<span>{0}</span>".format(contact.Address)).get(0));

        //tb.append($("<tr></tr>"));
        tb.get(0).appendChild($("<tr></tr>").get(0));

        tr = tb.find("tr:last");
        /*tr.append($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactPhoneNumber)));*/
        tr.get(0).appendChild($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactPhoneNumber)).get(0));

        /*tr.append($("<td></td>")
            .html("<span>{0}</span>".format(contact.PhoneNumber)));*/
        tr.get(0).appendChild($("<td></td>")
            .html("<span>{0}</span>".format(contact.PhoneNumber)).get(0));


        //tb.append($("<tr></tr>"));
        tb.get(0).appendChild($("<tr></tr>").get(0));

        tr = tb.find("tr:last");
        /*tr.append($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactEMail)));*/
        tr.get(0).appendChild($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactEMail)).get(0));


        /*tr.append($("<td></td>")
            .html("<span>{0}</span>".format(contact.EMail)));*/
        tr.get(0).appendChild($("<td></td>")
            .html("<span>{0}</span>".format(contact.EMail)).get(0));

        //---------------------
        //dv.append(d);
        dv.get(0).appendChild(d.get(0));

    });

    //tab.append("<h4><i class='per pe-7s-id text-accent'></i> Contact Points</h4>");
    tab.get(0).appendChild($("<h4><i class='per pe-7s-id text-accent'></i> Contact Points</h4>").get(0));


    //tab.append(ul);
    tab.get(0).appendChild(ul.get(0));

    //tab.append(dv);
    tab.get(0).appendChild(dv.get(0));

}
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

