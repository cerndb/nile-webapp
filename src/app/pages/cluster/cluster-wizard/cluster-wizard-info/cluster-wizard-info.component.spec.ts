import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterWizardInfoComponent } from './cluster-wizard-info.component';

describe('ClusterWizardInfoComponent', () => {
  let component: ClusterWizardInfoComponent;
  let fixture: ComponentFixture<ClusterWizardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterWizardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterWizardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
