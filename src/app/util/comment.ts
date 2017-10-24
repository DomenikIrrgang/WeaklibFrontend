import { User } from "./user";

export class Comment {
    public user: User;
    public text: string;
    public created: number;
    public hash: string;
    public comments: Comment[];
}