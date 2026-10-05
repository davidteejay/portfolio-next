import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

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
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibuokem Onyekwelu | Senior React Native Engineer",
    description:
      "Senior / Lead React Native engineer building and shipping mobile products for iOS and Android with TypeScript.",
    images: ["/opengraph-image"],
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
