import { Injectable } from "@angular/core";
import { Notification } from "../util/notification";
import { NOTIFICATIONS } from "../mockdata/notification";

@Injectable()
export class NotificationService {
  public getNotifications(): Promise<Notification[]> {
    return Promise.resolve(NOTIFICATIONS);
  }
}