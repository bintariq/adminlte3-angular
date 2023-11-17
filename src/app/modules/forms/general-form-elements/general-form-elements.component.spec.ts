import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFormElementsComponent } from './general-form-elements.component';

describe('GeneralFormElementsComponent', () => {
  let component: GeneralFormElementsComponent;
  let fixture: ComponentFixture<GeneralFormElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralFormElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralFormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
