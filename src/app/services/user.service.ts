import { Injectable } from "@angular/core";
import { User } from "../util/User";
import { WeaklibService } from "./weaklib.service";

import { Http, Headers, Response, RequestOptionsArgs } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class UserService extends WeaklibService {

    constructor(private http: Http ) {
        super();
    }

    public getUser(userName: string): Observable<Response> {
        return this.http.get(this.baseURL + this.baseURI + "/user?name" + userName, this.options);
    }

    public getAllUser(): Promise<User[]> {
        return this.http.get(this.baseURI + "/api/user")
            .toPromise()
            .then((response) => {
                return response.json();
            })
            .catch((err) => err);
    }

    public registerUser(user: User): any {
        /*let params = new URLSearchParams();
        for(let key in user){
            params.set(key, user[key])
        }
        console.log(params.toString());*/
        let userString: string = JSON.stringify(user);
        let optionHeaders = new Headers({
            "Content-Type": "application/json",
        });
        let options: RequestOptionsArgs = {
            withCredentials: true,
            headers: optionHeaders,
        };
        return this.http.post(this.baseURL + this.baseURI + "/register", userString, options);
    }

    public logout(): Observable<Response> {
        return this.http.post(this.baseURL + this.baseURI + "/logout", "", this.options);
    }

    public login(name: string, password: string): Observable<Response> {
        return this.http.post(this.baseURL + this.baseURI + "/login?name=" + name + "&password=" + password, "", this.options);
    }

    public getAuthenticatedUser(): Observable<Response> {
        return this.http.get(this.baseURL + this.baseURI + "/isloggedin", this.options);
    }
}

