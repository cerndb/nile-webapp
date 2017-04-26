import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterDialogComponent } from './cluster-dialog.component';

describe('ClusterDialogComponent', () => {
  let component: ClusterDialogComponent;
  let fixture: ComponentFixture<ClusterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
