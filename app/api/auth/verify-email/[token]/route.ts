import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function GET(
  req: Request,
  context: { params: { token: string } }
) {
  const { token } = context.params;

  await connectDB();

  const user = await User.findOne({ verificationToken: token });
  if (!user) {
    return NextResponse.redirect(new URL("/verify-failed", req.url));
  }

  user.verified = true;
  user.verificationToken = undefined;
  await user.save();

  return NextResponse.redirect(new URL("/verify-success", req.url));
}
