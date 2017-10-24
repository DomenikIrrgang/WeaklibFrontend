import { Injectable } from "@angular/core";
import { User } from "../util/User";
import { USER } from "../mockdata/user";
import { WeaklibService } from "./weaklib.service";
import { HttpService } from "./http.service";

import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class UserService extends WeaklibService {

    constructor(private http: Http, private httpService: HttpService) {
        super();
    }

    getUser(userName: String): Observable<Response> {
        return this.http.get(this.baseURL + this.baseURI + "/user?name" + userName, this.options);
    }

    getAllUser(): Promise<User[]> {
        return this.http.get(this.baseURI + "/api/user")
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    registerUser(user: User): any {
        /*let params = new URLSearchParams();
        for(let key in user){
            params.set(key, user[key]) 
        }
        console.log(params.toString());*/
        let userString: string = JSON.stringify(user);
        let headers = new Headers({
            "Content-Type": "application/json"
        })
        let options: RequestOptionsArgs = {
            withCredentials: true,
            headers: headers,
        }
        return this.http.post(this.baseURL + this.baseURI + "/register", userString, options);
    }

    logout(): Observable<Response> {
        return this.http.post(this.baseURL + this.baseURI + "/logout", "", this.options);
    }

    login(name: string, password: string): Observable<Response> {
        return this.http.post(this.baseURL + this.baseURI + "/login?name=" + name + "&password=" + password, "", this.options);
    }

    getAuthenticatedUser(): Observable<Response> {
        return this.http.get(this.baseURL + this.baseURI + "/isloggedin", this.options);
    }
}

