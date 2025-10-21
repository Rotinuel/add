import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req: { auth?: any; nextUrl?: any; }) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth?.user;
  const isAdmin = req.auth?.user?.role === "admin";

  const isDashboard = nextUrl.pathname.startsWith("/dashboard");
  const isAdminPage = nextUrl.pathname.startsWith("/dashboard/admin");

  if (isDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  if (isAdminPage && !isAdmin) {
    return NextResponse.redirect(new URL("/unauthorized", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard/admin/:path*"],
};
