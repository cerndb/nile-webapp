"use strict";
var router_1 = require("@angular/router");
exports.routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/dashboard' }
];
/*Like creating the NgModule with the providers */
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
