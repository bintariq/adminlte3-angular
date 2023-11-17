import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadRoutingModule } from './read-routing.module';
import { ReadComponent } from './read.component';


@NgModule({
  declarations: [
    ReadComponent
  ],
  imports: [
    CommonModule,
    ReadRoutingModule
  ]
})
export class ReadModule { }
