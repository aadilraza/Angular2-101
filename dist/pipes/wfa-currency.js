"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var WfaCurrencyPipe = (function () {
    function WfaCurrencyPipe() {
    }
    WfaCurrencyPipe.prototype.transform = function (value) {
        var retVal;
        var val = parseFloat(value);
        if (isNaN(val)) {
            return "$0.00";
        }
        else {
            if (val < 0) {
                retVal = this.commaFormatter(Math.abs(val).toFixed(2));
                return "($" + retVal + ")";
            }
            else {
                retVal = this.commaFormatter(val.toFixed(2));
                return "$" + retVal;
            }
        }
    };
    WfaCurrencyPipe.prototype.commaFormatter = function (input) {
        var parts = input.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    };
    WfaCurrencyPipe = __decorate([
        core_1.Pipe({
            name: "wfaCurrency"
        }), 
        __metadata('design:paramtypes', [])
    ], WfaCurrencyPipe);
    return WfaCurrencyPipe;
}());
exports.WfaCurrencyPipe = WfaCurrencyPipe;
