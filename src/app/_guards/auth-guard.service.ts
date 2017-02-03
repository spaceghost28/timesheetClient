import { Injectable } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
      if (!this.authService.isLoggedIn()) {
          this.router.navigate(['/login']);
          return false;
      }
      return true;
    }

}
