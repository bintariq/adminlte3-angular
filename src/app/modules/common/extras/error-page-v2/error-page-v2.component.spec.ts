import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageV2Component } from './error-page-v2.component';

describe('ErrorPageV2Component', () => {
  let component: ErrorPageV2Component;
  let fixture: ComponentFixture<ErrorPageV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPageV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPageV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
