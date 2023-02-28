import { Component, OnInit } from "@angular/core";
import { zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]

})

export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de zapatillas";
    public zapatillas!: Array<zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ){

        this.color = 'blue';
        this.marcas = new Array();
        this.titulo = "componente de zapatillas";
        //  al tener definido el molde zapatilla  y agregarlo 
        //como array  tenemos que ingresar lo en el constructor 
        
        this.mi_marca = "fila";


        console.log("se ha cargado el compoente : zapatillas.component.ts");
    }

    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas();
        alert(this._zapatillaService.getTexto());
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

      onBlur(){
        console.log("ha salido del input")
      }
      mostrarPalabra(){
        alert(this.mi_marca);
      }
}
