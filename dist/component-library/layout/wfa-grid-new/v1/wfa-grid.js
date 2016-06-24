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
var pipes_1 = require("../../../../pipes/pipes");
var directives_1 = require("../../../../directives/directives");
var wfa_grid_paginator_1 = require("./wfa-grid-paginator/wfa-grid-paginator");
var WFAGridNewData = (function () {
    function WFAGridNewData() {
        this.dataTable = [];
        this.columns = [];
        this.allowSorting = true;
        this.allowPaging = false;
        this.pageSize = 5;
        this.cellStyleFormatter = null;
        this.selectedRowClick = null;
        this.pagerSettings = { position: "bottom" };
    }
    return WFAGridNewData;
}());
exports.WFAGridNewData = WFAGridNewData;
var WFAGridNewComponent = (function () {
    function WFAGridNewComponent() {
        var _this = this;
        this.data = new WFAGridNewData();
        this.selectedRow = new core_1.EventEmitter();
        this.pageSize = 5;
        this.sortedTable = [];
        this.pageNumber = 1;
        this.optionChoices = [5, 10, 15, 20];
        this.calculateWidth = function (columns) {
            var countWidthProperty = 0;
            var totalWidth = 0;
            var remainingwidthPerColumn = 0;
            // Calculates default width of each coloumn
            var defaultWidthOfColumns = Math.floor(100 / (columns.length));
            // Calculate if coloumn width is explicitlly mentioned
            columns.forEach(function (item) {
                if (item.width != null) {
                    countWidthProperty++;
                    totalWidth += parseFloat(item.width);
                }
            });
            // Calculates remaining width of per column if coloumn width is explicitlly mentioned
            if (totalWidth !== 0 && columns.length !== countWidthProperty)
                remainingwidthPerColumn = Math.floor((100 - totalWidth) / (columns.length - countWidthProperty));
            if (countWidthProperty > 0) {
                columns.map(function (col) {
                    if (col.width == null) {
                        col.width = remainingwidthPerColumn.toString() + "%";
                    }
                });
            }
            else {
            }
            return columns;
        };
        this.pageChange = function ($event) {
            if (_this.pageNumber !== $event) {
                _this.pageNumber = $event;
                _this.sortedTable = _this.data.dataTable.slice((_this.pageNumber - 1) * _this.pageSize, _this.pageNumber * _this.pageSize);
            }
        };
        this.dropDownChanged = function (value) {
            _this.pageNumber = 1;
            _this.pageSize = value;
            _this.sortedTable = _this.data.dataTable.slice((_this.pageNumber - 1) * _this.pageSize, _this.pageNumber * _this.pageSize);
        };
        this.sort = function (header) {
            if (_this.data.allowSorting === true) {
                // Update sort direction of selected column.
                var _currentSortDirection_1 = _this.selctedColumn.sortDirection;
                _this.data.columns.map(function (col) {
                    col.sortDirection = "";
                    if (col.dataKey === header.dataKey) {
                        col.sortDirection = _currentSortDirection_1 === "descending" ? "ascending" : "descending";
                        _this.selctedColumn = col;
                    }
                });
                _this.data.dataTable = _this.sortDataTable(_this.data.dataTable, _this.selctedColumn.sortDirection, _this.selctedColumn.dataKey);
                _this.pageNumber = 1;
                _this.sortedTable = _this.data.dataTable.slice((_this.pageNumber - 1) * _this.pageSize, _this.pageNumber * _this.pageSize);
            }
        };
        this.sortDataTable = function (dataTable, sortDirection, sortColumnProperty) {
            switch (sortDirection) {
                case "ascending":
                    dataTable.sort(function (left, right) {
                        if (left[sortColumnProperty] === "--")
                            return -1;
                        else {
                            if (isNaN(Number(left[sortColumnProperty])) && isNaN(Number(left[sortColumnProperty]))) {
                                if (left[sortColumnProperty] === right[sortColumnProperty])
                                    return 0;
                                else if (left[sortColumnProperty] < right[sortColumnProperty])
                                    return -1;
                                else
                                    return 1;
                            }
                            else {
                                if (Number(left[sortColumnProperty]) === Number(right[sortColumnProperty]))
                                    return 0;
                                else if (Number(left[sortColumnProperty]) < Number(right[sortColumnProperty]))
                                    return -1;
                                else
                                    return 1;
                            }
                        }
                    });
                    break;
                case "descending":
                    dataTable.sort(function (left, right) {
                        if (right[sortColumnProperty] === "--")
                            return -1;
                        else {
                            if (isNaN(Number(left[sortColumnProperty])) && isNaN(Number(left[sortColumnProperty]))) {
                                if (left[sortColumnProperty] === right[sortColumnProperty])
                                    return 0;
                                else if (left[sortColumnProperty] > right[sortColumnProperty])
                                    return -1;
                                else
                                    return 1;
                            }
                            else {
                                if (Number(left[sortColumnProperty]) === Number(right[sortColumnProperty]))
                                    return 0;
                                else if (Number(left[sortColumnProperty]) > Number(right[sortColumnProperty]))
                                    return -1;
                                else
                                    return 1;
                            }
                        }
                    });
                    break;
                default:
                    break;
            }
            return dataTable;
        };
        this.rowClicked = function (value) {
            _this.selectedRow.emit(value);
        };
    }
    WFAGridNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!!this.data) {
            this.pageSize = this.data.pageSize;
            if (this.data.allowSorting === true) {
                this.data.columns.map(function (col) {
                    if (!!col.sortDirection) {
                        // If there is a given sortDirection use it.
                        _this.selctedColumn = col;
                        return false;
                    }
                });
                if (!this.selctedColumn) {
                    // Select default column for sorting if none provided
                    this.selctedColumn = this.data.columns[0];
                    this.selctedColumn.sortDirection = "descending";
                }
                this.sort(this.selctedColumn);
            }
            else {
                this.sortedTable = this.data.dataTable;
            }
            this.data.columns = this.calculateWidth(this.data.columns);
        }
    };
    WFAGridNewComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', WFAGridNewData)
    ], WFAGridNewComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WFAGridNewComponent.prototype, "selectedRow", void 0);
    WFAGridNewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "wfa-grid",
            templateUrl: "wfa-grid.html",
            styleUrls: ["wfa-grid.css"],
            directives: [directives_1.CurrencyFormatter, wfa_grid_paginator_1.WFAGridPaginator],
            pipes: [pipes_1.WfaCurrencyPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], WFAGridNewComponent);
    return WFAGridNewComponent;
}());
exports.WFAGridNewComponent = WFAGridNewComponent;
