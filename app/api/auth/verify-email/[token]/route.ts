import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function GET(req: Request) {
    try {
        await connectDB();

        const url = new URL(req.url);
        // pathname example: /api/auth/verify-email/<token>
        const parts = url.pathname.split("/").filter(Boolean);
        const token = decodeURIComponent(parts[parts.length - 1] || "");

        if (!token) {
            return NextResponse.redirect(new URL("/verify-failed", req.url));
        }

        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return NextResponse.redirect(new URL("/verify-failed", req.url));
        }

        user.verified = true;
        user.verifyToken = undefined;
        await user.save();

        return NextResponse.redirect(new URL("/verify-success", req.url));
    } catch (err) {
        console.error("Email verification error:", err);
        return NextResponse.redirect(new URL("/verify-failed", req.url));
    }
}
