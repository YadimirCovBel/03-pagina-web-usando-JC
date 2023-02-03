import { Component } from '@angular/core';
import { configutacion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Bien Benido a el curso de JS y estamos aprendiendo-angular';
  public descripcion:  string;
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(){
    this.config = configutacion;
    this.title = configutacion.titulo;
    this.descripcion = configutacion.descripcion;
  }

  ocultarVideojuegos(value: boolean){
    this.mostrar_videojuegos = value;
  }
}
