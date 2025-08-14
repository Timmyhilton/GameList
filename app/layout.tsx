import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Footer, Header} from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GameHub - Discover and Play Amazing Games",
  description:
    "A modern game collection platform featuring the best online games. Play instantly or download to enjoy offline.",
  keywords: "games, online games, download games, gaming platform, free games",
  authors: [{ name: "GameHub Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "GameHub - Discover and Play Amazing Games",
    description:
      "A modern game collection platform featuring the best online games.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameHub - Discover and Play Amazing Games",
    description:
      "A modern game collection platform featuring the best online games.",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" /> */}
      </head>
      <body className={inter.className}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
        {/* Header */}
        <Header/>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>

        {/* Footer */}
        <Footer/>
      </div>

      </body>
    </html>
  );
}
