"use strict";
var wfa_grid_new_1 = require("./v1/wfa-grid-new");
var WfaGridSpec = (function () {
    function WfaGridSpec() {
    }
    WfaGridSpec.gettestspec = function () {
        return [
            { name: "pageSize", value: 5 }
        ];
    };
    WfaGridSpec.getStyle = function () {
        return {
            column: 12
        };
    };
    WfaGridSpec.getcomponentspec = function (testConfig) {
        var _data = new wfa_grid_new_1.WFAGridNewData();
        _data.allowPaging = true;
        _data.pageSize = parseInt(testConfig["pageSize"]);
        _data.columns = [
            { headerText: "As Of", dataKey: "AsOf", dataType: "date" },
            {
                headerText: "Date", dataKey: "Date", dataType: "date"
            },
            {
                headerText: "Amount", dataKey: "Amount", dataType: "currency",
                textAlignment: "right", width: "20%"
            },
            { headerText: "Type", dataKey: "Type", dataType: "string" },
            { headerText: "State", dataKey: "State", dataType: "string" },
            { headerText: "TC", dataKey: "TC", dataType: "string" },
            { headerText: "Check No.", dataKey: "CheckNumber", dataType: "string" },
            { headerText: "Description", dataKey: "Description", dataType: "string" },
            {
                headerText: "Balance", dataKey: "Balance", dataType: "currency",
                textAlignment: "right", sortDirection: "descending"
            },
            { headerText: "Tracking No.", dataKey: "TrackingNo", dataType: "string" }
        ];
        _data.dataTable = [
            {
                "Date": "2011-03-11",
                "AsOf": "2012-02-17",
                "Description": "A",
                "Amount": "895.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "45023.69",
                "TrackingNo": "XIV"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "B",
                "Amount": "95.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "48530.69",
                "TrackingNo": "XV"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "756.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "48903.50",
                "TrackingNo": "XVI"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "236.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "36063.90",
                "TrackingNo": "XVII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "C",
                "Amount": "15.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "19.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "156.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "-223.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "-566.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "Z",
                "Amount": "-50.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "T",
                "Amount": "-20.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "T",
                "Amount": "-10.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "204.04",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
            {
                "Date": "2011-04-17",
                "AsOf": "2012-02-17",
                "Description": "--",
                "Amount": "-123.05",
                "Type": "--",
                "State": "--",
                "TC": "TC001",
                "CheckNumber": "0023",
                "Balance": "30783.50",
                "TrackingNo": "XVIII"
            },
        ];
        return { data: _data };
    };
    return WfaGridSpec;
}());
exports.wfaGrid = {
    "v1": { component: wfa_grid_new_1.WFAGridNewComponent, spec: WfaGridSpec }
};
