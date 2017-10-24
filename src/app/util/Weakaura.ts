import { WeakauraVersion } from "./weakauraversion";
import { User } from "./user";

export class Weakaura {
    name: string;
    user: User;
    created: number;
    updated: number;
    views: number;
    hash: string;
    description: string;
    profilePicture: string;
    strings: WeakauraVersion[];
    images: string[];
}