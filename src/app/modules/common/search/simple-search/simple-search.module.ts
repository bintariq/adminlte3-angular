import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleSearchRoutingModule } from './simple-search-routing.module';
import { SimpleSearchComponent } from './simple-search.component';


@NgModule({
  declarations: [
    SimpleSearchComponent
  ],
  imports: [
    CommonModule,
    SimpleSearchRoutingModule
  ]
})
export class SimpleSearchModule { }
