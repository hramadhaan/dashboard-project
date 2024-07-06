"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}
export default function AuthProviders(props: AuthProviderProps) {
  return <SessionProvider>{props.children}</SessionProvider>;
}
