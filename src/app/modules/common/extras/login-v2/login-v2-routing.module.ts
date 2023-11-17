import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginV2Component } from './login-v2.component';

const routes: Routes = [{ path: '', component: LoginV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginV2RoutingModule { }
