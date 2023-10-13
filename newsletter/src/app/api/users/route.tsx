import { isPostfixUnaryExpression } from "typescript";
import mongoDBConnect from "../../libs/db";
import UserModel from "../../models/user";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";

export async function GET() {
  try {
    await mongoDBConnect();
    //get the data using the model
    const users = await UserModel.find();

    console.log("users", users);
    return NextResponse.json(
      { message: "Hello, Next.js Version 13!", users },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetchs users",
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
    const { name, email, password, role } = await request.json();
    const encryptedPassword = bcrypt.hashSync(password, 10);
    console.log("encryptedPassword", encryptedPassword);

    let user = await UserModel.findOne({ email });

    if (user) {
        return NextResponse.json(
            {
                error: "User already exists"
            },
            { status: 400 }
          );
    }

    const newUser = {
      name: name,
      email: email,
      password: encryptedPassword,
      role: role,
    };
    console.log("newUser", newUser);

    // Connect to the DB
    await mongoDBConnect();
    //Use the Model to create
    console.log("Connected");
    await UserModel.create(newUser);
    console.log("User created");
    return NextResponse.json(
      {
        message: "User created successfully",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Create a User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
