import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordV2Component } from './forgot-password-v2.component';

describe('ForgotPasswordV2Component', () => {
  let component: ForgotPasswordV2Component;
  let fixture: ComponentFixture<ForgotPasswordV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
