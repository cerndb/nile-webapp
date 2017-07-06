import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterWizardMenuTabComponent } from './cluster-wizard-menu-tab.component';

describe('ClusterWizardMenuTabComponent', () => {
  let component: ClusterWizardMenuTabComponent;
  let fixture: ComponentFixture<ClusterWizardMenuTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterWizardMenuTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterWizardMenuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
