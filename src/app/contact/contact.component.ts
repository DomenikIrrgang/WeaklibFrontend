import { Component, OnInit } from "@angular/core";
import { WeakauraCompressor } from "../util/weakauracompressor";

@Component({
    selector: "contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
    public url: string = "";

    public sendRequest(): void {
        let weakauracompressor = new WeakauraCompressor();
        console.log(weakauracompressor.decode(this.url));
    }

    public ngOnInit(): void {
        // this.result = this.userService.getAllUser();
    }
}