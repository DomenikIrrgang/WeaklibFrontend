import { Injectable } from "@angular/core";
import { Category } from "../util/category";
import { WeaklibService } from "./weaklib.service";
import { HttpService } from "./http.service";

import { Http, Headers, Response, RequestOptions } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class CategoryService extends WeaklibService {

    constructor(private http: Http, private httpService: HttpService) {
        super();
    }

    public getCategories(): Observable<Response> {
        return this.http.get(this.baseURL + this.baseURI + "/categories", this.options);
    }
}