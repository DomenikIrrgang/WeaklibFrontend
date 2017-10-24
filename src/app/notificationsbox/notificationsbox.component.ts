import { Component, OnInit } from "@angular/core";
import { NotificationService } from "../services/notification.service";
import { Notification } from "../util/notification";
import { NotificationType } from "../util/notificationtypes";
import { Time } from "../util/time";

@Component({
    selector: "notificationsbox",
    templateUrl: "./notificationsbox.component.html",
    styleUrls: ["./notificationsbox.component.css"],
})
export class NotificationsBoxComponent implements OnInit {
    public notifications: Notification[];
    public NotificationType = NotificationType;

    constructor(private notificationService: NotificationService, private time: Time) { }

    public ngOnInit(): void {
        this.notificationService.getNotifications().then((notifications) => this.notifications = notifications);
    }

    public getImage(notificationType: NotificationType): string {
        switch (notificationType) {
            case NotificationType.USER_NEW_WEAKAURA:
                return "assets/img/plus.png";
            case NotificationType.WEAKAURA_UPDATE:
                return "assets/img/edit.png";
        }
        return "";
    }
}