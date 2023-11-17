import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaceComponent } from './pace.component';

const routes: Routes = [{ path: '', component: PaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaceRoutingModule { }
