"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var cluster_table_component_1 = require("./cluster-table.component");
describe('ClusterTable', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [cluster_table_component_1.ClusterTable]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(cluster_table_component_1.ClusterTable);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
