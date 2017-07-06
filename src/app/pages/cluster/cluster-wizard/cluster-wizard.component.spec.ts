import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterWizardComponent } from './cluster-wizard.component';

describe('ClusterWizardComponent', () => {
  let component: ClusterWizardComponent;
  let fixture: ComponentFixture<ClusterWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
