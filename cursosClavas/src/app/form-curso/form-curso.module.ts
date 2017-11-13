import { FormControlName } from '@angular/forms/src/directives';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { PanelModule, GrowlModule, ButtonModule, InputTextModule, CodeHighlighterModule } from 'primeng/primeng';
import { FormCursoComponent } from './form-curso.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    PanelModule,
    HttpClientModule,
    GrowlModule,
    CodeHighlighterModule,
    TooltipModule
  ],
  declarations: [
    FormCursoComponent
  ],
  exports: [
   FormCursoComponent
  ]
})
export class FormCursoModule { }
