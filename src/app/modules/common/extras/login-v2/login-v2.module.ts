import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginV2RoutingModule } from './login-v2-routing.module';
import { LoginV2Component } from './login-v2.component';


@NgModule({
  declarations: [
    LoginV2Component
  ],
  imports: [
    CommonModule,
    LoginV2RoutingModule
  ]
})
export class LoginV2Module { }
