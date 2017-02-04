import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public newUser = new User("");
    public passwordVerification: string;

    constructor(private authService: AuthService,
      private router: Router) { }

    ngOnInit() {
    }

    register() {
        this.authService.register(this.newUser)
            .then(() => {
                this.router.navigate(['']);
            })
            .catch(() => {
                console.log('something bad happened in the register component');
            });
    }

}
