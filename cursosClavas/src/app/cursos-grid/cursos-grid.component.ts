import { Message } from 'primeng/components/common/api';
import {LazyLoadEvent} from 'primeng/primeng';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cursos-grid',
  templateUrl: './cursos-grid.component.html',
  styleUrls: ['./cursos-grid.component.css']
})
export class CursosGridComponent implements OnInit {
  msgs: Message[] = [];


 @Input('listaDeCursos') listaDeCursos: any = {};

constructor(private http: HttpClient) { }
ngOnInit() {
}

 excluirCurso(id) {
    this.http.delete('http://localhost:8080/' + id).subscribe( data => {
      this.listaDeCursos = data;
  });
  }

  modificarCursos(id, nomeInput, duracaoInput) {
    if ((id !== undefined) && (nomeInput !== '') && (duracaoInput !== '')) {
      const curso = {
        id: id,
        nome: nomeInput,
        duracao: duracaoInput
      };
      this.http.put('http://localhost:8080/alteraCurso', curso)
      .subscribe(
          data => {
            this.listaDeCursos = data;
          }
        );
        alert('id: ' +  id + 'alterado com sucesso');
    } else {
      this.http.get('http://localhost:8080/cursoLista').subscribe
      (data => {
        this.listaDeCursos = data;
      });
      alert(' ERRO ao alterar campos, verifique se não estão vazios');
    }
  }
  listaAtualizada(clavasEvent) {
    this.listaDeCursos = clavasEvent;
  }

}
