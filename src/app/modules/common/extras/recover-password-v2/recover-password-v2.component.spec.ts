import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordV2Component } from './recover-password-v2.component';

describe('RecoverPasswordV2Component', () => {
  let component: RecoverPasswordV2Component;
  let fixture: ComponentFixture<RecoverPasswordV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverPasswordV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
