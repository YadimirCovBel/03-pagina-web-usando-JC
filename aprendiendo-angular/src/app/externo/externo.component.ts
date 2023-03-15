import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.services';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit{

  
  public  user: any;
  public userId: any;
  public fecha: any;

  public new_User: any;
  public usuario_guardado: any; 

  constructor(
    private _peticionesService: PeticionesService
  ){
    this.userId = 1;
    this.new_User = {
            "name": "",
            "job": ""
        };

  }

  ngOnInit(){
    this.fecha = new Date(2022, 5, 20);
    this.cargaUsuario();
  }

  cargaUsuario (){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        console.log(result);
        
      },
      error => {
       console.log(<any>error); 
      }
    );

  };
  onSubmit(form:any){
    this._peticionesService.addUser(this.new_User).subscribe(
      Response => {
        this.usuario_guardado = Response;
      
        form.reset();

      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
