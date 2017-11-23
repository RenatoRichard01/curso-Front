import { ButtonModule } from 'primeng/components/button/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosGridComponent } from './cursos-grid.component';
import { ConfirmDialogModule, DataTableModule, SharedModule, GrowlModule,
          DialogModule, CodeHighlighterModule, SliderModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    CodeHighlighterModule,
    GrowlModule,
    SliderModule,
    FormsModule
  ],
  declarations: [
    CursosGridComponent
  ],
  exports: [
    CursosGridComponent
  ]

})
export class CursosGridModule { }
