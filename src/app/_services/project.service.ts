import { Response } from "@angular/http/src/static_response";
import { Observable } from "rxjs/Observable";
import { Project } from "../_models/project";
import { environment } from "../../environments/environment";
import { Http, Headers } from "@angular/http/";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private allProjects: Project[];

    constructor(private http: Http) { }

    getAllProjects(): Observable<Project[]> {
        let getAllProjectsUrl = environment.time_url + '/project';
        return this.http.get(getAllProjectsUrl, { headers: this.headers })
            .map((response) => {
                var body = response.json();
                this.allProjects = new Array<Project>();
                for (var i = 0 ; i < body.length ; i++) {
                    this.allProjects.push(new Project(body[i].projectName));
                }
                return this.allProjects;
            });
    }

}
