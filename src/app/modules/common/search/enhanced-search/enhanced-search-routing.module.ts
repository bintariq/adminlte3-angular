import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnhancedSearchComponent } from './enhanced-search.component';

const routes: Routes = [{ path: '', component: EnhancedSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnhancedSearchRoutingModule { }
