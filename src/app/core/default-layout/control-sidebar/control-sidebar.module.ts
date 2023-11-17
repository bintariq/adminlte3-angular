import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlSidebarComponent } from './control-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ControlSidebarComponent
  ],
  exports: [
    ControlSidebarComponent
  ]
})
export class ControlSidebarModule {
}
