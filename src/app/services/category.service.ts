import { Injectable } from "@angular/core";
import { WeaklibService } from "./weaklib.service";

import { Http, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class CategoryService extends WeaklibService {

    constructor(private http: Http) {
        super();
    }

    public getCategories(): Observable<Response> {
        return this.http.get(this.baseURL + this.baseURI + "/categories", this.options);
    }
}