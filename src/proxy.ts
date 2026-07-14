import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const pathname = decodeURIComponent(request.nextUrl.pathname);
  const token = request.cookies.get("admin_token")?.value;

  // Ignore API & static files
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // ==========================
  // Admin Login
  // ==========================

  if (pathname === "/admin/login") {
    if (token) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
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
    return NextResponse.redirect(new URL("/admin/login", request.url));
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
  console.log("status", res.status);

  if (res.ok) {
    const redirect = await res.json();
    console.log("redirect=", redirect);

    if (redirect.success && redirect.data) {
      switch (redirect.data.redirect_type) {
        // Redirects
        case 301:
        case 302:
        case 303:
        case 307:
        case 308:
          return NextResponse.redirect(
            new URL(redirect.data.destination_url, request.url),
            redirect.data.redirect_type,
          );

        // Error Status
        case 401:
          return new NextResponse("Unauthorized", {
            status: 401,
          });

        case 403:
          return new NextResponse("Forbidden", {
            status: 403,
          });

        case 404:
          return new NextResponse("Not Found", {
            status: 404,
          });

        case 410:
          return new NextResponse("Gone", {
            status: 410,
          });

        case 451:
          return new NextResponse("Unavailable For Legal Reasons", {
            status: 451,
          });

        default:
          return NextResponse.next();
      }
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
