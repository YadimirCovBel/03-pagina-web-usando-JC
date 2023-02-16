import { Component, OnInit } from "@angular/core";
import { zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'

})

export class ZapatillasComponent implements OnInit {
    public titulo: string;
    public zapatillas: Array<zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(){

        this.color = 'blue';
        this.marcas = new Array();
        this.titulo = "componente de zapatillas";
        //  al tener definido el molde zapatilla  y agregarlo 
        //como array  tenemos que ingresar lo en el constructor 
        this.zapatillas = [
            new zapatilla('AirMax', 'nike', 'roja', 40, true ),
            new zapatilla('rebook clasic', 'rebook', 'blanco', 80, true ),
            new zapatilla('runner', 'nike', 'negro', 60, true ),
            new zapatilla('jordan', 'nike', 'negro', 200, false ),
            new zapatilla('yizze', 'adidas', 'gris', 180, true )
        ];
        this.mi_marca = "fila";


        console.log("se ha cargado el compoente : zapatillas.component.ts");
    }

    ngOnInit() {
        console.log(this.zapatillas);
        this.getMarcas();
    }
    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            console.log(index);
            }
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMArca(){
         //coloca el trim para quitar los espacios
         let limpio = this.mi_marca.trim();
         //verifica si el valor esta repetido
         if(this.marcas.indexOf(limpio)< 0){
             this.marcas.push(limpio)
         }else{
             alert('valor Existente')
         }
    }

    borrarMarca(indice:number){
        this.marcas.splice(indice, 1);
      } 


}
