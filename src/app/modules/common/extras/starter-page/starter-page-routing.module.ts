import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterPageComponent } from './starter-page.component';

const routes: Routes = [{ path: '', component: StarterPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterPageRoutingModule { }
