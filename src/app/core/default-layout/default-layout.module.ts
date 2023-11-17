import { NgModule } from '@angular/core';
import { DefaultLayoutComponent } from './default-layout.component';
import { CommonModule } from '@angular/common';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
// import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { RouterModule } from '@angular/router';
import { MainHeaderModule } from './main-header/main-header.module';
import { MainSidebarModule } from './main-sidebar/main-sidebar.module';
import { MainFooterModule } from './main-footer/main-footer.module';
import { ControlSidebarModule } from './control-sidebar/control-sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainHeaderModule,
    MainSidebarModule,
    ControlSidebarModule,
    MainFooterModule
  ],
  declarations: [
    DefaultLayoutComponent
  ],
  exports: [
    DefaultLayoutComponent
  ]
})
export class DefaultLayoutModule {
}
