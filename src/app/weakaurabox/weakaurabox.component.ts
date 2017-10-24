import { Component, Input } from "@angular/core";
import { Weakaura } from "../util/weakaura";
import { Time } from "../util/time";

@Component({
    selector: "weakaurabox",
    templateUrl: "./weakaurabox.component.html",
    styleUrls: ["./weakaurabox.component.css"],

})
export class WeakauraBoxComponent {
    @Input()
    public weakauras: Weakaura[];
    @Input()
    public heading: string;
    @Input()
    public searchURL: string;

    constructor(private time: Time) {}
}