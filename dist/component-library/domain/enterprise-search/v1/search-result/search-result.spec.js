"use strict";
var search_result_1 = require("./search-result");
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
var SearchResultSpec = (function () {
    function SearchResultSpec() {
    }
    SearchResultSpec.gettestspec = function () {
        return [
            { name: "searchTerm", value: "JOHN HAILY" },
            { name: "searchCriteria", value: "Client" },
            { name: "subSearchCriteria", value: "customername" }
        ];
    };
    SearchResultSpec.getStyle = function () {
        return {
            column: 8
        };
    };
    SearchResultSpec.getcomponentspec = function (testConfig) {
        var _data = new search_result_1.SearchResultData();
        var model = MockCustomerSearchData;
        var employeeModel = MockEmployeeSearchData;
        _data.searchFor = testConfig["searchCriteria"] || "";
        _data.searchBy = testConfig["subSearchCriteria"] || "";
        _data.searchTerm = testConfig["searchTerm"] || "";
        if (_data.searchFor === "Client")
            _data.searchResult = model.CustomerSearchList;
        else
            _data.searchResult = employeeModel.EmployeeSearchList;
        return _data;
    };
    return SearchResultSpec;
}());
exports.SearchResultSpec = SearchResultSpec;
