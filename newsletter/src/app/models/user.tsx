import { Document, Schema, Types, model, models } from "mongoose";



export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "publisher" | "admin";
  user: Types.ObjectId;
}



const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
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
    
  },
  
);






const UserModel = models.User || model<IUser>("User", UserSchema);

export default UserModel

