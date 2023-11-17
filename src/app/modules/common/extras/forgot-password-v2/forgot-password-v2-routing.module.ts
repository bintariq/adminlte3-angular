import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordV2Component } from './forgot-password-v2.component';

const routes: Routes = [{ path: '', component: ForgotPasswordV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordV2RoutingModule { }
