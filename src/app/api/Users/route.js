import { NextResponse } from "next/server";
import UserModel from "@/app/models/User";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {

    const body = await req.json();
    const userData = body.formData;
    userData.role = "Native User"

    if (!userData?.email || !userData?.password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const duplicate = await UserModel.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({ message: "Duplicate email" }, { stauts: 409 });
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;

    await UserModel.create(userData);
    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (err) {
    console.log("error while recieving User from client", err);
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
}
