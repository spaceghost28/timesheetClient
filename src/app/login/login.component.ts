import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public showErrorMessage = false;

    constructor(private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
    }

    login(event, username, password) {
        event.preventDefault();
        this.authService.login(username, password)
            .then(() => {
                this.router.navigate(['']);
            })
            .catch((err) => {;
                this.showErrorMessage = true;
            });
    }

}
