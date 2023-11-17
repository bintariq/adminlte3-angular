import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalsAlertsComponent } from './modals-alerts.component';

const routes: Routes = [{ path: '', component: ModalsAlertsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalsAlertsRoutingModule { }
