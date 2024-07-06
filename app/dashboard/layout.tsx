"use client";

import { Inter } from "next/font/google";
import SidebarComponent from "@/components/sidebar";
import NavbarComponent from "@/components/navbar";
import RootContextProvider from "@/components/providers/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={inter.className}>
        <RootContextProvider>
          <main className="flex flex-row">
            <SidebarComponent />
            <div className="w-full min-h-screen bg-white flex flex-col">
              {/* Navbar */}
              <NavbarComponent />
              <div className="w-full bg-[#F5F6FA] h-full p-6">{children}</div>
            </div>
          </main>
        </RootContextProvider>
      </body>
    </html>
  );
}
