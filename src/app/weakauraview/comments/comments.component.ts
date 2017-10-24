import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Comment } from "../../util/comment";
import { WeakauraService } from "../../services/weakaura.service";
import { Time } from "../../util/time";

@Component({
    selector: "comments",
    templateUrl: "comments.component.html",
    styleUrls: ["comments.component.css"],
})

export class CommentsComponent implements OnInit {
    public comments: Comment[];
    @ViewChild("comment")
    public comment;
    @Input()
    public source: any;

    constructor(private commentService: WeakauraService, private time: Time) { }

    public ngOnInit(): void {
        this.refreshComments();
    }

    public sendComment(comment: string) {
        console.log(comment);
        // tslint:disable-next-line:max-line-length
        this.commentService.postComment("", this.source.hash, "", comment.replace(/\r\n|\r|\n/g, "<br/>").replace(/<(?!br\s*\/?)[^>]+>/g, "")).subscribe(() => {
            this.refreshComments();
        });
    }

    public refreshComments(): void {
        this.commentService.getComments(this.source.hash).subscribe((comments) => {
            this.comments = JSON.parse(comments["_body"]).reverse();
            console.log(this.comments);
        });
    }
}