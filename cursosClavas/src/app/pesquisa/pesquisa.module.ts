import { PesquisaComponent } from './pesquisa.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule, ButtonModule} from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CalendarModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    PesquisaComponent
  ],
  exports: [
    PesquisaComponent
  ]
})
export class PesquisaModule { }
