import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const matter = localFont({
  src: [
    {
      path: "./fonts/Matter/Matter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Matter/Matter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Matter/Matter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "./fonts/Matter/Matter-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-matter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chibuokem.dev"),
  title: {
    default: "Chibuokem Onyekwelu | Senior React Native Engineer",
    template: "%s | Chibuokem Onyekwelu",
  },
  description:
    "Senior / Lead React Native engineer building and shipping mobile products for iOS and Android with TypeScript.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://chibuokem.dev",
    siteName: "Chibuokem Onyekwelu",
    title: "Chibuokem Onyekwelu | Senior React Native Engineer",
    description:
      "Senior / Lead React Native engineer building and shipping mobile products for iOS and Android with TypeScript.",
    images: ["/images/chibuokem-portrait.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibuokem Onyekwelu | Senior React Native Engineer",
    description:
      "Senior / Lead React Native engineer building and shipping mobile products for iOS and Android with TypeScript.",
    images: ["/images/chibuokem-portrait.jpeg"],
  },
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={matter.variable}>
      <body>
        <div className="site-shell">
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Nav />
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
