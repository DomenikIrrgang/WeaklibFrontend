import { Component } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../util/user";
@Component({
    selector: "registerview",
    templateUrl: "registerview.component.html",
    styleUrls: ["registerview.component.css"],
})

export class RegisterViewComponent {
    public username: string = "";
    public password: string = "";
    public passwordRepeat: string = "";
    public email: string = "";
    public statusType: string = "";
    public statusMessage: string = "";
    public buttonDisabled: boolean = false;

    constructor(private userService: UserService) { }

    public register(): void {
        if (this.password === this.passwordRepeat) {
            this.userService.registerUser(new User(this.username, this.password, this.email)).subscribe((data) => {
                if (data._body.indexOf("ERROR") >= 0) {
                    this.statusType = "error";
                    if (data._body.indexOf("name") >= 0 && data._body.indexOf("length") >= 0) {
                        this.statusMessage = "Your username needs to contain at least 3 characters!";
                    }

                    if (data._body.indexOf("name") >= 0 && data._body.indexOf("taken") >= 0) {
                        this.statusMessage = "A user with that name already exists!";
                    }

                    if (data._body.indexOf("email") >= 0 && data._body.indexOf("taken") >= 0) {
                        this.statusMessage = "A user with that email already exists!";
                    }

                    if (data._body.indexOf("email") >= 0 && data._body.indexOf("invalid") >= 0) {
                        this.statusMessage = "Please enter a valid email!";
                    }
                }
                if (data._body.indexOf("SUCCESS") >= 0) {
                    this.statusType = "success";
                    this.statusMessage = "Your account has been created!";
                    this.buttonDisabled = true;
                }
            });
        } else {
            this.statusType = "error";
            this.statusMessage = "The passwords need to match!";
        }
    }
}