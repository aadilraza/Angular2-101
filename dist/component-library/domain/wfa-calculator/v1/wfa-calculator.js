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
var WFACalculatorComponentData = (function () {
    function WFACalculatorComponentData() {
        this.a1 = 0;
        this.a2 = 0;
    }
    return WFACalculatorComponentData;
}());
exports.WFACalculatorComponentData = WFACalculatorComponentData;
var WFACalculatorComponent = (function () {
    function WFACalculatorComponent() {
        var _this = this;
        this.data = new WFACalculatorComponentData();
        this.result = new core_1.EventEmitter();
        this.parseInt = function (param) {
            return parseInt(param);
        };
        this.saveResult = function () {
            _this.result.emit(parseInt(_this.data.a1.toString()) + parseInt(_this.data.a2.toString()));
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', WFACalculatorComponentData)
    ], WFACalculatorComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WFACalculatorComponent.prototype, "result", void 0);
    WFACalculatorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "wfa-calculator",
            templateUrl: "wfa-calculator.html",
            styleUrls: ["wfa-calculator.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], WFACalculatorComponent);
    return WFACalculatorComponent;
}());
exports.WFACalculatorComponent = WFACalculatorComponent;
