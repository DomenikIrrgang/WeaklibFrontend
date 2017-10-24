import { Injectable } from "@angular/core";
import { Comment } from "../util/comment";

@Injectable()
export class CommentService {

    public getComments(source: any): Promise<Comment[]> {
        return Promise.resolve([]);
    }
}