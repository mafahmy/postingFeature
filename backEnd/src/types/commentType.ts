import { Types } from "mongoose";
export interface Comment {
    user: Types.ObjectId;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}