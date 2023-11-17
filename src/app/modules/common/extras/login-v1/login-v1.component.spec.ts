import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginV1Component } from './login-v1.component';

describe('LoginV1Component', () => {
  let component: LoginV1Component;
  let fixture: ComponentFixture<LoginV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
