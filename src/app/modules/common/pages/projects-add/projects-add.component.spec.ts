import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAddComponent } from './projects-add.component';

describe('ProjectsAddComponent', () => {
  let component: ProjectsAddComponent;
  let fixture: ComponentFixture<ProjectsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
