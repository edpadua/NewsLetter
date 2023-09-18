import mongoose from "mongoose";

export default async function mongoDBConnect() {
    try {
      await mongoose.connect("mongodb+srv://edpadua:GLCHMPKtU6ibE7aY@cluster0.ektk3uu.mongodb.net/?retryWrites=true&w=majority");
      console.log("Connection Successful");
    } catch (error) {
      console.log(error);
    }
  }