import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageV1Component } from './error-page-v1.component';

describe('ErrorPageV1Component', () => {
  let component: ErrorPageV1Component;
  let fixture: ComponentFixture<ErrorPageV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPageV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPageV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
