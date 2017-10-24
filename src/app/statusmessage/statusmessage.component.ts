import { Component, Input } from "@angular/core";

@Component({
    selector: "statusmessage",
    templateUrl: "statusmessage.component.html",
    styleUrls: ["statusmessage.component.html"],
})

export class StatusMessageComponent {
    @Input()
    public type: string;

    @Input()
    public message: string;

    @Input()
    public closeable: boolean;
}