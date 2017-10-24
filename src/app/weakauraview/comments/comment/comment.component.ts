import { Component, Input } from "@angular/core";
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
    public replyVisible: boolean = false;

    constructor(private time: Time, private commentService: WeakauraService) { }

    public changeReplyVisibility(): void {
        this.replyVisible = !this.replyVisible;
    }
    public reply(reply: string): void {
        console.log(this);
        console.log(reply);
        this.commentService.postComment(this.comment.hash, this.comment["_id"], reply).subscribe(() => {
            this.changeReplyVisibility();
        });
    }
}