
import mongoDBConnect from "../../../libs/db";
import UserModel from "../../../models/user";
import { NextResponse, NextRequest } from "next/server";

interface IParams {
    id?:string
}


export async function GET(request:Request, {
    params
}: {params:IParams}) {
  

    try {
        const {id} = params;
        await mongoDBConnect();
        //get the data using the model
        const user = await UserModel.findById(id);
       
        return NextResponse.json(
          { message: "Hello, Next.js Version 13!", user },
          { status: 200 }
        );
      } catch (error) {
    
        return NextResponse.json(
          {
            message: "Failed to fetch Users",
            error,
          },
          {
            status: 500,
          }
        );
      }
  
}


export async function DELETE(request:Request, {
  params
}: {params:IParams}) {
  try {
    //Get the Id of the course
    const {id} = params;
    //Connect to db
    await mongoDBConnect();
    //Use the model to delete
    await UserModel.findByIdAndDelete(id);
    //return the response
    return NextResponse.json(
      {
        message: "User deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Delete a User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

