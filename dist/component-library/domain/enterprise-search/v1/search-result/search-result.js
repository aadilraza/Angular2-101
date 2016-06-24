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
var SearchResultData = (function () {
    function SearchResultData() {
    }
    return SearchResultData;
}());
exports.SearchResultData = SearchResultData;
var SearchResultComponent = (function () {
    function SearchResultComponent() {
        var _this = this;
        this.selected = new core_1.EventEmitter();
        this.entitySelected = function (value) {
            _this.selected.emit({
                searchFor: _this.data.searchFor,
                searchTerm: _this.data.searchTerm,
                searchBy: _this.data.searchBy,
                selected: value
            });
        };
    }
    SearchResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', SearchResultData)
    ], SearchResultComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SearchResultComponent.prototype, "selected", void 0);
    SearchResultComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "search-result",
            templateUrl: "search-result.html",
            styleUrls: ["search-result.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());
exports.SearchResultComponent = SearchResultComponent;
