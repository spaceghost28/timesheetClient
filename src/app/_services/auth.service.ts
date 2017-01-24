import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  login(username: string, password: string) {
    let body = JSON.stringify({username, password});
    this.http.post('url/login', body, {headers: this.headers}).toPromise()
      .then(response => {
        console.log('received response of some sort');
        localStorage.setItem('id_token', response.json().id_token)
        return response.json().user;
      })
      .catch(error => {
        console.log(error.text());
        return Promise.reject(error.message());
      });
  }


}
