import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageMenuComponent } from './language-menu.component';

const routes: Routes = [{ path: '', component: LanguageMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageMenuRoutingModule { }
