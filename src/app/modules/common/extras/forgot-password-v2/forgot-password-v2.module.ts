import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordV2RoutingModule } from './forgot-password-v2-routing.module';
import { ForgotPasswordV2Component } from './forgot-password-v2.component';


@NgModule({
  declarations: [
    ForgotPasswordV2Component
  ],
  imports: [
    CommonModule,
    ForgotPasswordV2RoutingModule
  ]
})
export class ForgotPasswordV2Module { }
