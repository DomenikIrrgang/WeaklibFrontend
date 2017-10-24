import { Component, OnInit, ViewChild } from "@angular/core";
import { ImageUploadService } from "../services/imageupload.service";
import { Weakaura } from "../util/weakaura";
import { Globals } from "../util/globals";
import { WeakauraService } from "../services/weakaura.service";

@Component({
    selector: "uploadweakaura",
    templateUrl: "uploadweakauraview.component.html",
    styleUrls: ["uploadweakauraview.component.css"],
})

export class UploadWeakauraViewComponent {
    @ViewChild("descriptionElement")
    public descriptionElement;
    @ViewChild("image")
    public image;
    public name: string = "";
    public description: string = "";
    public string: string = "";
    public version: string = "";
    public categories: string[] = [];

    constructor(private imageUploadService: ImageUploadService, private weakauraService: WeakauraService) { }

    public textAreaAdjust(): void {
        this.descriptionElement.nativeElement.style.height = "1px";
        this.descriptionElement.nativeElement.style.height = (1 + this.descriptionElement.nativeElement.scrollHeight) + "px";
    }

    public upload(): void {
        if (this.image.files.length > 0) {
            this.imageUploadService.uploadImages(this.image.files).subscribe((data) => {
                let response = JSON.parse(data._body);
                if (response[0].error === "OK") {
                    let weakaura: Weakaura = new Weakaura();
                    weakaura.description = this.description;
                    weakaura.name = this.name;
                    weakaura["string"] = this.string;
                    weakaura["version"] = this.version;
                    weakaura.profilePicture = response[0].url;
                    weakaura.user = Globals.authenticatedUser;
                    weakaura["categories"] = this.categories;
                    this.weakauraService.uploadWeakaura(weakaura).subscribe((result) => {
                        console.log(result["_body"]);
                    });
                } else {
                    console.log(response);
                }
            });
        }
    }

    public categoriesChanged(categories): void {
        this.categories = categories;
    }
}