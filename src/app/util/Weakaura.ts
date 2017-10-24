import { WeakauraVersion } from "./weakauraversion";
import { User } from "./user";

export class Weakaura {
    public name: string;
    public user: User;
    public created: number;
    public updated: number;
    public  views: number;
    public hash: string;
    public description: string;
    public profilePicture: string;
    public strings: WeakauraVersion[];
    public images: string[];
}