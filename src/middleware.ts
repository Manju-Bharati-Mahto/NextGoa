import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token =
    request.cookies.get("admin_token")?.value;
  // Login page
  if (pathname === "/login") {
    if (token) {
      return NextResponse.redirect(
        new URL("/dashboard", request.url)
      );
    }

    return NextResponse.next();
  }

  const protectedRoutes = [
    "/dashboard",
    "/leads",
    "/users",
    "/roles",
    "/settings",
  ];

  const isProtected =
    protectedRoutes.some(route =>
      pathname.startsWith(route)
    );

  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/dashboard/:path*",
    "/leads/:path*",
    "/users/:path*",
    "/roles/:path*",
    "/settings/:path*",
  ],
};