import { Component, OnInit } from "@angular/core";
import { zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'

})

export class ZapatillasComponent implements OnInit {
    public titulo: string;
    public zapatillas: Array<zapatilla>;

    constructor(){
        this.titulo = "componente de zapatillas";
        //  al tener definido el molde zapatilla  y agregarlo 
        //como array  tenemos que ingresar lo en el constructor 
        this.zapatillas = [
            new zapatilla('AirMax', 'nike', 'roja', 190, true ),
            new zapatilla('rebook clasic', 'rebook', 'blanco', 80, true ),
            new zapatilla('runner', 'nike', 'negro', 60, true ),
            new zapatilla('yizze', 'adidas', 'gris', 180, true )
        ];



        console.log("se ha cargado el compoente : zapatillas.component.ts");
    }

    ngOnInit() {
        console.log(this.zapatillas);
    }
}
