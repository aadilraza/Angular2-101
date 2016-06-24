"use strict";
var enterprise_search_1 = require("./v1/enterprise-search");
var EnterpriseSearchSpec = (function () {
    function EnterpriseSearchSpec() {
    }
    EnterpriseSearchSpec.gettestspec = function () {
        return [
            { name: "isCustomerOnly", value: false },
            { name: "isEmployeeOnly", value: false },
            { name: "searchTerm", value: "John" }
        ];
    };
    EnterpriseSearchSpec.getStyle = function () {
        return {
            column: 8
        };
    };
    EnterpriseSearchSpec.getcomponentspec = function (testConfig) {
        var _data = new enterprise_search_1.EnterpriseSearchData();
        _data.isCustomerOnly = testConfig["isCustomerOnly"] === "true" ? true : false;
        _data.isEmployeeOnly = testConfig["isEmployeeOnly"] === "true" ? true : false;
        _data.searchTerm = testConfig["searchTerm"] || "";
        _data.callInfo = testConfig["callInfo"] || "";
        return { data: _data };
    };
    return EnterpriseSearchSpec;
}());
exports.enterpriseSearch = {
    "v1": { component: enterprise_search_1.EnterpriseSearchComponent, spec: EnterpriseSearchSpec }
};
