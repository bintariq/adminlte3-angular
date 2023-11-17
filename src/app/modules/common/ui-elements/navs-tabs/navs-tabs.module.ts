import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavsTabsRoutingModule } from './navs-tabs-routing.module';
import { NavsTabsComponent } from './navs-tabs.component';


@NgModule({
  declarations: [
    NavsTabsComponent
  ],
  imports: [
    CommonModule,
    NavsTabsRoutingModule
  ]
})
export class NavsTabsModule { }
