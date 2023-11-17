import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageV1Component } from './error-page-v1.component';

const routes: Routes = [{ path: '', component: ErrorPageV1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPageV1RoutingModule { }
