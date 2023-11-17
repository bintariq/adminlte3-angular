import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverPasswordV2RoutingModule } from './recover-password-v2-routing.module';
import { RecoverPasswordV2Component } from './recover-password-v2.component';


@NgModule({
  declarations: [
    RecoverPasswordV2Component
  ],
  imports: [
    CommonModule,
    RecoverPasswordV2RoutingModule
  ]
})
export class RecoverPasswordV2Module { }
