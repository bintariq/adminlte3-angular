import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginV1RoutingModule } from './login-v1-routing.module';
import { LoginV1Component } from './login-v1.component';


@NgModule({
  declarations: [
    LoginV1Component
  ],
  imports: [
    CommonModule,
    LoginV1RoutingModule
  ]
})
export class LoginV1Module { }
