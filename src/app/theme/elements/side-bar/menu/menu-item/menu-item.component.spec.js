"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var menu_item_component_1 = require("./menu-item.component");
describe('MenuItemComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [menu_item_component_1.MenuItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(menu_item_component_1.MenuItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
