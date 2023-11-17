import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavsTabsComponent } from './navs-tabs.component';

const routes: Routes = [{ path: '', component: NavsTabsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavsTabsRoutingModule { }
