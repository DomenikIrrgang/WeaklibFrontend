import { Weakaura } from "./Weakaura";
import { User } from "./User";
import { NotificationType } from "./NotificationTypes";

export class Notification {
    public actor1: User;
    public actor2: User;
    public weakaura: Weakaura;
    public type: NotificationType;
    public timestamp: number;
}