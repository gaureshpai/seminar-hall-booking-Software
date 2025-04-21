import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  if (url.pathname === "/") {
      if (!token) {
          return NextResponse.redirect(new URL("/sign-up", request.url));
      }
      return NextResponse.next();
  }
  if(url.pathname.startsWith("/sign-up")){
    if(token){
      return NextResponse.redirect(new URL("/sign-in", request.url))
    }
  }
  if(url.pathname.startsWith("/sign-in")){
    if(token){
      return NextResponse.redirect(new URL("/", request.url))
    }
  }
  
  return NextResponse.next();
}
