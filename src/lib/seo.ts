import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface MetadataProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Generates standardized SEO metadata for pages across the application.
 */
export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  pathname = "/",
  image = "/images/branding/og-cover.jpg",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url
    ),
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: pathname,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.png", sizes: "32x32", type: "image/png" },
        { url: "/images/branding/tgm-circular-crest-829.png", sizes: "192x192", type: "image/png" },
      ],
      shortcut: "/favicon.png",
      apple: [
        { url: "/images/branding/tgm-circular-crest-829.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
}
