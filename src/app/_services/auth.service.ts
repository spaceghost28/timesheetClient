import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private loggedIn = false;
    private loggedInUser: User;

    constructor(private http: Http) { }

    login(email: string, password: string): Promise<any> {
        let body = JSON.stringify({ email, password });
        let loginUrl = environment.users_url + '/login';
        return this.http.post(loginUrl, body, { headers: this.headers })
            .toPromise()
            .then(response => {
                localStorage.setItem('AuthToken', response.json().token);
                this.loggedIn = true;
                this.loggedInUser = { email: response.json().email };
            })
            .catch(error => {
                console.log('error: ', error.text());
            });
    }

    logout() {
        localStorage.removeItem('AuthToken');
        this.loggedIn = false;
        this.loggedInUser = null;
    }

    getUser() {
      return this.loggedInUser;
    }

    public isLoggedIn(): boolean {
        return this.loggedIn;
    }
}
