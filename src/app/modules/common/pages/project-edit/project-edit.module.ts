import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectEditRoutingModule } from './project-edit-routing.module';
import { ProjectEditComponent } from './project-edit.component';


@NgModule({
  declarations: [
    ProjectEditComponent
  ],
  imports: [
    CommonModule,
    ProjectEditRoutingModule
  ]
})
export class ProjectEditModule { }
