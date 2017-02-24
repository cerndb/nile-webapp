/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClusterTable } from './cluster-table.component';


describe('ClusterTable', () => {
  let component: ClusterTable;
  let fixture: ComponentFixture<ClusterTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
