import { RequestOptionsArgs } from "@angular/http";

export class WeaklibService {
    protected baseURL: string = "http://localhost:8080";
    protected baseURI: string = "";
    protected options: RequestOptionsArgs = {
        withCredentials: true
    }
}