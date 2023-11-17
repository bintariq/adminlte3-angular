import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterPageRoutingModule } from './starter-page-routing.module';
import { StarterPageComponent } from './starter-page.component';


@NgModule({
  declarations: [
    StarterPageComponent
  ],
  imports: [
    CommonModule,
    StarterPageRoutingModule
  ]
})
export class StarterPageModule { }
