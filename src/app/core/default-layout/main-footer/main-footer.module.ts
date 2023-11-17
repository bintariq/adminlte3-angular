import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainFooterComponent } from './main-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MainFooterComponent
  ],
  exports: [
    MainFooterComponent
  ]
})
export class MainFooterModule {
}
