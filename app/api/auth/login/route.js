import { connectDB } from "@/lib/db.js";
import { signToken } from "@/lib/jwt.js";
import User from "@/models/User.js";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User Not Found" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Password Not Match" },
        { status: 401 }
      );
    }

    const token = signToken({
      id: user._id,
      name: user.name,
      email: user.email,
    });

    return NextResponse.json({
      success: true,
      message: "Login Successful",
      token,
      id: user._id,
      email: user.email,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
