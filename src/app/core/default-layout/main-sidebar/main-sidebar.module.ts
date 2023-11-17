import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainSidebarComponent } from './main-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MainSidebarComponent
  ],
  exports: [
    MainSidebarComponent
  ]
})
export class MainSidebarModule {
}
