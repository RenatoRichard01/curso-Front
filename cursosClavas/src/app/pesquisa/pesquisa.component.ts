import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  formCursos: FormGroup;

  @Output() clavasEvent = new EventEmitter();
  nomeCurso: string;

  constructor(private http: HttpClient,
    private vl: FormBuilder
  ) { }

  ngOnInit() {
    this.formCursos = this.vl.group({
      'nome': new FormControl('', Validators.required),
    });

  }

buscarCurso() {
if (this.formCursos.value.nome !== null) {
 this.http.get('http://localhost:8080/?nome=' + this.formCursos.value.nome).subscribe(
    data => {
         this.clavasEvent.emit(data);
     }
  );
 } else {
   this.http.get ('http://localhost:8080/')
   .subscribe(
    data => {
      this.clavasEvent.emit(data);
    }
  );
  alert('curso não encontrado');
}

}

listarTodos() {
  this.http.get ('http://localhost:8080/')
  .subscribe(
   data => {
     this.clavasEvent.emit(data);
   }
 );
}


}
