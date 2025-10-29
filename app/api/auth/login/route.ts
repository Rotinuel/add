import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    // 🧠 Connect to MongoDB
    await connectDB();

    // 🧾 Parse request body safely
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ message: "Invalid JSON payload" }, { status: 400 });
    }

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    // 🔍 Find user
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    if(!user.verified){
      return NextResponse.json(
        { message: "Please verify your email before logging in." },
        { status: 403}
      )
    }

    // 🔑 Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    //  Success
    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login route error:", err);
    // Always return JSON even for errors
    return NextResponse.json(
      { message: "Server error occurred during login" },
      { status: 500 }
    );
  }
}
