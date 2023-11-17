import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyUserMenuComponent } from './legacy-user-menu.component';

describe('LegacyUserMenuComponent', () => {
  let component: LegacyUserMenuComponent;
  let fixture: ComponentFixture<LegacyUserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegacyUserMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegacyUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
