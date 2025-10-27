import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Email not found" }, { status: 404 });
    }

    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?email=${email}`;
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: "Password Reset Request",
      html: `<p>Click the link to reset your password:</p><a href="${resetLink}">${resetLink}</a>`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "Reset email sent" });
  } catch (error) {
    return NextResponse.json({ message: "Error sending reset link" }, { status: 500 });
  }
}
