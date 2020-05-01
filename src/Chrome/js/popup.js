var worldmap;
var cs;
var lp;
ContactName = "Name";
ContactAddress = "Address";
ContactPhoneNumber = "Phone Number";
ContactEMail = "EMail";

document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.getSelected(null,
        function (g) {
            var data = chrome.extension.getBackgroundPage().tabdata[g.id];
            SetInfo(data.info, data);
        });
});

$(document).ready(function () {
    $("#ver").html(chrome.runtime.getManifest().version);

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

    $('body').on('click', 'a', function () {
        if ($(this).attr('href').startsWith('#'))
            return;
        chrome.tabs.create({ url: $(this).attr('href') });
        return false;
    });

    $("#txtIpAddress").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#openHost").click();
        }
    });

    $("#openHost").click(function () {
        chrome.tabs.create({ url: "https://realip.info/service/lookup/{0}".format($("#txtIpAddress").val()) });
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
        $("#txtIpAddress").val(data.cur_domain);

        $("#lblIp").html(ipInfo.Data.Ip);
        $("#lblReverse").html(ipInfo.Data.Reverse);
        $("#lblNetRange").html(ipInfo.Data.NetRange);
        $("#lblNetName").html(ipInfo.Data.NetName);
        $("#lblDescription").html(ipInfo.Data.Description);
        $("#lblCountryName").html(ipInfo.Data.CountryName);
        $("#lblCountryCode").html(ipInfo.Data.CountryCode
            ? ipInfo.Data.CountryCode + " (" + ipInfo.Data.CountryCode3 + ")"
            : "");
        $("#imgCountryFlag").attr("src", "/images/flags/{0}.png".format(ipInfo.Data.CountryCode3));
        $("#lblRegionName").html(ipInfo.Data.RegionName);
        $("#lblRegionCode").html(ipInfo.Data.RegionCode);
        $("#lblCity").html(ipInfo.Data.City);
        $("#lblZipCode").html(ipInfo.Data.ZipCode);
        $("#lblLatitude").html(ipInfo.Data.Latitude);
        $("#lblLongitude").html(ipInfo.Data.Longitude);
        $("#lblTimeZone").html(ipInfo.Data.TimeZone);
        $("#lblIsp").html(ipInfo.Data.Isp);
        $("#lblOrganization").html(ipInfo.Data.Organization);
        $("#lblAsNumberName").html(ipInfo.Data.AsNumberName);

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
        ul.append(li);
        //------------------------------
        var d = $("<div></div>")
            .attr("class", "tab-pane")
            .attr("id", "tab-{0}".format(idx.toString()));
        if (idx === 1)
            d.toggleClass("active");
        var dc = $("<div></div>")
            .attr("class", "panel-body");
        d.append(dc);
        var t = $("<table></table>")
            .attr("class", "table table-hover table-striped");
        dc.append(t);
        var tb = $("<tbody></tbody>");
        t.append(tb);
        //---------------------
        tb.append($("<tr></tr>"));
        var tr = tb.find("tr:last");
        tr.append($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactName, idx.toString())));
        tr.append($("<td></td>")
            .html("<span>{0}</span>".format(contact.Name)));

        tb.append($("<tr></tr>"));
        tr = tb.find("tr:last");
        tr.append($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactAddress)));
        tr.append($("<td></td>")
            .html("<span>{0}</span>".format(contact.Address)));

        tb.append($("<tr></tr>"));
        tr = tb.find("tr:last");
        tr.append($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactPhoneNumber)));
        tr.append($("<td></td>")
            .html("<span>{0}</span>".format(contact.PhoneNumber)));

        tb.append($("<tr></tr>"));
        tr = tb.find("tr:last");
        tr.append($("<td></td>")
            .attr("class", "tdTitle")
            .html("<strong class='c-white'>{0}</strong>".format(ContactEMail)));
        tr.append($("<td></td>")
            .html("<span>{0}</span>".format(contact.EMail)));

        //---------------------
        dv.append(d);
    });

    tab.append("<h4><i class='per pe-7s-id text-accent'></i> Contact Points</h4>");


    tab.append(ul);
    tab.append(dv);
}
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

