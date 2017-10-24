import { Component, Input } from "@angular/core";
import { Weakaura } from "../../util/weakaura";
import { WEAKAURAS } from "../../mockdata/weakauras";

@Component({
    selector: "titlebar",
    templateUrl: "./titlebar.component.html",
    styleUrls: ["./titlebar.component.css"],
})
export class TitlebarComponent {
    @Input()
    public weakaura: Weakaura;
}