import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleTableRoutingModule } from './simple-table-routing.module';
import { SimpleTableComponent } from './simple-table.component';


@NgModule({
  declarations: [
    SimpleTableComponent
  ],
  imports: [
    CommonModule,
    SimpleTableRoutingModule
  ],
  exports: [
    CommonModule,
    SimpleTableRoutingModule
  ]
})
export class DataTableModule { }
