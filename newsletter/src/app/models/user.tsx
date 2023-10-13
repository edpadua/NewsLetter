import { Document, Schema, Types, model, models } from "mongoose";

import { Validator } from "mongoose";

import bcrypt from "bcrypt";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "publisher" | "admin";
  user: Types.ObjectId;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your email"],
    minLength: [6, "Your password must be at least 6 characters long"],
    select: false, //dont send back password after request
  },

  role: {
    type: String,
    enum: ["admin", "publisher"],
    default: "publisher",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

UserSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const UserModel = models.User || model<IUser>("User", UserSchema);

export default UserModel;
