import localFont from "next/font/local";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { site } from "@/content/site";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import "./globals.css";

const sans = localFont({
  src: [
    { path: "../../public/fonts/source-sans-3-latin-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/source-sans-3-latin-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const serif = localFont({
  src: [
    { path: "../../public/fonts/fraunces-latin-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/fraunces-latin-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  ...pageMetadata({
    title: `Kitchen & Bath Remodeling in ${site.city} | ${site.company}`,
    description: `Kitchen and bathroom remodeling in ${site.city}. Portfolio, process, and design consultations — call ${site.phone} or schedule online.`,
    path: "/",
  }),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className={`${sans.className} flex min-h-full flex-col bg-bg text-ink`}>
        <JsonLd data={[websiteSchema(), businessSchema()]} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
