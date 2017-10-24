import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { List } from "../util/list";
import { CategoryService } from "../services/category.service";
import { Category } from "../util/category";

@Component({
    selector: "categories",
    templateUrl: "categories.component.html",
    styleUrls: ["categories.component.css"],
})

export class CategoriesComponent implements OnInit {
    public categories: Category[] = [];
    public selectedCategories: string[] = [];
    public categoryList: List<string> = new List<string>();
    public selectedCategory: string;
    @Output()
    public notify: EventEmitter<string[]> = new EventEmitter<string[]>();

    constructor(private categoryService: CategoryService) { }

    public ngOnInit(): void {
        this.categoryService.getCategories().subscribe((categories) => this.categories = JSON.parse(categories["_body"]));
    }

    public addCategory(): void {
        if (!this.categoryList.contains(this.selectedCategory) && this.selectedCategory !== "" && this.selectedCategory !== undefined) {
            this.categoryList.add(this.selectedCategory);
        }
        this.selectedCategories = this.categoryList.toArray();
        this.notify.emit(this.selectedCategories);
    }

    public removeCategory(category: string): void {
        this.categoryList.remove(category);
        this.selectedCategories = this.categoryList.toArray();
        this.notify.emit(this.selectedCategories);
    }
}