import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';


@NgModule({
  declarations: [
    BlankPageComponent
  ],
  imports: [
    CommonModule,
    BlankPageRoutingModule
  ]
})
export class BlankPageModule { }
