import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title:string;
  public project:Project;

  constructor(
    private _projectService: ProjectService
  ){
    this.title="Creat proyecto"
    this.project= new Project('','','','',2023,'','');

    /*
     public _id: string,
        public name: string,
        public description: string,
        public categoty: string,
        public year:Number,
        public lang:String,
        public image: String*/ 
    
  }
  ngOnInit(): void {
    
  }
  onSubmit(form:any){
    console.log(this.project)
    this._projectService.saveProject(this.project).subscribe(
        response => {
            console.log(response);
        }, 
        error => {
          console.log(<any>error);
        }
      );
    
      
  }

}
