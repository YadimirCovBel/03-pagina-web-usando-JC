import { Component } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  public titulo: string;
  public listado: string; 

  constructor(){
    this.titulo = "componente de cursos";
    this.listado = "listado de los cursos mas populares";
  }
}
