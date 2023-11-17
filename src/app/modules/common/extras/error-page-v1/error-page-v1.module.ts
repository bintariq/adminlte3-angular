import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageV1RoutingModule } from './error-page-v1-routing.module';
import { ErrorPageV1Component } from './error-page-v1.component';


@NgModule({
  declarations: [
    ErrorPageV1Component
  ],
  imports: [
    CommonModule,
    ErrorPageV1RoutingModule
  ]
})
export class ErrorPageV1Module { }
