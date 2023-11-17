import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalsAlertsRoutingModule } from './modals-alerts-routing.module';
import { ModalsAlertsComponent } from './modals-alerts.component';


@NgModule({
  declarations: [
    ModalsAlertsComponent
  ],
  imports: [
    CommonModule,
    ModalsAlertsRoutingModule
  ]
})
export class ModalsAlertsModule { }
