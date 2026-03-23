import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angel Meezha Cadimas – Front-End Developer & UI/UX Designer",
  description:
    "Digital portfolio of Angel Meezha Cadimas — a 3rd year BSIT student at PHINMA University of Pangasinan majoring in Computer Security. Front-End Developer and UI/UX Designer.",
  keywords: [
    "portfolio",
    "front-end developer",
    "UI/UX designer",
    "computer security",
    "BSIT",
    "PHINMA",
    "Pangasinan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
