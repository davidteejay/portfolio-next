import type { Metadata } from "next";
import { Nav } from "@/components/Nav";

import "./globals.css";

export const metadata: Metadata = {
  title: "Chibuokem Onyekwelu",
  description: "Software Engineer (React, React Native, TypeScript, Next.js)",
  keywords: [
    "Chibuokem",
    "Chibuokem Onyekwelu",
    "Software Engineer",
    "Senior Software Engineer",
    "React",
    "React Native",
    "React Native Developer",
    "React Native Engineer",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Mobile developer",
  ],
  creator: "Chibuokem Onyekwelu",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
