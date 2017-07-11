import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterWizardMenuComponent } from './cluster-wizard-menu.component';

describe('ClusterWizardMenuComponent', () => {
  let component: ClusterWizardMenuComponent;
  let fixture: ComponentFixture<ClusterWizardMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterWizardMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterWizardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
