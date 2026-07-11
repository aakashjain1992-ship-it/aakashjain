import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const title = "Aakash Jain — Senior Technical Product Manager";
const description =
  "Product manager who ships. 10 years of enterprise SaaS experience, backed by real side projects built end-to-end.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aakashjain.vercel.app"
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Aakash Jain",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aakash Jain",
  jobTitle: "Senior Technical Product Manager",
  description,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aakashjain.vercel.app",
  image: `${
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aakashjain.vercel.app"
  }/image.png`,
  email: "mailto:aakashjain1992@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/aakashjain1992",
    "https://github.com/aakashjain1992-ship-it",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Akamai Technologies",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "BIMTECH, Greater Noida",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Sharda University",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
