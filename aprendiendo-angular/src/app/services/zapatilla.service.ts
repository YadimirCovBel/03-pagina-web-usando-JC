import { Injectable } from "@angular/core";
import { zapatilla } from "../models/zapatilla";

@Injectable()

export class ZapatillaService{
    public zapatillas!: Array<zapatilla>;
    constructor(){
    this.zapatillas = [
        new zapatilla('AirMax', 'nike', 'roja', 40, true ),
        new zapatilla('rebook clasic', 'rebook', 'blanco', 80, true ),
        new zapatilla('runner', 'nike', 'negro', 60, true ),
        new zapatilla('jordan', 'nike', 'negro', 200, false ),
        new zapatilla('yizze', 'adidas', 'gris', 180, true )
    ];
}

getTexto(){
    return "hola mundo desde servicio";
}

getZapatillas(): Array<zapatilla>{
    return this.zapatillas;
}
}