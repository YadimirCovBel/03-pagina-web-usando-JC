import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
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
    saveProject(project:Project):Observable<any>{
            let params = JSON.stringify(project);
            let heders = new HttpHeaders().set('content-type','application/json')

            return this._http.post(this.url+'/save-project',params, {headers:heders});
    }
    /*retomamos de la clase 194 la estructura usuada en petitiones.services.ts dentro 
    del folder aprendiendo agular peticiones.services.ts 
    ya que en le curso nos dieron mal el content-type, headers*/
}