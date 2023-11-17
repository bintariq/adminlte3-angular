import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralFormElementsComponent } from './general-form-elements.component';

const routes: Routes = [{ path: '', component: GeneralFormElementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralFormElementsRoutingModule { }
