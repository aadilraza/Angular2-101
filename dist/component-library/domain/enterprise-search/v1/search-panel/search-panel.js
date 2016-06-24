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
var SearchPanelData = (function () {
    function SearchPanelData() {
        this.isEmployeeOnly = false;
        this.isCustomerOnly = false;
    }
    return SearchPanelData;
}());
exports.SearchPanelData = SearchPanelData;
var SearchPanelComponent = (function () {
    function SearchPanelComponent() {
        var _this = this;
        this.startSearch = new core_1.EventEmitter();
        this.clearSearch = new core_1.EventEmitter();
        this.SEARCH_TRIGGER_MIN_CHAR = 2;
        this.invalid = false;
        this.searchTimer = null;
        this._filterTerm = "";
        this.searchResults = function (value) {
            clearTimeout(_this.searchTimer);
            _this.emitSearch(value);
        };
        this.changeSearchCriteria = function (searchCriteria) {
            _this.selectedSearchCriteria = searchCriteria;
            // this.selectedSearchSubCriteria = this.selectedSearchCriteria.subCriteria[0];
            _this.changeSearchSubCriteria(_this.selectedSearchCriteria.subCriteria[0]);
            // this.invalid = false;
            // if (this.validateInput(this.filterTerm)) {
            //   //this.emitSearch();
            //   this.searchResults();
            // }
        };
        this.changeSearchSubCriteria = function (subCriteria) {
            _this.selectedSearchSubCriteria = subCriteria;
            if (!!_this.filterTerm) {
                if ((subCriteria.value === "accountnumber" || subCriteria.value === "ssn" || subCriteria.value === "phonenumber") && !_this.filterTerm.match(/^[0-9- ]+$/))
                    _this.filterTerm = "";
                if (subCriteria.value === "customername" && _this.filterTerm.match(/^[0-9-]+$/))
                    _this.filterTerm = "";
                if ((subCriteria.value === "employeename" || subCriteria.value === "elid") && _this.filterTerm.match(/^[0-9-]+$/))
                    _this.filterTerm = "";
                if ((subCriteria.value === "employeeid" || subCriteria.value === "employeephonenumber") && !_this.filterTerm.match(/^[0-9- ]+$/))
                    _this.filterTerm = "";
                if ((subCriteria.value === "phonenumber" || subCriteria.value === "employeephonenumber") && _this.filterTerm.match(/^[0-9- ]+$/)) {
                    var search = _this.filterTerm.split("-").join("");
                    search = search.match(new RegExp(".{1,4}$|.{1,3}", "g")).join("-");
                    _this.filterTerm = search;
                }
                else if (_this.selectedSearchSubCriteria.value === "ssn" && _this.filterTerm.match(/^[0-9- ]+$/)) {
                    var search = _this.filterTerm.split("-").join("");
                    search = search.match(new RegExp(".{1,3}$|.{1,2}", "g")).join("-");
                    _this.filterTerm = search;
                }
                else {
                    _this.filterTerm = _this.filterTerm.replace(/-/g, "");
                }
            }
            _this.invalid = false;
            // if (this.filterTerm.length > 0) {
            //   if (this.validateInput(this.filterTerm)) {
            //     this.searchResults(this.filterTerm);
            //   }
            // }
            //this.emitSearch();
        };
        this.checkForEnter = function (event) {
            if (event.currentTarget.value.toLowerCase() !== SearchPanelComponent.previousSearchTerm) {
                _this.filterTerm = _this.filterTerm.toUpperCase();
                SearchPanelComponent.previousSearchTerm = event.currentTarget.value;
                if ((_this.selectedSearchSubCriteria.value === "phonenumber" || _this.selectedSearchSubCriteria.value === "employeephonenumber") &&
                    _this.filterTerm.match(/^[0-9- ]+$/)) {
                    var search = _this.filterTerm.split("-").join("");
                    search = search.match(new RegExp(".{1,4}$|.{1,3}", "g")).join("-");
                    _this.filterTerm = search;
                }
                else if (_this.selectedSearchSubCriteria.value === "ssn" && _this.filterTerm.match(/^[0-9- ]+$/)) {
                    var search = _this.filterTerm.split("-").join("");
                    search = search.match(new RegExp(".{1,4}$|.{1,2}", "g")).join("-");
                    _this.filterTerm = search;
                }
                else {
                    _this.filterTerm = _this.filterTerm.replace(/-/g, "");
                }
            }
        };
        this.clearsearchBox = function () {
            _this.filterTerm = "";
            _this.clearSearch.emit("");
        };
        this.switchSearchCriteria = function (value) {
            if (_this.selectedSearchCriteria.value === "Client") {
                if (value.match(/^[a-zA-Z ]+$/) &&
                    (_this.selectedSearchSubCriteria.value !== "accountnumber" || _this.selectedSearchSubCriteria.value !== "ssn" ||
                        _this.selectedSearchSubCriteria.value !== "phonenumber") && _this.selectedSearchSubCriteria.value !== "customername") {
                    _this.changeSearchSubCriteria(_this.searchCriteriaList[0].subCriteria[0]);
                }
                if (value.match(/^[0-9]+$/) && _this.selectedSearchSubCriteria.value != "ssn" && _this.selectedSearchSubCriteria.value !== "phonenumber"
                    && _this.selectedSearchSubCriteria.value !== "accountnumber") {
                    _this.changeSearchSubCriteria(_this.searchCriteriaList[0].subCriteria[1]);
                }
            }
            else {
                if (value.match(/^[a-zA-Z ]+$/) && (_this.selectedSearchSubCriteria.value !== "elid" && _this.selectedSearchSubCriteria.value !== "employeename"))
                    _this.changeSearchSubCriteria(_this.searchCriteriaList[1].subCriteria[0]);
                if (value.match(/^[0-9]+$/) && _this.selectedSearchSubCriteria.value !== "employeephonenumber" && _this.selectedSearchSubCriteria.value !== "employeeid")
                    _this.changeSearchSubCriteria(_this.searchCriteriaList[1].subCriteria[1]);
            }
        };
        this.validateInput = function (value) {
            var isValid = true;
            var matchingExp;
            if (_this.selectedSearchCriteria.value === "Client") {
                if (_this.selectedSearchSubCriteria.value === "accountnumber" || _this.selectedSearchSubCriteria.value === "phonenumber" ||
                    _this.selectedSearchSubCriteria.value === "ssn") {
                    matchingExp = /^[0-9- ]+$/;
                }
                else {
                    matchingExp = /^[a-zA-Z0-9- ]+$/;
                }
            }
            else {
                if (_this.selectedSearchSubCriteria.value === "employeephonenumber" || _this.selectedSearchSubCriteria.value === "employeeid") {
                    matchingExp = /^[0-9- ]+$/;
                }
                else
                    matchingExp = /^[a-zA-Z0-9- ]+$/;
            }
            value = value.replace(/-/g, "");
            _this.invalid = false;
            if (!value.match(matchingExp)) {
                isValid = false;
                _this.invalid = true;
            }
            return isValid;
        };
        this.searchCriteriaList = [
            {
                name: "Client",
                value: "Client",
                disabled: false,
                subCriteria: [
                    {
                        name: "Name",
                        value: "customername",
                        type: "text",
                        textValue: "First Last or Company"
                    },
                    {
                        name: "Account Number",
                        value: "accountnumber",
                        type: "number",
                        textValue: "0123456789"
                    },
                    {
                        name: "SSN/Tax Id",
                        value: "ssn",
                        type: "number",
                        textValue: "012-34-5678"
                    },
                    {
                        name: "Phone Number",
                        value: "phonenumber",
                        type: "number",
                        textValue: "012-345-6789"
                    }
                ]
            },
            {
                name: "Team Member",
                value: "WFEmployee",
                disabled: false,
                subCriteria: [
                    {
                        name: "Name",
                        value: "employeename",
                        type: "text",
                        textValue: "Last First"
                    },
                    {
                        name: "Team Member ID(HRIS)",
                        value: "employeeid",
                        type: "number",
                        textValue: "0123456"
                    },
                    {
                        name: "ELID",
                        value: "elid",
                        type: "text",
                        textValue: "A012345"
                    },
                    {
                        name: "Phone Number 2",
                        value: "employeephonenumber",
                        type: "number",
                        textValue: "012-345-6789"
                    }
                ]
            }];
    }
    Object.defineProperty(SearchPanelComponent.prototype, "filterTerm", {
        get: function () {
            return this._filterTerm;
        },
        set: function (value) {
            var _this = this;
            if (!!value) {
                value = value.toUpperCase();
                if (!(value.trim().length > 0)) {
                    this.invalid = false;
                }
                this._filterTerm = value.trim();
                this.switchSearchCriteria(value.trim());
                if (value.trim().length <= this.SEARCH_TRIGGER_MIN_CHAR) {
                    //  Clear Search Result
                    this.clearSearch.emit("");
                }
                else {
                    if (this.searchTimer) {
                        clearTimeout(this.searchTimer);
                    }
                    if (this.validateInput(value.trim())) {
                        this.searchTimer = setTimeout(function () {
                            _this.searchResults(value);
                        }, 1000);
                    }
                }
            }
            else {
                this._filterTerm = value;
                this.clearSearch.emit("");
            }
        },
        enumerable: true,
        configurable: true
    });
    SearchPanelComponent.prototype.emitSearch = function (value) {
        if (value.length > this.SEARCH_TRIGGER_MIN_CHAR && !!this.selectedSearchCriteria
            && !!this.selectedSearchSubCriteria) {
            this.startSearch.emit({
                searchTerm: value.replace(/-/g, ""),
                searchCriteria: this.selectedSearchCriteria.value,
                subSearchCriteria: this.selectedSearchSubCriteria.value
            });
        }
        else {
            this.clearSearch.emit("");
        }
    };
    SearchPanelComponent.prototype.ngOnInit = function () {
        if (this.data.isCustomerOnly === true) {
            this.searchCriteriaList[1].disabled = true;
            this.selectedSearchCriteria = this.searchCriteriaList[0];
        }
        else if (this.data.isEmployeeOnly === true) {
            this.searchCriteriaList[0].disabled = true;
            this.selectedSearchCriteria = this.searchCriteriaList[1];
        }
        else {
            this.selectedSearchCriteria = this.searchCriteriaList[0];
        }
        this.selectedSearchSubCriteria = this.selectedSearchCriteria.subCriteria[0];
        this.filterTerm = this.data.searchTerm;
    };
    SearchPanelComponent.previousSearchTerm = "";
    __decorate([
        core_1.Input(), 
        __metadata('design:type', SearchPanelData)
    ], SearchPanelComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SearchPanelComponent.prototype, "startSearch", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SearchPanelComponent.prototype, "clearSearch", void 0);
    __decorate([
        core_1.Input("filterTerm"), 
        __metadata('design:type', String)
    ], SearchPanelComponent.prototype, "filterTerm", null);
    SearchPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "search-panel",
            templateUrl: "search-panel.html",
            styleUrls: ["search-panel.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPanelComponent);
    return SearchPanelComponent;
}());
exports.SearchPanelComponent = SearchPanelComponent;
