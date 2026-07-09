import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("admin_token")?.value;

  // Ignore API & static files
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/uploads") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // ==========================
  // Admin Login
  // ==========================

  if (pathname === "/admin/login") {
    if (token) {
      return NextResponse.redirect(
        new URL("/admin/dashboard", request.url),
      );
    }

    return NextResponse.next();
  }

  // ==========================
  // Admin Protected Routes
  // ==========================

  const protectedRoutes = [
    "/admin/dashboard",
    "/admin/leads",
    "/admin/users",
    "/admin/roles",
    "/admin/settings",
  ];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url),
    );
  }

  // ==========================
  // Website Redirect Manager
  // ==========================

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/redirects?path=${encodeURIComponent(pathname)}`,
    {
      cache: "no-store",
    },
  );

  if (res.ok) {
    const redirect = await res.json();

    if (redirect.success && redirect.data) {
      return NextResponse.redirect(
        new URL(redirect.data.destination_url, request.url),
        redirect.data.redirect_type,
      );
    }
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
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};