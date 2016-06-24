"use strict";
var wfa_currency_1 = require("./wfa-currency");
describe("WfaCurrencyPipe", function () {
    var pipe;
    beforeEach(function () {
        pipe = new wfa_currency_1.WfaCurrencyPipe();
    });
    it('transforms "205.46" to "$205.46"', function () {
        expect(pipe.transform("205.46")).toEqual("$205.46");
    });
    it('transforms "96751.563" to "$96,751.56"', function () {
        expect(pipe.transform("96751.563")).toEqual("$96,751.56");
    });
    it('transforms "-1542.987" to "($1,542.99)"', function () {
        expect(pipe.transform("-1542.987")).toEqual("($1,542.99)");
    });
});
