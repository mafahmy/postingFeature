import { Schema, model } from 'mongoose';
import { Post } from '../../../types/postType';
import { CommentModel, commentSchema } from './commentModel';

// Post model
const postSchema = new Schema<Post>({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [commentSchema],
});

export const PostModel = model<Post>('Post', postSchema);