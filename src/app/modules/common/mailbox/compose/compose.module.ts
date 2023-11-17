import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposeRoutingModule } from './compose-routing.module';
import { ComposeComponent } from './compose.component';


@NgModule({
  declarations: [
    ComposeComponent
  ],
  imports: [
    CommonModule,
    ComposeRoutingModule
  ]
})
export class ComposeModule { }
