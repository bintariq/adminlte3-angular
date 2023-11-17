import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterV2RoutingModule } from './register-v2-routing.module';
import { RegisterV2Component } from './register-v2.component';


@NgModule({
  declarations: [
    RegisterV2Component
  ],
  imports: [
    CommonModule,
    RegisterV2RoutingModule
  ]
})
export class RegisterV2Module { }
