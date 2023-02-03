import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string; 
    
    
    constructor(){
        this.titulo = "componente de videojuegos";
        this.listado = "listado de los juegos mas populares";
        //console.log("se ha cargado el compoente : videojuego.component.ts");
    }

    ngOnInit(): void {
        //console.log("OnInit Ejecutado");
        //OnInit lo que hace es que se ejecute primero el metodo en el cual se agrego
    }

    ngDoCheck(): void {
        //console.log("DoCheck ejecutado");
        //cada que se hagan cambios en el codigo DoCheck se ejecuta
    }
    ngOnDestroy(): void {
        //console.log("OnDestroy ejecutado");
        //solo se ejecuta cuando un elemento es destruido o eliminado
    }

    cambiarTitulo(){
        this.titulo = "Nuevo Titulo del componente";

        //agregamos un boton para hacer un cambio y se vea el uso de DoCheck
    }
}