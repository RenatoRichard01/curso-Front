import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {
  msgs: Message[] = [];
  formCursos: FormGroup;
  @Output() evento = new EventEmitter();
  nome: string;
  duracao: string;


  constructor(private http: HttpClient,
  private vl: FormBuilder) { }

  ngOnInit() {
    this.formCursos = this.vl.group({
      'nome': new FormControl('', Validators.required),
      'duracao': new FormControl('', Validators.required)
    });
  }

  resetaForm() {
    this.formCursos.reset();
  }

  adicionaCurso(): void {
    if ((this.nome !== '') && (this.duracao !== '')) {
      this.http.post('http://localhost:8080/', this.formCursos.value).subscribe(
       data => {
        this.evento.emit(data);
        this.adicionado();
       }
      );
      this.resetaForm();
    } else {
      this.erroAdiciona();
    }
  }

  adicionado(): void {
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success', detail: 'Curso ' + this.nome + ' adicionado'});
}
  erroAdiciona(): void {
    this.msgs = [];
    this.msgs.push({severity: 'error', detail: 'Curso não foi adicionado.' +
     'Possivel problema no servidor ou campo(os) vazio(os)'});
  }

}
