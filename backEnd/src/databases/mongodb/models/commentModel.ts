import { model, Schema } from "mongoose";
import { Comment } from "../../../types/commentType";


export const commentSchema = new Schema<Comment>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }  
})

export const CommentModel = model<Comment>('Comment', commentSchema)