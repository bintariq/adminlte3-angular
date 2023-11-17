import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './main-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MainHeaderComponent
  ],
  exports: [
    MainHeaderComponent
  ]
})
export class MainHeaderModule {
}
