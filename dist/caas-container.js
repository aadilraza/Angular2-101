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
var CAASContainerData = (function () {
    function CAASContainerData() {
        this.baseURL = "";
        this.componentName = "";
        this.componentClass = "";
        this.componentVersion = "v1";
        this.componentType = "domain";
    }
    return CAASContainerData;
}());
exports.CAASContainerData = CAASContainerData;
var CAASContainer = (function () {
    function CAASContainer(viewContainer, _cr) {
        var _this = this;
        this.viewContainer = viewContainer;
        this._cr = _cr;
        this._localBaseURL = System.baseURL;
        this.loadComponent = function (componentToTest) {
            // System.baseURL = this.data.baseURL;
            var self = _this;
            _this._cr.resolveComponent(componentToTest).then(function (cmpFactory) {
                var instance = _this.testComponentContainer.createComponent(cmpFactory).instance;
                // instance.data = this.data.componentData;
                _this.mapInputData(instance, self.data.componentClass, self.data.componentData);
                _this.subscribeToEvents(instance, self.data.componentClass, self.data.componentOutput);
                System.baseURL = _this._localBaseURL;
            });
        };
        this.mapInputData = function (componentInstance, componentClass, data) {
            for (var prop in data) {
                if (data.hasOwnProperty(prop)) {
                    componentInstance[prop] = data[prop];
                }
            }
            /* let propMetadata: any = Reflect.getMetadata("propMetadata", componentClass);
            let inputs: any = [];
    
            for (let key in propMetadata) {
                if (propMetadata.hasOwnProperty(key)) {
                    if (propMetadata[key].length > 0) {
                        let _hasOutput = propMetadata[key].filter(metadata => {
                            return (metadata instanceof InputMetadata);
                        });
    
                        if (_hasOutput && _hasOutput.length > 0) {
                            inputs.push(key);
                        }
                    }
                }
            }
    
            inputs.forEach(input => {
                componentInstance[input] = data[input] || {};
            }); */
        };
        this.subscribeToEvents = function (componentInstance, componentClass, data) {
            for (var prop in data) {
                if (data.hasOwnProperty(prop)) {
                    if (!!componentInstance[prop]) {
                        componentInstance[prop].subscribe(data[prop]);
                    }
                }
            }
            /* let propMetadata: any = Reflect.getMetadata("propMetadata", componentClass);
             let outputs: any = [];
     
             for (let key in propMetadata) {
                 if (propMetadata.hasOwnProperty(key)) {
                     if (propMetadata[key].length > 0) {
                         let _hasOutput = propMetadata[key].filter(metadata => {
                             return (metadata instanceof OutputMetadata);
                         });
     
                         if (_hasOutput && _hasOutput.length > 0) {
                             outputs.push(key);
                         }
                     }
                 }
             }
     
             outputs.forEach(output => {
                 componentInstance[output].subscribe(event => {
     
                 });
             });*/
        };
    }
    CAASContainer.prototype.ngOnInit = function () {
        var _this = this;
        if (!!this.data) {
            var _url = this.data.baseURL + "component-library/" + this.data.componentType + "/" + this.data.componentName + "/" + this.data.componentVersion + "/" + this.data.componentName + ".js";
            System.import(_url).then(function (refToLoadedModule) {
                _this.loadComponent(refToLoadedModule[_this.data.componentClass]);
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', CAASContainerData)
    ], CAASContainer.prototype, "data", void 0);
    __decorate([
        core_1.ViewChild("testComponentContainer", { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], CAASContainer.prototype, "testComponentContainer", void 0);
    CAASContainer = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "caas-container",
            template: "<div #testComponentContainer ></div>"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentResolver])
    ], CAASContainer);
    return CAASContainer;
}());
exports.CAASContainer = CAASContainer;
window.CAASContainer = CAASContainer;
