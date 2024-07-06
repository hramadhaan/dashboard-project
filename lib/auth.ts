import type { NextAuthOptions } from "next-auth";
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
    const response = await axiosClient.post("/auth/login", {
      user: credentials.email,
      password: credentials.password,
    });

    console.log("Response Hanif: ", response.data.data);

    if (response.status === 201 && response.data.token) {
      const user = {
        id: response.data.data._id,
        name: response.data.data.name,
        email: response.data.data.email,
        token: response.data.token,
      };
      return Promise.resolve(user);
    }
    return Promise.reject(null);
  },
});

export const authConfig: NextAuthOptions = {
  providers: [credentialsProvider],
  pages: {
    signIn: "/authentication",
    signOut: "/authentication",
    error: "/authentication",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub;
        session.user.token = token?.token;
      }
      return session;
    },
    async jwt({ user, token }) {
      if (user) {
        token.uid = user.id;
        token.token = user.token;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
