import { Injectable } from "@angular/core";

import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class HttpService {

    public headers = new Headers({
        "Content-Type": "application/json",
    });

    constructor(private http: Http) { }

    public postJSON(url: string, data: any): any {
        return this.http.post(url, JSON.stringify(data), { headers: this.headers });
    }

}