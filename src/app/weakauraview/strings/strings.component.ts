import { Component, Input } from "@angular/core";
import { Weakaura } from "../../util/weakaura";

@Component({
    selector: "strings",
    templateUrl: "strings.component.html",
    styleUrls: ["strings.component.css"],
})

export class StringsComponent {
    @Input()
    public weakaura: Weakaura;
}