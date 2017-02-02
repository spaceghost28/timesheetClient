import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(event, username, password) {
    event.preventDefault();
    this.authService.login(username, password)
    .then(() => {
      console.log('we get to the component resolve part');
      this.router.navigate(['/home']);
    })
    .catch(() => {
      console.log('error in login component');
    });
  }

}