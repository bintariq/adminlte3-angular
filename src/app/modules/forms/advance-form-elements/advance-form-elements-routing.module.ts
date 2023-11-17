import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceFormElementsComponent } from './advance-form-elements.component';

const routes: Routes = [{ path: '', component: AdvanceFormElementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceFormElementsRoutingModule { }
