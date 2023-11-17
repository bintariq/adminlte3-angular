import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralFormElementsRoutingModule } from './general-form-elements-routing.module';
import { GeneralFormElementsComponent } from './general-form-elements.component';


@NgModule({
  declarations: [
    GeneralFormElementsComponent
  ],
  imports: [
    CommonModule,
    GeneralFormElementsRoutingModule
  ]
})
export class GeneralFormElementsModule { }
