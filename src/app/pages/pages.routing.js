"use strict";
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var cluster_table_component_1 = require("./cluster/cluster-table/cluster-table.component");
exports.routes = [
    {
        path: 'pages',
        component: pages_component_1.Pages,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: dashboard_component_1.Dashboard },
            { path: 'cluster', component: cluster_table_component_1.ClusterTable }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
