import { Component, Output, ViewChild, EventEmitter } from "@angular/core";

@Component({
    selector: "commentinput",
    templateUrl: "commentinput.component.html",
    styleUrls: ["commentinput.component.css"],
})
export class CommentInputComponent {

    @ViewChild("comment")
    public comment;
    @Output()
    public commentNotify: EventEmitter<string> = new EventEmitter<string>();

    public sendComment(): void {
        this.commentNotify.emit(this.comment.nativeElement.value);
        this.comment.nativeElement.value = "";
        this.textAreaAdjust();
    }

    public textAreaAdjust() {
        this.comment.nativeElement.style.height = "1px";
        this.comment.nativeElement.style.height = (1 + this.comment.nativeElement.scrollHeight) + "px";
    }
}