import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { axiosClient } from "./network/axios";

const credentialsProvider = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
      type: "email",
      placeholder: "Email",
    },
    password: {
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
  },
  async authorize(credentials, req) {
    try {
      const response = await axiosClient.post("/auth/login", {
        user: credentials.email,
        password: credentials.password,
      });

      if (response.status === 201 && response.data.token) {
        console.log("Hanif Ramadhan Abdillah", response.data.data);
        return {
          id: response.data.data._id,
          name: response.data.data.name,
          email: response.data.data.email,
          token: response.data.token,
        };
      } else return null;
    } catch (err) {
      console.log("Error authorize: ", err);
      return null;
    }
  },
});

const config: NextAuthConfig = {
  providers: [credentialsProvider],
  pages: {
    signIn: "/authentication",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard/overview", nextUrl));
      }
      return true;
    },
    async session({ session, user }) {
      session.user.id = user.id;
      return session
    },
    // async jwt({ user, token }) {},
  },
  // session: {
  //   strategy: "jwt",
  // },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
