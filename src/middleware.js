import { NextResponse } from "next/server";

export function middleware(request) {
  const userData = request.cookies.get("chat-user")?.value;
  const requestUrl = request.nextUrl.pathname;

  // Define protected routes
  const protectedRoutes = ["/dashboard"];
  const publicRoutes = ["/login", "signup"];

  // Check if the requested URL matches any of the protected routes
  const isProtectedRoute = protectedRoutes.some((route) =>
    requestUrl.startsWith(route)
  );

  const isPublicRoute = publicRoutes.some((route) =>
    request.url.startsWith(route)
  );

  if (isPublicRoute && userData) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If it's a protected route and user has no userData, redirect to loginin
  if (isProtectedRoute && !userData) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Matcher to apply the middleware to specific routes
export const config = {
  matcher: ["/login", "/signup", "/dashboard"],
};
