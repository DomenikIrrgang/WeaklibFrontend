import { Notification } from "../util/notification";
import { Weakaura } from "../util/weakaura";
import { WeakauraService } from "../services/weakaura.service";
import { NotificationType } from "../util/notificationtypes";
import { WEAKAURAS } from "../mockdata/weakauras";
import { USER } from "./user";

export const NOTIFICATIONS: Notification[] = [
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: USER[1], actor2: USER[2], weakaura: WEAKAURAS[1], type: NotificationType.USER_NEW_WEAKAURA },
];