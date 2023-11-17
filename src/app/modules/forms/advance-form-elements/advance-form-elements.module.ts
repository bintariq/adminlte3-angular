import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceFormElementsRoutingModule } from './advance-form-elements-routing.module';
import { AdvanceFormElementsComponent } from './advance-form-elements.component';
// import { NgSelect2Module } from 'ng-select2';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdvanceFormElementsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdvanceFormElementsRoutingModule,
    // NgSelect2Module
  ]
})
export class AdvanceFormElementsModule { }
