import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.services';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit{

  public userId: any;
  public  : any;

  constructor(
    private _peticionesService: PeticionesService
  ){
    this.userId = 1;
  }

  ngOnInit(){
    this.cargaUsuario();
  }

  cargaUsuario (){
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.userId = result.data;
        console.log(result);
        
      },
      error => {
       console.log(<any>error); 
      }
    );

  };

}
