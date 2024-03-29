import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent {
  public projects: Project[];
  public url:string;
  
  constructor(
      private _projectService: ProjectService
  ){
    this.projects = [];
    this.url = Global.url;
    //se agrego esto para que funcionara definir projects
  }
    ngOnInit(){
      this.getProjects();

      
    }
    getProjects(){
      this._projectService.getProjects().subscribe(
        response =>{
          if(response.projects){
            this.projects=response.projects;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
}
