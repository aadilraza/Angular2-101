"use strict";
var wfa_date_1 = require("./wfa-date");
describe("WfaDatePipe", function () {
    var pipe;
    beforeEach(function () {
        pipe = new wfa_date_1.WfaDatePipe();
    });
    it('transforms "10 June 2016" to "06-10-2016"', function () {
        expect(pipe.transform("10 June 2016")).toEqual("06-10-2016");
    });
    it('transforms "1-2-16" to "01-02-2016"', function () {
        expect(pipe.transform("1-2-16")).toEqual("01-02-2016");
    });
    it('transforms "2016-06-12" to "06-12-2016"', function () {
        expect(pipe.transform("2016-06-12")).toEqual("06-12-2016");
    });
});
