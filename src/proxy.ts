import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token =
    request.cookies.get("admin_token")?.value;
  // Login page
  if (pathname === "/admin/login") {
    if (token) {
      return NextResponse.redirect(
        new URL("/dashboard", request.url)
      );
    }

    return NextResponse.next();
  }

  const protectedRoutes = [
    "/admin/dashboard",
    "/admin/leads",
    "/admin/users",
    "/admin/roles",
    "/admin/settings",
  ];

  const isProtected =
    protectedRoutes.some(route =>
      pathname.startsWith(route)
    );

  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/login",
    "/admin/dashboard/:path*",
    "/admin/leads/:path*",
    "/admin/users/:path*",
    "/admin/roles/:path*",
    "/admin/settings/:path*",
  ],
};