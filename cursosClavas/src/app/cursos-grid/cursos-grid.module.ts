import { ButtonModule } from 'primeng/components/button/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosGridComponent } from './cursos-grid.component';
import {ConfirmDialogModule, DataTableModule,  SharedModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    FieldsetModule,
    ConfirmDialogModule
  ],
  declarations: [
    CursosGridComponent
  ],
  exports: [
    CursosGridComponent
  ]

})
export class CursosGridModule { }
