"use strict";
var wfa_percent_1 = require("./wfa-percent");
describe("WfaPercentPipe", function () {
    var pipe;
    beforeEach(function () {
        pipe = new wfa_percent_1.WfaPercentPipe();
    });
    it('transforms "12" to "12.00%"', function () {
        expect(pipe.transform("12")).toEqual("12.00%");
    });
    it('transforms "15.936" to "15.94%"', function () {
        expect(pipe.transform("15.936")).toEqual("15.94%");
    });
    it('transforms "14.22" to "14.22%"', function () {
        expect(pipe.transform("14.22")).toEqual("14.22%");
    });
});
