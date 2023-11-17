import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsAlertsComponent } from './modals-alerts.component';

describe('ModalsAlertsComponent', () => {
  let component: ModalsAlertsComponent;
  let fixture: ComponentFixture<ModalsAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
