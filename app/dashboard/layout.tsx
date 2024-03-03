"use client";

import { Inter } from "next/font/google";
import SidebarComponent from "@/components/sidebar";
import NavbarComponent from "@/components/navbar";
import { useState } from "react";
import { RootContext } from "@/context/root_context";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={inter.className}>
          <RootContext.Provider
            value={{ hideNavbar: hideNavbar, setHideNavbar: setHideNavbar }}
          >
            <main className="flex flex-row">
              <SidebarComponent />
              <div className="w-full min-h-screen bg-white flex flex-col">
                {/* Navbar */}
                <NavbarComponent />
                <div className="w-full bg-[#F5F6FA] h-full p-6">{children}</div>
              </div>
            </main>
          </RootContext.Provider>
      </body>
    </html>
  );
}
