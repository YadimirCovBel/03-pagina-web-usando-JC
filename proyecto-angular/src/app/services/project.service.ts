import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of, from } from 'rxjs';
//se realizo una mudificasion en la importacion de observable
// viejo codigo  import {Observable} from 'rxjs/Observable;
import { Project } from "../models/project";
import { Global } from "./global";

@Injectable()
export class ProjectService{
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'probando el servicio de Angular'
    }
}