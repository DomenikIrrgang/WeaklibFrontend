import { Injectable } from "@angular/core";
import { Comment } from "../util/comment";
import { Weakaura } from "../util/weakaura";

@Injectable()
export class CommentService {

    public getComments(source: any): Promise<Comment[]> {
        return Promise.resolve([]);
    }
}