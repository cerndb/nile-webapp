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
var common_1 = require("@angular/common");
var theme_module_1 = require("../theme/theme.module");
var pages_routing_1 = require("./pages.routing");
var pages_component_1 = require("./pages.component");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var cluster_module_1 = require("./cluster/cluster.module");
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            theme_module_1.ElementsModule,
            dashboard_module_1.DashboardModule,
            cluster_module_1.ClusterModule,
            pages_routing_1.routing
        ],
        declarations: [pages_component_1.Pages]
    })
], PagesModule);
exports.PagesModule = PagesModule;
