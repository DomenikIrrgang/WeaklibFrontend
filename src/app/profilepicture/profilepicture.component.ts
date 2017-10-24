import { Component, Input } from "@angular/core";


@Component({
  selector: "profilepicture",
  templateUrl: "./profilepicture.component.html",
  styleUrls: ["./profilepicture.component.css"],

})
export class ProfilepictureComponent {
  @Input()
  public profilePicture: string;
}