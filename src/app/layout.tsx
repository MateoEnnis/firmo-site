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
  metadataBase: new URL("https://firmo.vercel.app"),
  title: "Firmo — Automation, QA & Web Development",
  description:
    "Precision-driven automation, QA testing, and web development. We build reliable systems that scale your business.",
  keywords: [
    "automation",
    "n8n",
    "QA testing",
    "web development",
    "Next.js",
    "workflow automation",
    "AI integration",
  ],
  openGraph: {
    title: "Firmo — Automation, QA & Web Development",
    description:
      "Precision-driven automation, QA testing, and web development. We build reliable systems that scale your business.",
    url: "https://firmo.vercel.app",
    siteName: "Firmo",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
