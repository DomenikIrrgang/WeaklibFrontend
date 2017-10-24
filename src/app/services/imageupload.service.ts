import { Injectable } from "@angular/core";
import { WeaklibService } from "./weaklib.service";
import { HttpService } from "./http.service";

import { Http, Headers, Response, RequestOptions } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ImageUploadService extends WeaklibService {

    constructor(private http: Http, private httpService: HttpService) {
        super();
    }

    public uploadImages(files: File[]): any {
        let formData: FormData = new FormData();
        for (let file of files) {
            formData.append("file[]", file, file.name);
        }
        let optionHeaders = new Headers();
        optionHeaders.append("enctype", "multipart/form-data");
        optionHeaders.append("Accept", "application/json");
        let options = new RequestOptions({ headers: optionHeaders });
        return this.http.post(this.baseURL + this.baseURI + `api/imageupload`, formData, options);
    }

}

