import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageMenuRoutingModule } from './language-menu-routing.module';
import { LanguageMenuComponent } from './language-menu.component';


@NgModule({
  declarations: [
    LanguageMenuComponent
  ],
  imports: [
    CommonModule,
    LanguageMenuRoutingModule
  ]
})
export class LanguageMenuModule { }
