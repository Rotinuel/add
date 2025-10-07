import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  await connectDB();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }

  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    password: hashed,
    role: "user", // always default
  });

  return NextResponse.json({ message: "User registered successfully", user: { id: newUser._id, email: newUser.email } });
}
