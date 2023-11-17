import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { MainHeaderModule } from 'src/app/core/default-layout/main-header/main-header.module';
import { MainSidebarModule } from 'src/app/core/default-layout/main-sidebar/main-sidebar.module';
import { MainFooterModule } from 'src/app/core/default-layout/main-footer/main-footer.module';
import { ControlSidebarModule } from 'src/app/core/default-layout/control-sidebar/control-sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MainHeaderModule,
    MainSidebarModule,
    ControlSidebarModule,
    MainFooterModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
