import { Observable } from "rxjs/Observable";
import { ProjectService } from "../_services/project.service";
import { Project } from "../_models/project";
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';

@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

    public user: User;
    public projects: Project[];

    constructor(
        private authService: AuthService,
        private router: Router,
        private projectService: ProjectService
    ) { }

    ngOnInit() {
        this.user = this.authService.getUser();
        this.projectService.getAllProjects().subscribe(
            projects => {
                this.projects = projects;
            },
            err => console.log(err),
        );
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

}
