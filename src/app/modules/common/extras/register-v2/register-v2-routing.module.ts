import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterV2Component } from './register-v2.component';

const routes: Routes = [{ path: '', component: RegisterV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterV2RoutingModule { }
