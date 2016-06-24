"use strict";
var WFAGridPaginatorSpec = (function () {
    function WFAGridPaginatorSpec() {
    }
    WFAGridPaginatorSpec.gettestspec = function () {
        return [
            { name: "numOfRow", value: 50 },
            { name: "pageSize", value: 5 },
            { name: "pageNumber", value: 2 }
        ];
    };
    WFAGridPaginatorSpec.getStyle = function () {
        return {
            column: 12
        };
    };
    WFAGridPaginatorSpec.getcomponentspec = function (testConfig) {
        if (testConfig === void 0) { testConfig = {}; }
        return {
            numOfRow: testConfig["numOfRow"],
            pageSize: testConfig["pageSize"],
            pageNumber: parseInt(testConfig["pageNumber"])
        };
    };
    return WFAGridPaginatorSpec;
}());
exports.WFAGridPaginatorSpec = WFAGridPaginatorSpec;
