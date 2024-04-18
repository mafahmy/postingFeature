import { Types } from "mongoose";
import { Comment } from "./commentType";

export interface Post {
    content: string;
    user: Types.ObjectId,
    createdAt: Date;
    updatedAt: Date;
    likes: Types.ObjectId[],
    comments: Comment[],
}