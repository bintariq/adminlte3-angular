import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { KanbanBoardComponent } from './kanban-board.component';


@NgModule({
  declarations: [
    KanbanBoardComponent
  ],
  imports: [
    CommonModule,
    KanbanBoardRoutingModule
  ]
})
export class KanbanBoardModule { }
