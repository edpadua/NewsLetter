import mongoose from "mongoose";

const uri=process.env.NEXT_MONGODB_URI;
 
export default async function mongoDBConnect() {
    try {
      await mongoose.connect(uri|| '');
      console.log("Connection Successful");
    } catch (error) {
      console.log(error);
    }
  }