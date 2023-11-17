import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnhancedSearchRoutingModule } from './enhanced-search-routing.module';
import { EnhancedSearchComponent } from './enhanced-search.component';


@NgModule({
  declarations: [
    EnhancedSearchComponent
  ],
  imports: [
    CommonModule,
    EnhancedSearchRoutingModule
  ]
})
export class EnhancedSearchModule { }
