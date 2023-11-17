import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegacyUserMenuRoutingModule } from './legacy-user-menu-routing.module';
import { LegacyUserMenuComponent } from './legacy-user-menu.component';


@NgModule({
  declarations: [
    LegacyUserMenuComponent
  ],
  imports: [
    CommonModule,
    LegacyUserMenuRoutingModule
  ]
})
export class LegacyUserMenuModule { }
