import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/authentication") &&
      req.nextauth.token
    ) {
      return NextResponse.redirect(new URL("/dashboard/overview", req.url));
    }
  },
  {
    callbacks: {
      authorized: async ({ req, token }) => {
        if (req.nextUrl.pathname.startsWith("/dashboard") && token === null) {
          return false;
        }
        // if (req.nextUrl.pathname.startsWith("/authentication") && !token) {
        //   return false
        // }
        return true;
      },
    },
    pages: {
      signOut: "/authentication",
    },
  }
);
