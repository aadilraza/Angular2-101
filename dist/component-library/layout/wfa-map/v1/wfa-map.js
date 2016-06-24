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
var WfaMapData = (function () {
    function WfaMapData() {
    }
    return WfaMapData;
}());
exports.WfaMapData = WfaMapData;
var WfaMapComponent = (function () {
    function WfaMapComponent() {
        var _this = this;
        this.data = new WfaMapData();
        this.map = function () {
            var address = _this.data.address;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ "address": address }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        animation: google.maps.Animation.DROP,
                        position: results[0].geometry.location
                    });
                }
                else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
            var myLatLng = { lat: -25.363, lng: 131.044 };
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: myLatLng,
                zoomControl: true,
            });
        };
    }
    WfaMapComponent.prototype.ngOnInit = function () {
        this.map();
    };
    WfaMapComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', WfaMapData)
    ], WfaMapComponent.prototype, "data", void 0);
    WfaMapComponent = __decorate([
        core_1.Component({
            selector: "wfa-map",
            template: "\n        <div class=\"map-style\" id=\"map\" style=\"width:330px; \n    height:210px; \n    border: 2px solid gray; \n    border-radius:5px;\"></div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], WfaMapComponent);
    return WfaMapComponent;
}());
exports.WfaMapComponent = WfaMapComponent;
