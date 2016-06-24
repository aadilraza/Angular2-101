"use strict";
var search_panel_1 = require("./search-panel");
var SearchPanelSpec = (function () {
    function SearchPanelSpec() {
    }
    SearchPanelSpec.gettestspec = function () {
        return [
            { name: "isCustomerOnly", value: false },
            { name: "isEmployeeOnly", value: false },
            { name: "searchTerm", value: "LISHA" }
        ];
    };
    SearchPanelSpec.getStyle = function () {
        return {
            column: 7
        };
    };
    SearchPanelSpec.getcomponentspec = function (testConfig) {
        if (testConfig === void 0) { testConfig = {}; }
        var _data = new search_panel_1.SearchPanelData();
        _data.isCustomerOnly = testConfig["isCustomerOnly"] === "true" ? true : false;
        _data.isEmployeeOnly = testConfig["isEmployeeOnly"] === "true" ? true : false;
        _data.searchTerm = testConfig["searchTerm"] || "";
        _data.callInfo = testConfig["callInfo"] || "";
        return _data;
    };
    return SearchPanelSpec;
}());
exports.SearchPanelSpec = SearchPanelSpec;
