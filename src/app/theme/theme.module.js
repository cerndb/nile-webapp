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
var side_bar_1 = require("./elements/side-bar");
var menu_service_1 = require("./elements/side-bar/menu/menu.service");
var theme_config_1 = require("./theme.config");
var theme_configProvider_1 = require("./theme.configProvider");
var ELEMENT_COMPONENTS = [
    side_bar_1.SideBarComponent,
    side_bar_1.MenuItemComponent,
    side_bar_1.MenuComponent,
];
var ELEMENT_SERVICES = [
    menu_service_1.MenuService
];
var ElementsModule = ElementsModule_1 = (function () {
    function ElementsModule() {
    }
    ElementsModule.forRoot = function () {
        return {
            ngModule: ElementsModule_1,
            providers: [
                theme_configProvider_1.BaThemeConfigProvider,
                theme_config_1.BaThemeConfig
            ].concat(ELEMENT_SERVICES)
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
