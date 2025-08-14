import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  if (url.host !== request.headers.get("host")) {
    return new NextResponse("Invalid host", { status: 400 });
  }

  if (!request.headers.get("user-agent")) {
    return new NextResponse("Bad request", { status: 400 });
  }
  
  if (url.pathname.startsWith("/sign-up") && token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  if (url.pathname.startsWith("/sign-in") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (url.pathname === "/" && token?.isAdmin == "admin") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  if (url.pathname.startsWith("/admin") && token?.isAdmin !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
