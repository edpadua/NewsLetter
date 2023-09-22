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
        console.log("id", id);
        console.log("post", post);
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
