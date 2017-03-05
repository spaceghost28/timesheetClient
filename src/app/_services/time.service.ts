import { TimeEntry } from "../_models/timeEntry";
import { Response } from "@angular/http/src/static_response";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";
import { Http, Headers } from "@angular/http/";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TimeService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    submitTime(time: TimeEntry): Observable<any> {
        let postTimeUrl = environment.time_url + '/time';
        return this.http.post(postTimeUrl, time ,{ headers: this.headers });
    }

}
