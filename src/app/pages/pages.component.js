"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by adediosf on 17/02/17.
 */
var core_1 = require("@angular/core");
var app_menu_1 = require("../app.menu");
var Pages = (function () {
    function Pages(_menuService) {
        this._menuService = _menuService;
    }
    /**
     * In order to update the side-bar menu with the pages.menu constant.
     */
    Pages.prototype.ngOnInit = function () {
        this._menuService.updateMenuByRoutes(app_menu_1.MENU);
    };
    return Pages;
}());
Pages = __decorate([
    core_1.Component({
        selector: 'pages',
        styles: [],
        template: "\n      <menu-bar></menu-bar>\n      <router-outlet></router-outlet>\n<!--    <ba-sidebar></ba-sidebar>\n    <ba-page-top></ba-page-top>\n    <div class=\"al-main\">\n      <div class=\"al-content\">\n        <ba-content-top></ba-content-top>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <ba-back-top position=\"200\"></ba-back-top>-->\n    "
    })
], Pages);
exports.Pages = Pages;
