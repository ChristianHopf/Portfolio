import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

const Hack = localFont({
  src: [
    {
      path: "../public/fonts/HACK-REGULAR.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/HACK-BOLD.ttf",
      weight: "700",
    },
  ],
  variable: "--font-hack",
});

export const metadata: Metadata = {
  title: "Christian Hopf",
  description: "Christian Hopf's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body id="home" className={`${Hack.variable} bg-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
