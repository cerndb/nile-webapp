import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterWizardTypeComponent } from './cluster-wizard-type.component';

describe('ClusterWizardTypeComponent', () => {
  let component: ClusterWizardTypeComponent;
  let fixture: ComponentFixture<ClusterWizardTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterWizardTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterWizardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
