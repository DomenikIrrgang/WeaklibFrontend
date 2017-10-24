import { Injectable } from "@angular/core";

import { News } from "../util/news";
import { NEWS } from "../mockdata/news";

@Injectable()
export class NewsService {
    public getNews(): Promise<News[]> {
        return Promise.resolve(NEWS);
    }

    public getNewsWithLatency(): Promise<News[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.getNews()), 2000);
        });
    }

    public getNewsWithHash(hash: string): Promise<News> {
        for (let tmp of NEWS) {
            if (tmp.hash === hash) {
                return Promise.resolve(tmp);
            }
        }
        return null;
    }
}