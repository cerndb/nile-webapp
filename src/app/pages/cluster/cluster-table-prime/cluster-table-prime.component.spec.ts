import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterTablePrimeComponent } from './cluster-table-prime.component';

describe('ClusterTablePrimeComponent', () => {
  let component: ClusterTablePrimeComponent;
  let fixture: ComponentFixture<ClusterTablePrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterTablePrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterTablePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
