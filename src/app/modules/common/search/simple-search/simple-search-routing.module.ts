import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleSearchComponent } from './simple-search.component';

const routes: Routes = [{ path: '', component: SimpleSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleSearchRoutingModule { }
