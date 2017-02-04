import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
    public user: User;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.user = this.authService.getUser();
    }

}
