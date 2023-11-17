import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginV2Component } from './login-v2.component';

describe('LoginV2Component', () => {
  let component: LoginV2Component;
  let fixture: ComponentFixture<LoginV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
