import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  login(email: string, password: string): Promise<any> {
    let body = JSON.stringify({email, password});
    let loginUrl = environment.users_url + '/login';
    return this.http.post(loginUrl, body, { headers: this.headers })
      .toPromise()
      .then(response => {
        localStorage.setItem('AuthToken', response.json().token);
      })
      .catch(error => {
        console.log('error: ', error.text());
      });
  }
}
