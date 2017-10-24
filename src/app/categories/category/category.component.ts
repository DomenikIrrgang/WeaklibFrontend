import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Category } from "../../util/category";

@Component({
    selector: "category",
    templateUrl: "category.component.html",
    styleUrls: ["category.component.css"],
})

export class CategoryComponent {
    @Input()
    public category: string;
    @Output()
    public notify: EventEmitter<string> = new EventEmitter<string>();

    public removeClick(): void {
        this.notify.emit(this.category);
    }
}