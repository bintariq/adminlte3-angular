import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsAddRoutingModule } from './projects-add-routing.module';
import { ProjectsAddComponent } from './projects-add.component';


@NgModule({
  declarations: [
    ProjectsAddComponent
  ],
  imports: [
    CommonModule,
    ProjectsAddRoutingModule
  ]
})
export class ProjectsAddModule { }
