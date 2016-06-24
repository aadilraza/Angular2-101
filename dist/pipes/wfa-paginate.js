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
var Paginate = (function () {
    function Paginate() {
    }
    Paginate.prototype.transform = function (dataTableValues, controls) {
        if (controls.isPaging && dataTableValues.length > 0) {
            var first = (controls.pageNumber - 1) * controls.pageSize;
            var filteredDataTableValues = dataTableValues.slice(first, first + controls.pageSize);
            return filteredDataTableValues;
        }
        else
            return dataTableValues;
    };
    Paginate = __decorate([
        core_1.Pipe({
            name: "paginate"
        }), 
        __metadata('design:paramtypes', [])
    ], Paginate);
    return Paginate;
}());
exports.Paginate = Paginate;
