import { Component, ViewChild } from "@angular/core";
import { Weakaura } from "../util/weakaura";
import { WeakauraService } from "../services/weakaura.service";
import { Time } from "../util/time";

@Component({
    selector: "searchview",
    templateUrl: "searchview.component.html",
    styleUrls: ["searchview.component.css"],
})

export class SearchViewComponent {
    public name: string = "";
    public author: string = "";
    public categories: string[] = [];
    public searchResult: Weakaura[] = [];
    @ViewChild("filterPanel")
    public filterPanel;
    @ViewChild("resultPanel")
    public resultPanel;

    constructor(private weakauraService: WeakauraService, private time: Time) { }

    public searchSubmit(): void {
        this.weakauraService.searchWeakaura(this.name, this.author, this.categories).subscribe((weakauras) => {
            this.searchResult = JSON.parse(weakauras["_body"]);
        });
        this.filterPanel.contentVisible = true;
        this.resultPanel.contentVisible = true;
    }

    public categoriesChanged(categories): void {
        this.categories = categories;
    }

    public hasResult(): boolean {
        return this.searchResult.length > 0;
    }

    public checkReturnKey(event): void {
        if (event.key === "Enter") {
            this.searchSubmit();
        }
    }
}