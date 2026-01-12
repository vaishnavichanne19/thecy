import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("adminToken")?.value;
  const pathname = req.nextUrl.pathname;


  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (token && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
