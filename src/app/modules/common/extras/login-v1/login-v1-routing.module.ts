import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginV1Component } from './login-v1.component';

const routes: Routes = [{ path: '', component: LoginV1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginV1RoutingModule { }
