import { Component, OnInit } from "@angular/core";
import { Weakaura } from "../util/weakaura";
import { WeakauraService } from "../services/weakaura.service";

@Component({
    selector: "homeview",
    templateUrl: "./homeview.component.html",
    styleUrls: ["./homeview.component.css"],
})
export class HomeViewComponent implements OnInit {
    public latestWeakauras: Weakaura[];
    public mostPopularWeakauras: Weakaura[];
    public bestRatedWeakauras: Weakaura[];

    constructor(private weakauraService: WeakauraService) {}

    public ngOnInit(): void {
        this.weakauraService.getWeakauras().subscribe((result) => {
            this.latestWeakauras = JSON.parse(result["_body"]);
            this.bestRatedWeakauras = JSON.parse(result["_body"]);
            this.mostPopularWeakauras = JSON.parse(result["_body"]);
        });
    }
}