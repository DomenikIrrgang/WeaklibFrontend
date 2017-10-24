import { Component, Input } from "@angular/core";

@Component({
    selector: "categoriesdisplay",
    templateUrl: "categoriesdisplay.component.html",
    styleUrls: ["categoriesdisplay.component.css"],
})

export class CategoriesDisplayComponent {
    @Input()
    public categories: string[];
    @Input()
    public align: string = "left";
}