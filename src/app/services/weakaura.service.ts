import { Injectable } from "@angular/core";
import { Weakaura } from "../util/weakaura";
import { WEAKAURAS } from "../mockdata/weakauras";
import { List } from "../util/list";
import { WeaklibService } from "./weaklib.service";
import { HttpService } from "./http.service";
import { User } from "../util/user";

import { Http, Headers, Response, RequestOptions } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class WeakauraService extends WeaklibService {

    constructor(private http: Http, private httpService: HttpService) {
        super();
    }

    public getWeakauras(): Observable<Response> {
        return this.http.get(this.baseURL + this.baseURI + "/weakaura", this.options);
    }

    public  getWeakauraWithHash(hash: string): Observable<Response> {
        return this.http.get(this.baseURL + this.baseURI + "/weakaura?hash=" + hash);
    }

    public getWeakaurasFromUser(username: string): Observable<Response> {
        return this.http.get(this.baseURL + this.baseURI + "/weakaura?user=" + username);
    }

    public getComments(hash: string) {
        return this.http.get(this.baseURL + this.baseURI + "/weakauracomment?hash=" + hash);
    }

    public postComment(hash: string, id: string, comment: string): Observable<Response>  {
        let url: string = "/weakauracomment?";
        console.log(hash, id, comment);
        if (hash.length > 0) {
            url += "root=" + hash + "&";
        }
        if (id.length > 0) {
            url += "id=" + id + "&";
        }
        if (comment.length > 0) {
            url += "comment=" + comment + "&";
        }
        return this.http.post(this.baseURL + this.baseURI + url, "", this.options);
    }

    public searchWeakaura(name: string, user: string, categories: string[]): Observable<Response> {
        let url: string = "/weakaura?";
        if (name.length > 0) {
            url += "name=" + name + "&";
        }
        if (user.length > 0) {
            url += "user=" + user + "&";
        }
        if (categories.length > 0) {
            url += "categories=";
            for (let category of categories) {
                url += category + ",";
            }
            url = url.substring(0, url.length - 1);
            url += "&";
        }
        return this.http.get(this.baseURL + this.baseURI + url, this.options);
    }

    public uploadWeakaura(weakaura: Weakaura) {
        let bodyString = JSON.stringify(weakaura);
        let optionHeaders = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: optionHeaders });
        return this.http.post(this.baseURL + this.baseURI + "api/weakaura", bodyString, options);
    }
}