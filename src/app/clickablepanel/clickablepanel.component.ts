import { Component, Input, ViewChild } from "@angular/core";

@Component({
    selector: "clickablepanel",
    templateUrl: "clickablepanel.component.html",
    styleUrls: ["clickablepanel.component.css"],
})

export class ClickablePanelComponent {
    @Input()
    public heading: string;
    @Input()
    public contentVisible: boolean;

    public panelClick(): void {
        this.contentVisible = !this.contentVisible;
    }
}