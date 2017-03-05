import { TimeService } from "../_services/time.service";
import { TimeEntry } from "../_models/timeEntry";
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
    public selectedProject: Project;
    public cardNumber: string;
    public startHour: number = 1;
    public startMinute: number = 0;
    public endHour: number = 1;
    public endMinute: number = 0;

    constructor(
        private authService: AuthService,
        private router: Router,
        private projectService: ProjectService,
        private timeService: TimeService
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

    submitTime() {
        let startDate = new Date();
        startDate.setHours(this.startHour);
        startDate.setMinutes(this.startMinute);
        let endDate = new Date();
        endDate.setHours(this.endHour);
        endDate.setMinutes(this.endMinute);
        let timeEntry = new TimeEntry("123456789012345678901234",
            this.selectedProject.name,
            this.cardNumber,
            startDate,
            endDate);
        this.timeService.submitTime(timeEntry).subscribe(
            result => console.log('we did it, I think'),
            error => console.log(error)
        );
    }

}
