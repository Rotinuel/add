import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";


export async function GET(
  req: Request, { params }: { params: { token: string } }
) {
  try {
    await connectDB();

    const { token } = params;
    const user = await User.findOne({ verifyToken: token });

    if (!user) {
      return NextResponse.redirect(new URL("/verify-failed", req.url));
    }

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();

    return NextResponse.redirect(new URL("/verify-success", req.url));
  } catch (error) {
    console.error("Email verification error:", error);
    return NextResponse.redirect(new URL("/verify-failed", req.url));
  }
}
