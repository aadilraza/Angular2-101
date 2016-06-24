"use strict";
var wfa_map_1 = require("./v1/wfa-map");
var WfaMapSpec = (function () {
    function WfaMapSpec() {
    }
    WfaMapSpec.gettestspec = function () {
        return [
            { name: "address", value: "1 N Jefferson Ave, St. Louis, MO" }
        ];
    };
    WfaMapSpec.getStyle = function () {
        return {
            column: 12
        };
    };
    WfaMapSpec.getcomponentspec = function (testConfig) {
        var _data = new wfa_map_1.WfaMapData();
        _data.address = testConfig["address"] || "1 N Jefferson Ave, St. Louis, MO";
        return { data: _data };
    };
    return WfaMapSpec;
}());
exports.wfaMap = {
    "v1": { component: wfa_map_1.WfaMapComponent, spec: WfaMapSpec }
};
