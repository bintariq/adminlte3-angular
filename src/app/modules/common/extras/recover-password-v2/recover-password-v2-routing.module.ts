import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordV2Component } from './recover-password-v2.component';

const routes: Routes = [{ path: '', component: RecoverPasswordV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoverPasswordV2RoutingModule { }
