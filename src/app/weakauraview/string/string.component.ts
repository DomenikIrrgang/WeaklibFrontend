import { Component, Input } from "@angular/core";
import { WeakauraVersion } from "../../util/weakauraversion";

@Component({
    selector: "weakaurastring",
    templateUrl: "string.component.html",
    styleUrls: ["string.component.css"],
})

export class StringComponent {
    @Input()
    public weakauraVersion: WeakauraVersion;

    public copyClick(): void {
        let textArea = document.createElement("textarea");
        textArea.style.position = "fixed";
        textArea.value = String(this.weakauraVersion.string);
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand("copy");
        } catch (err) {
            console.log("could not paste to clipboard");
        }
        document.body.removeChild(textArea);
    }
}