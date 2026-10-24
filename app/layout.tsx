import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gautam Gadhiya | Software Engineer",
  description:
    "Full Stack Software Developer crafting responsive web applications with React, Next.js, TypeScript, Node.js, and MySQL.",
  keywords: [
    "Gautam Gadhiya",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MySQL",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Gautam Gadhiya" }],
  creator: "Gautam Gadhiya",
  openGraph: {
    title: "Gautam Gadhiya | Software Engineer",
    description:
      "Full Stack Software Developer building responsive web applications with React, Next.js, TypeScript, and Node.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gautam Gadhiya | Full Stack Software Developer",
    description:
      "Full Stack Software Developer building responsive web applications.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
