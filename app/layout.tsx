import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const domainName = process.env.NEXT_PUBLIC_DOMAIN_NAME || "Inteligencia.pw";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://inteligencia.pw";

export const metadata: Metadata = {
  title: `Acquire ${domainName} — Premium Intelligence Domain for AI & Data Excellence`,
  description: `Own ${domainName} — the definitive digital asset for AI startups, intelligence platforms, and data-driven enterprises. Instant brand authority, SEO dominance, and investment-grade domain. Secure this exclusive opportunity today.`,
  keywords: [
    "Inteligencia",
    "premium domain",
    "AI domain",
    "intelligence platform",
    "data analytics domain",
    "tech startup domain",
    "domain investment",
    "brand domain",
  ],
  authors: [{ name: "imrulo.eth" }],
  creator: "imrulo.eth",
  publisher: "imrulo.eth",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Acquire ${domainName} — Premium Intelligence Domain`,
    description: `Own ${domainName} — the definitive digital asset for AI startups, intelligence platforms, and data-driven enterprises.`,
    url: baseUrl,
    siteName: domainName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image`,
        width: 1200,
        height: 630,
        alt: `${domainName} - Premium Domain for Sale`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Acquire ${domainName} — Premium Intelligence Domain`,
    description: `Own ${domainName} — the definitive digital asset for AI startups, intelligence platforms, and data-driven enterprises.`,
    images: [`${baseUrl}/og-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: undefined, // Add if you have Google verification
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

