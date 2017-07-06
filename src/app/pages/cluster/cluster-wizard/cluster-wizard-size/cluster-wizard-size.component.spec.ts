import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterWizardSizeComponent } from './cluster-wizard-size.component';

describe('ClusterWizardSizeComponent', () => {
  let component: ClusterWizardSizeComponent;
  let fixture: ComponentFixture<ClusterWizardSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterWizardSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterWizardSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
