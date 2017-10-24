import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../util/user";
import { Weakaura } from "../util/weakaura";
import { WeakauraService } from "../services/weakaura.service";
import { UserService } from "../services/user.service";
import { Time } from "../util/time";

@Component({
    selector: "userview",
    templateUrl: "userview.component.html",
    styleUrls: ["userview.component.css"],
})
export class UserViewComponent implements OnInit {
    public user: User;
    public weakauras: Weakaura[];

    // tslint:disable-next-line:max-line-length
    constructor(private weakauraService: WeakauraService, private userService: UserService, private route: ActivatedRoute, private time: Time) { }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => {
            let username: string = params["username"];
            this.userService.getUser(username).subscribe((user) => {
                console.log(user["_body"]);
                this.user = JSON.parse(user["_body"])[0];
                console.log(this.user);
            });
            this.weakauraService.getWeakaurasFromUser(username).subscribe((weakauras) => this.weakauras = JSON.parse(weakauras["_body"]));
        });
    }
}