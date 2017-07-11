import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterWizardAttributesComponent } from './cluster-wizard-attributes.component';

describe('ClusterWizardAttributesComponent', () => {
  let component: ClusterWizardAttributesComponent;
  let fixture: ComponentFixture<ClusterWizardAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterWizardAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterWizardAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
