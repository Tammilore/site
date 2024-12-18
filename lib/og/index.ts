import type { Metadata } from "next/types";

export const OpenGraph: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: {
    default: "Tami Lawal | Product Engineer",
    template: "%s",
  },
  description: "Product Engineer building next-gen products.",
  keywords: ["Design", "Development", "Engineering"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Tami Lawal | Product Engineer",
    description: "Product Engineer building next-gen products.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
    siteName: "Tami Lawal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tami Lawal | Product Engineer",
    description: "Product Engineer building next-gen products.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
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
};
