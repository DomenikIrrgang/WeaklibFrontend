import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Comment } from "../../../util/comment";
import { Time } from "../../../util/time";
import { WeakauraService } from "../../../services/weakaura.service";

@Component({
    selector: "comment",
    templateUrl: "comment.component.html",
    styleUrls: ["comment.component.css"],
})

export class CommentComponent {
    @Input()
    public comment: Comment;

    @Input()
    public root: Comment;

    @Output()
    public commentNotify: EventEmitter<string> = new EventEmitter<string>();

    public replyVisible: boolean = false;

    constructor(private time: Time, private commentService: WeakauraService) { }

    public changeReplyVisibility(): void {
        this.replyVisible = !this.replyVisible;
    }

    public reply(reply: string): void {
        console.log(this);
        console.log(reply);
        // tslint:disable-next-line:max-line-length
        this.commentService.postComment(this.root["_id"], this.comment.hash, this.comment["_id"], reply.replace(/\r\n|\r|\n/g, "<br/>").replace(/<(?!br\s*\/?)[^>]+>/g, '')).subscribe(() => {
            this.changeReplyVisibility();
            this.commentPosted();
        });
    }

    public commentPosted(): void {
        this.commentNotify.emit();
    }
}