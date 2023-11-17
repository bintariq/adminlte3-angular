import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegacyUserMenuComponent } from './legacy-user-menu.component';

const routes: Routes = [{ path: '', component: LegacyUserMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegacyUserMenuRoutingModule { }
