import { Document, Schema, Types, model } from "mongoose";

export interface IPost extends Document {
  title: string;
  author: string;
  content: string;
  thumbnail?: string;
  status: "draft" | "published" | "trashed";
  date: string;
  user: Types.ObjectId;
}

const PostSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    thumbnail: String,
    status: {
      type: String,
      enum: ["draft", "published", "trashed"],
      default: "draft",
    },
    date: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const PostModel = model<IPost>("Post", PostSchema);

export default PostModel