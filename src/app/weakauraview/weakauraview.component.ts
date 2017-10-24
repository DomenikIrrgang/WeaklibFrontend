import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Time } from "../util/time";
import { Weakaura } from "../util/weakaura";
import { WeakauraService } from "../services/weakaura.service";

@Component({
    selector: "weakauraview",
    templateUrl: "weakauraview.component.html",
    styleUrls: ["weakauraview.component.css"],
})

export class WeakauraViewComponent implements OnInit {
    public weakaura: Weakaura;

    @ViewChild("imagePreview")
    public imagePreview;

    constructor(private weakauraService: WeakauraService, private route: ActivatedRoute, private time: Time) { }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => {
            let hash: string = params["hash"];
            this.weakauraService.getWeakauraWithHash(hash).subscribe((weakaura) => {
                console.log(weakaura["_body"], hash);
                this.weakaura = JSON.parse(weakaura["_body"])[0];
            });
        });
    }

    public openImagePreview(event): void {
        this.imagePreview.currentImage = +event.srcElement.name;
        this.imagePreview.open();
    }
}