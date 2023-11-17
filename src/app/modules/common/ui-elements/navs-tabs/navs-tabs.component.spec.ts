import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsTabsComponent } from './navs-tabs.component';

describe('NavsTabsComponent', () => {
  let component: NavsTabsComponent;
  let fixture: ComponentFixture<NavsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavsTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
