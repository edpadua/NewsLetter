import { isPostfixUnaryExpression } from "typescript";
import mongoDBConnect from "../../../libs/db";
import PostModel from "../../../models/post";
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
        const post = await PostModel.findById(id);
       
        return NextResponse.json(
          { message: "Hello, Next.js Version 13!", post },
          { status: 200 }
        );
      } catch (error) {
    
        return NextResponse.json(
          {
            message: "Failed to fetch posts",
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
    await PostModel.findByIdAndDelete(id);
    //return the response
    return NextResponse.json(
      {
        message: "Post deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Delete a Post",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

