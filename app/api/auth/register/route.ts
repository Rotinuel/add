import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { Resend } from "resend";
import crypto from "crypto"


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, phone, password,  } = await req.json();

    if (!name || !email || !phone || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString("hex");
    const verifyTokenExpiry = new Date(Date.now() + 600 * 1000);
    const user = await User.create({ name, email, phone, password: hashed, verifyToken: token, verifyTokenExpiry, verified: false });

    const verifyLink = `${process.env.NEXTAUTH_URL}/verify?token=${token}`;

    await resend.emails.send({
      from: "Abuja Detty December <no-reply@abujadettydecember.com>",
      to: email,
      subject: "Verify your Abuja Detty December account",
      html: `
        <div style="font-family:sans-serif; line-height: 1.5"> 
        <h2>Welcome, ${name}!</h2>
        <p>Click below to verify your email and activate your account:</p>
        <a href="${verifyLink}" target="_blank"
           style="display:inline-block; background:#2563eb;color:white;padding:10px 20px;
           text-decoration:none;border-radius:5px;">
          Verify Email
        </a>
        <p>If you didn't create an account, please ignore this email. </p>
        <p>This link expires in 10 minutes.</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Registration successful!", user },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
