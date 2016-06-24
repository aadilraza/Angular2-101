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
var WFAGridPaginator = (function () {
    function WFAGridPaginator() {
        var _this = this;
        this.numOfRow = 50;
        this.pageSize = 5;
        this.pageChange = new core_1.EventEmitter();
        this.maxSize = 7;
        this.previous = function () {
            _this.pageNumber = _this.pageNumber - 1;
            _this.update();
        };
        this.next = function () {
            _this.pageNumber = _this.pageNumber + 1;
            _this.update();
        };
        this.moveToPage = function (index) {
            _this.pageNumber = index;
            _this.update();
        };
    }
    Object.defineProperty(WFAGridPaginator.prototype, "pageNumber", {
        get: function () {
            return this._pageNumber;
        },
        set: function (value) {
            this._pageNumber = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    WFAGridPaginator.prototype.ngOnInit = function () {
        this.update();
    };
    WFAGridPaginator.prototype.ngOnChanges = function () {
        this.update();
    };
    WFAGridPaginator.prototype.update = function () {
        this.noOfPages = Math.ceil(this.numOfRow / this.pageSize);
        this.allPages = this.createPageArray(this.pageNumber, this.pageSize, this.numOfRow, this.maxSize);
        this.pageChange.emit(this.pageNumber);
    };
    WFAGridPaginator.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    WFAGridPaginator.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = "...";
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], WFAGridPaginator.prototype, "numOfRow", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], WFAGridPaginator.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input("pageNumber"), 
        __metadata('design:type', Number)
    ], WFAGridPaginator.prototype, "pageNumber", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WFAGridPaginator.prototype, "pageChange", void 0);
    WFAGridPaginator = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "wfa-grid-paginator",
            templateUrl: "wfa-grid-paginator.html",
            styleUrls: ["wfa-grid-paginator.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], WFAGridPaginator);
    return WFAGridPaginator;
}());
exports.WFAGridPaginator = WFAGridPaginator;
