import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const routeRoles = {
  "/superadmin": ["superadmin"], // full control
  "/admin": ["admin", "superadmin"], // admin dashboard
  "/staff": ["staff", "admin", "superadmin"],
  "/vendor": ["vendor", "admin", "superadmin"],
  "/dashboard": ["user", "staff", "vendor", "admin", "superadmin"],
};

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const pathname = req.nextUrl.pathname;

  for (const [route, roles] of Object.entries(routeRoles)) {
    if (pathname.startsWith(route)) {
      if (!token?.role || !roles.includes(token.role)) {
        const url = req.nextUrl.clone();
        url.pathname = "/unauthorized";
        return NextResponse.redirect(url);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/superadmin/:path*",
    "/admin/:path*",
    "/staff/:path*",
    "/vendor/:path*",
    "/dashboard/:path*",
  ],
};
