import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFormElementsComponent } from './advance-form-elements.component';

describe('AdvanceFormElementsComponent', () => {
  let component: AdvanceFormElementsComponent;
  let fixture: ComponentFixture<AdvanceFormElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceFormElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceFormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
