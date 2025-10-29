import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/verify-failed`);
    }

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: new Date() },
    });

    if (!user) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/verify-failed`);
    }

    user.isVerified = true;
    user.verifyToken = null;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/login?verified=true`);
  } catch (err) {
    console.error("Verification error:", err);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/verify-failed`);
  }
}
