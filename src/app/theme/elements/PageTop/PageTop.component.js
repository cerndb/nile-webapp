"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("style-loader!./PageTop.component.scss");
var PageTop = (function () {
    function PageTop() {
        this.isScrolled = false;
        this.isMenuCollapsed = false;
    }
    // constructor(private _state:GlobalState) {
    //   this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
    //     this.isMenuCollapsed = isCollapsed;
    //   });
    // }
    PageTop.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        //    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    };
    PageTop.prototype.scrolledChanged = function (isScrolled) {
        this.isScrolled = isScrolled;
    };
    return PageTop;
}());
PageTop = __decorate([
    core_1.Component({
        selector: 'page-top',
        templateUrl: 'PageTop.component.html',
    })
], PageTop);
exports.PageTop = PageTop;
