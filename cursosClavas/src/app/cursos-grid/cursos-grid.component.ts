import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/primeng';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Curso } from './../curso';

@Component({
  selector: 'app-cursos-grid',
  templateUrl: './cursos-grid.component.html',
  styleUrls: ['./cursos-grid.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ConfirmationService]
})
export class CursosGridComponent implements OnInit {
  hourTimeout: any;
  hourFilter: number;
  formCursos: FormGroup;
  msgs: Message[] = [];
  curso: Curso = new PrimeCurso();
  cursoSelected: Curso;
  displayDialog: boolean;
  newCurso: boolean;
  @Input('listaDeCursos') listaDeCursos: any = {};

constructor(private http: HttpClient,
  private vl: FormBuilder,
  private crudService: ConfirmationService) { }

ngOnInit() {
  this.formCursos = this.vl.group({
    'id': new FormControl('', Validators.required),
    'nome': new FormControl('', Validators.required),
    'duracao': new FormControl('', Validators.required)
  });
}

onRowSelect(evento) {
  this.curso = this.cloneCurso(evento.data);
  this.displayDialog = true;
}

cloneCurso(c: Curso): Curso {
  const curso = new PrimeCurso();
  for (const prop in c) {
    curso[prop] = c[prop];
  }
  return curso;
}

 excluirCurso(id) {
    this.http.delete('http://localhost:8080/' + id).subscribe( data => {
      this.listaDeCursos = data;
  });
  this.displayDialog = false;
  }

  modificarCurso() {
    this.http.put('http://localhost:8080/', this.formCursos.value)
    .subscribe(
        data => {
          this.listaDeCursos = data;
        });
        this.displayDialog = false;
  }

}
class PrimeCurso implements Curso {
  id: any;
  nome: any;
  duracao: any;
}
