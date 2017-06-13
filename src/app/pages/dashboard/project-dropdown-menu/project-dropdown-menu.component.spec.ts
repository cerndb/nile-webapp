import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDropdownMenuComponent } from './project-dropdown-menu.component';

describe('ProjectDropdownMenuComponent', () => {
  let component: ProjectDropdownMenuComponent;
  let fixture: ComponentFixture<ProjectDropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDropdownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
