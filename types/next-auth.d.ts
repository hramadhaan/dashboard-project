import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: string | null | undefined;
      token: string | null | undefined;
    } & DefaultSession["user"];
  }
}
