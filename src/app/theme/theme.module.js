"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by adediosf on 21/02/17.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var elements_1 = require("./elements");
var ELEMENT_COMPONENTS = [
    elements_1.SideBarComponent,
    elements_1.MenuItemComponent,
    elements_1.MenuComponent,
    elements_1.PageTop
];
var ELEMENT_SERVICES = [
    elements_1.MenuService
];
var ElementsModule = ElementsModule_1 = (function () {
    function ElementsModule() {
    }
    ElementsModule.forRoot = function () {
        return {
            ngModule: ElementsModule_1,
            providers: ELEMENT_SERVICES.slice(),
        };
    };
    return ElementsModule;
}());
ElementsModule = ElementsModule_1 = __decorate([
    core_1.NgModule({
        declarations: ELEMENT_COMPONENTS.slice(),
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
        ],
        exports: ELEMENT_COMPONENTS.slice()
    })
], ElementsModule);
exports.ElementsModule = ElementsModule;
var ElementsModule_1;
