import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Globals } from "../util/globals";
import { Router } from "@angular/router";

@Component({
    selector: "navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {

    public global = Globals;

    constructor(private userService: UserService, private router: Router) { }

    public ngOnInit(): void {
        this.userService.getAuthenticatedUser().subscribe((data) => {
            if (data["_body"] !== "ERROR") {
                Globals.authenticatedUser = JSON.parse(data["_body"]);
            }
        });
    }

    public navigationElementClick(): void {
        if (window.innerWidth < 768) {
            document.getElementsByName("collapse-button")[0].click();
        }
    }

    public logout(event): void {
        this.userService.logout().subscribe((data) => {
            Globals.authenticatedUser = undefined;
            this.router.navigate(["/home"]);
        },
        (error) => {
            console.log(error);
        });
    }
}