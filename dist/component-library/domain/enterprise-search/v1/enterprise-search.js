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
var search_panel_1 = require("./search-panel/search-panel");
var search_result_1 = require("./search-result/search-result");
var endpoint_1 = require("../../../../services/endpoint");
var EnterpriseSearchData = (function () {
    function EnterpriseSearchData() {
        this.isEmployeeOnly = false;
        this.isCustomerOnly = false;
    }
    return EnterpriseSearchData;
}());
exports.EnterpriseSearchData = EnterpriseSearchData;
var EnterpriseSearchComponent = (function () {
    function EnterpriseSearchComponent(ds) {
        var _this = this;
        this.ds = ds;
        this.searchResult = new core_1.EventEmitter();
        this.loading = false;
        this.searchPanelData = new search_panel_1.SearchPanelData();
        this.searchResultData = new search_result_1.SearchResultData();
        this.selected = function (value) {
            _this.searchResult.emit(value);
        };
    }
    EnterpriseSearchComponent.prototype.ngOnInit = function () {
        if (!!this.data) {
            this.searchPanelData.callInfo = this.data.callInfo;
            this.searchPanelData.isCustomerOnly = this.data.isCustomerOnly;
            this.searchPanelData.isEmployeeOnly = this.data.isEmployeeOnly;
            this.searchPanelData.searchTerm = this.data.searchTerm;
        }
    };
    EnterpriseSearchComponent.prototype.startSearch = function ($event) {
        var _this = this;
        if ($event.searchCriteria === "Client") {
            this.loading = true;
            this.ds.request("http://localhost:52523/api/customersearch/" + $event.subSearchCriteria + "/" + $event.searchTerm).subscribe(function (result) {
                _this.loading = false;
                _this.searchResultData.searchFor = $event.searchCriteria;
                _this.searchResultData.searchBy = $event.subSearchCriteria;
                _this.searchResultData.searchTerm = $event.searchTerm;
                _this.searchResultData.searchResult = result.json().CustomerSearchList;
            });
            setTimeout(function () {
            }, 1000);
        }
        else if ($event.searchCriteria === "WFEmployee") {
            setTimeout(function () {
                _this.searchResultData.searchFor = $event.searchCriteria;
                _this.searchResultData.searchBy = $event.subSearchCriteria;
                _this.searchResultData.searchTerm = $event.searchTerm;
                _this.searchResultData.searchResult = MockEmployeeSearchData.EmployeeSearchList;
            }, 1000);
        }
    };
    EnterpriseSearchComponent.prototype.clearSearch = function ($event) {
        this.searchResultData.searchResult = [];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', EnterpriseSearchData)
    ], EnterpriseSearchComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EnterpriseSearchComponent.prototype, "searchResult", void 0);
    EnterpriseSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "enterprise-search",
            templateUrl: "enterprise-search.html",
            styleUrls: ["enterprise-search.css"],
            directives: [search_panel_1.SearchPanelComponent, search_result_1.SearchResultComponent],
            providers: [endpoint_1.EndpointService]
        }), 
        __metadata('design:paramtypes', [endpoint_1.EndpointService])
    ], EnterpriseSearchComponent);
    return EnterpriseSearchComponent;
}());
exports.EnterpriseSearchComponent = EnterpriseSearchComponent;
var MockCustomerSearchData = {
    "CustomerSearchList": [
        {
            "CustomerID": "50428082319215",
            "CustomerName": "JOHN HAILY",
            "SSN": "*****5346",
            "TaxID": "*****5346",
            "AccountNumber": null,
            "AccountType": null,
            "Product": null,
            "Channel": null,
            "CustomerSince": 0,
            "EmployeeID": null,
            "Address": null,
            "AddressDetails": {
                "AddressLineList": "2225 SAVANNAH CIR\r\n",
                "City": "O FALLON",
                "Country": null,
                "State": "MO",
                "ProvinceCode": "",
                "PostalCode": "633687977",
                "ZipCodeExtension": null
            },
            "ZipCode": "63368",
            "PhoneDetails": [
                {
                    "PhoneNumber": "3156987451",
                    "PhoneUsage": "Business"
                },
                {
                    "PhoneNumber": "8965412355",
                    "PhoneUsage": "Cell"
                },
                {
                    "PhoneNumber": "8796541236",
                    "PhoneUsage": "Fax"
                },
                {
                    "PhoneNumber": "6547567657",
                    "PhoneUsage": "Home"
                }
            ]
        }
    ]
};
var MockEmployeeSearchData = {
    "EmployeeSearchList": [
        {
            "EmployeeID": "1065053",
            "EmployeeName": "JOHN C MCCORMICK",
            "PrimaryPhone": "6922526",
            "Email": "john.mccormick1@wellsfargoadvisors.com",
            "Mac": "Mac 1",
            "CCAU": "CCAU 2",
            "Location": "2508 W SHAW AVE APPLE VALLEYCA",
            "teamMemberIdTypeCode": "HRIS",
            "Status": "ACTIVE",
            "AddressList": [
                "3035 SAVANNAH CIR\r\n",
                "O FALLON",
                "533202"
            ]
        },
        {
            "EmployeeID": "839678",
            "EmployeeName": "JOHN PARROTT",
            "PrimaryPhone": "4679800",
            "Email": "john.parrott@wfafinet.com",
            "Mac": "Mac 2",
            "CCAU": "CCAU 2",
            "Location": "2508 W SHAW AVE APPLE VALLEYCA",
            "teamMemberIdTypeCode": "HRIS",
            "Status": "ACTIVE",
            "AddressList": [
                "3035 SAVANNAH CIR\r\n",
                "O FALLON",
                "533202"
            ]
        }
    ]
};
