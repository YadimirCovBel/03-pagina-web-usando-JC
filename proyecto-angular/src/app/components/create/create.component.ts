import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//agregando ngform a ver si funciona si no borramos
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string|undefined;

   constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
    ){
    this.title="Crear proyecto"
    this.project= new Project('','','','',2023,'','');
    this.status= "";
    /*
      public _id: string,
      public name: string,
      public description: string,
      public categoty: string,
      public year:Number,
      public lang:String,
      public image: String*/ 
    
  }
  ngOnInit(): void {}
  onSubmit(form:NgForm){
    // probaremos con otra opcion si no lo volvemos a poner onSubmit(form:any){
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
console.log(this.project);    
this._projectService.saveProject(this.project).subscribe({
         next:(response: any) => {
          console.log(response);          
            this.status = 'success';
            form.reset();
    
      },
      error:(error: any) => {
        console.log(<any>error);
        console.error(error);
      },
      complete() {
        console.info('complete')
        
      },
    });

      /* 
      el codigo no funciona no muestra en la consola los datos suscritos en el mongo
       this._projectService.saveProject(this.project).subscribe({
         next:(response: any) => {
        this.status = 'success';
         console.log(response.project)
         console.log(this.project)
      },
      error:(error: any) => {
        console.error(error);
      }
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////

      probaremos otro codigo por que con este no esta arrojando la informacion requerida
      {next:(response) => {
            if(response.project){
              this.status = "success";
            }else{
              this.status= "failed";
            }
            console.log(this.status);
            console.log(response.project._id);
        },
        error:(error) => {
          console.log(<any>error);
        }
        
    }
    */
 
    
  }
  fileChangeEvent(fileInput:any){
    console.log(fileInput)
  }

}
