import { Document, Schema, Types, model, models } from "mongoose";

import bcrypt from 'bcrypt';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role:string;

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
    
  },
  
);


UserSchema.pre('save', async function() {
    return new Promise( async (resolve, reject) => {
        await bcrypt.genSalt(10, async (err, salt) => {
            await bcrypt.hash(this.password, salt, async (err, hash) => {
                if(err) {
                    reject (err)
                } else {
                   this.password = hash;
                }
            });
        });
    })
})




const UserModel = models.User || model<IUser>("User", UserSchema);

export default UserModel