import { isPostfixUnaryExpression } from "typescript";
import mongoDBConnect from "../../libs/db";
import PostModel from "../../models/post";
import { NextResponse } from "next/server";

{
  /*export async function GET(request: Request) {
    try {
      // Connect to the DB
      await mongoDBConnect();
      //get the data using the model
      const posts = await PostModel.find();
      console.log("posts",posts);
      return NextResponse.json(
        {
          message: "Ok",
          data: isPostfixUnaryExpression,
        },
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
  }*/
}

export async function GET(request: Request) {
  try {
    await mongoDBConnect();
    //get the data using the model
    const posts = await PostModel.find();
    console.log("posts", posts);
    return NextResponse.json(
      { message: "Hello, Next.js Version 13!", data: isPostfixUnaryExpression },
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

export async function POST(request: Request) {
  try {
    //Get the data from the request
    const { title, author, content, thumbnail, status, date } =
      await request.json();
    const newPost = {
      title,
      author,
      content,
      thumbnail,
      status,
      date,
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

export async function DELETE(request: Request) {
  try {
    //Get the Id of the course
    const id = request.nextUrl.searchParams.get("id");
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
