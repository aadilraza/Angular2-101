"use strict";
var wfa_calculator_1 = require("./v1/wfa-calculator");
var wfa_calculator_2 = require("./v2/wfa-calculator");
var WFACalculatorV1Spec = (function () {
    function WFACalculatorV1Spec() {
    }
    WFACalculatorV1Spec.gettestspec = function () {
        return [
            { name: "input1", value: "Hello!!" },
            { name: "a1", value: 5 },
            { name: "a2", value: "6" }
        ];
    };
    WFACalculatorV1Spec.getStyle = function () {
        return {
            column: 8
        };
    };
    WFACalculatorV1Spec.getcomponentspec = function (testConfig) {
        var _data = new wfa_calculator_1.WFACalculatorComponentData();
        _data.input1 = testConfig["input1"];
        _data.a1 = testConfig["a1"];
        _data.a2 = testConfig["a2"];
        return { data: _data };
    };
    return WFACalculatorV1Spec;
}());
var WFACalculatorV2Spec = (function () {
    function WFACalculatorV2Spec() {
    }
    WFACalculatorV2Spec.gettestspec = function () {
        return [
            { name: "input1", value: "Input 1" },
            { name: "input2", value: "Input 2" },
            { name: "a1", value: 5 },
            { name: "a2", value: 6 },
            { name: "a3", value: 6 },
            { name: "a4", value: 6 }
        ];
    };
    WFACalculatorV2Spec.getStyle = function () {
        return {
            column: 8
        };
    };
    WFACalculatorV2Spec.getcomponentspec = function (testConfig) {
        var _data = new wfa_calculator_2.WFACalculatorComponentData();
        _data.input1 = testConfig["input1"];
        _data.input2 = testConfig["input2"];
        _data.a1 = testConfig["a1"];
        _data.a2 = testConfig["a2"];
        _data.a3 = testConfig["a3"];
        _data.a4 = testConfig["a4"];
        return { data: _data };
    };
    return WFACalculatorV2Spec;
}());
exports.wfaCalculator = {
    "v1": { component: wfa_calculator_1.WFACalculatorComponent, spec: WFACalculatorV1Spec },
    "v2": { component: wfa_calculator_2.WFACalculatorComponent, spec: WFACalculatorV2Spec }
};
