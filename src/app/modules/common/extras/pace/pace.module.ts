import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaceRoutingModule } from './pace-routing.module';
import { PaceComponent } from './pace.component';


@NgModule({
  declarations: [
    PaceComponent
  ],
  imports: [
    CommonModule,
    PaceRoutingModule
  ]
})
export class PaceModule { }
