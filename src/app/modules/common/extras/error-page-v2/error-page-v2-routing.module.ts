import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageV2Component } from './error-page-v2.component';

const routes: Routes = [{ path: '', component: ErrorPageV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPageV2RoutingModule { }
