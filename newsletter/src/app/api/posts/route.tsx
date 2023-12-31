import { isPostfixUnaryExpression } from "typescript";
import mongoDBConnect from "../../libs/db";
import PostModel from "../../models/post";
import { NextResponse, NextRequest } from "next/server";



export async function GET() {
  try {
    
    await mongoDBConnect();
    //get the data using the model
    const posts = await PostModel.find();
  
    console.log("posts", posts);
    return NextResponse.json(
      { message: "Hello, Next.js Version 13!", posts },
      { status: 200 },
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

export async function POST(request: Request) {
  try {
    //Get the data from the request
    const { title, author, content, thumbnail, status, date,createdAt,updatedAt } =
      await request.json();
    const newPost = {
      title,
      author,
      content,
      thumbnail,
      status,
      date,
      createdAt,
      updatedAt,
    };
    console.log("newPost", newPost);

    // Connect to the DB
    await mongoDBConnect();
    //Use the Model to create
    await PostModel.create(newPost);
    return NextResponse.json(
      {
        message: "Course created successfully",
        data: newPost,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Create a Post",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

