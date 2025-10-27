import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log("🔍 JWT Token in middleware:", token);

  // If no session and trying to access protected page → redirect to login
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // If logged in and role is admin, redirect dashboard → /dashboard/admin
  if (pathname === "/dashboard" && token?.role === "admin") {
    return NextResponse.redirect(new URL("/dashboard/admin", req.url));
  }

  // Prevent non-admin users from accessing /dashboard/admin
  if (pathname.startsWith("/dashboard/admin") && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
