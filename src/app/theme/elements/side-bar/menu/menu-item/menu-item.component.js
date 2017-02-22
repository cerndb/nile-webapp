"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MenuItemComponent = (function () {
    function MenuItemComponent() {
        this.child = false;
        this.itemHover = new core_1.EventEmitter();
        this.toggleSubMenu = new core_1.EventEmitter();
    }
    MenuItemComponent.prototype.onHoverItem = function ($event) {
        this.itemHover.emit($event);
    };
    MenuItemComponent.prototype.onToggleSubMenu = function ($event, item) {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    };
    return MenuItemComponent;
}());
__decorate([
    core_1.Input()
], MenuItemComponent.prototype, "menuItem", void 0);
__decorate([
    core_1.Input()
], MenuItemComponent.prototype, "child", void 0);
__decorate([
    core_1.Output()
], MenuItemComponent.prototype, "itemHover", void 0);
__decorate([
    core_1.Output()
], MenuItemComponent.prototype, "toggleSubMenu", void 0);
MenuItemComponent = __decorate([
    core_1.Component({
        selector: 'app-menu-item',
        templateUrl: 'menu-item.component.html',
        styleUrls: ['menu-item.component.scss']
    })
], MenuItemComponent);
exports.MenuItemComponent = MenuItemComponent;
