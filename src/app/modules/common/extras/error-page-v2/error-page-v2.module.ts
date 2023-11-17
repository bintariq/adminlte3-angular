import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageV2RoutingModule } from './error-page-v2-routing.module';
import { ErrorPageV2Component } from './error-page-v2.component';


@NgModule({
  declarations: [
    ErrorPageV2Component
  ],
  imports: [
    CommonModule,
    ErrorPageV2RoutingModule
  ]
})
export class ErrorPageV2Module { }
