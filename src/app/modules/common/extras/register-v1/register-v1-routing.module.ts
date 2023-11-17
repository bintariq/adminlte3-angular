import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterV1Component } from './register-v1.component';

const routes: Routes = [{ path: '', component: RegisterV1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterV1RoutingModule { }
