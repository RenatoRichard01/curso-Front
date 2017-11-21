import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  @Output() clavasEvent = new EventEmitter();
  nomeCurso: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

buscarCurso() {
if (this.nomeCurso !== '') {
 this.http.get('http://localhost:8080/' + this.nomeCurso).subscribe(
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
}
