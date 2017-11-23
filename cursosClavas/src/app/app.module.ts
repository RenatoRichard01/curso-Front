import { CursosGridModule } from './cursos-grid/cursos-grid.module';
import { PesquisaModule } from './pesquisa/pesquisa.module';
import { FormCursoModule } from './form-curso/form-curso.module';
import { CursosGridComponent } from './cursos-grid/cursos-grid.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormCursoModule,
    PesquisaModule,
    BrowserAnimationsModule,
    DialogModule,
    CursosGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
