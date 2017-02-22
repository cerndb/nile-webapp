"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_smart_table_1 = require("ng2-smart-table");
var cluster_table_component_1 = require("./cluster-table/cluster-table.component");
var ClusterModule = (function () {
    function ClusterModule() {
    }
    return ClusterModule;
}());
ClusterModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ng2_smart_table_1.Ng2SmartTableModule,
        ],
        declarations: [
            cluster_table_component_1.ClusterTable
        ]
    })
], ClusterModule);
exports.ClusterModule = ClusterModule;
/** TODO: Here it will be added ADD INSTANCES, REQUEST CLUSTER */
