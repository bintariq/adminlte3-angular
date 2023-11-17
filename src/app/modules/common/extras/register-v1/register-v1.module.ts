import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterV1RoutingModule } from './register-v1-routing.module';
import { RegisterV1Component } from './register-v1.component';


@NgModule({
  declarations: [
    RegisterV1Component
  ],
  imports: [
    CommonModule,
    RegisterV1RoutingModule
  ]
})
export class RegisterV1Module { }
