"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var environment_1 = require("./environments/environment");
/*
 * App Module
 * our top level module that holds all of our pages
 */
var app_module_1 = require("./app/app.module");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
