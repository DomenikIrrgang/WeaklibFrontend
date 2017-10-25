import { Component } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { Globals } from "../util/globals";

@Component({
    selector: "loginview",
    templateUrl: "loginview.component.html",
    styleUrls: ["loginview.component.css"],
})

export class LoginViewComponent {
    public username: string = "";
    public password: string = "";
    public remember: boolean = true;
    public statusType: string = "";
    public statusMessage: string = "";

    constructor(private userService: UserService, private router: Router) { }

    public checkboxClick(): void {
        this.remember = !this.remember;
    }

    public loginClick(): void {
        this.userService.login(this.username, this.password).subscribe((data) => {
            if (data["_body"] === "SUCCESS") {
                this.userService.getAuthenticatedUser().subscribe((result) => {
                    Globals.authenticatedUser = JSON.parse(result["_body"]);
                });
                this.router.navigate(["/dashboard"]);
            } else {
                this.statusType = "error";
                this.statusMessage = "Username or password is wrong!";
            }
        });
    }
}