import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news.service";
import { News } from "../util/news";
import { Time } from "../util/time";

@Component({
    selector: "news",
    templateUrl: "./news.component.html",
    styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
    public news: News[];

    constructor(private newsService: NewsService, private time: Time) {}

    public ngOnInit(): void {
        this.newsService.getNews().then((news) => this.news = news);
    }
}