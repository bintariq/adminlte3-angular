import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PermissionModule } from '../permission/permission.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from './alert.service';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonComponent } from './components/country-company-branch/common.component';
import { DataTablesModule } from "angular-datatables";
import { NgSelectModule } from '@ng-select/ng-select';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const modules = [
  PermissionModule,
  ReactiveFormsModule,
  FormsModule,
  DataTablesModule,
  NgSelectModule,
  SweetAlert2Module
];


@NgModule({
  declarations: [
    ConfirmationComponent,
    LoaderComponent,
    CommonComponent
  ],
  imports: [
    CommonModule,
    ...modules
  ],
  providers: [AlertService],
  exports: [...modules,ConfirmationComponent,LoaderComponent,CommonComponent]
})
export class SharedAppModule { }
