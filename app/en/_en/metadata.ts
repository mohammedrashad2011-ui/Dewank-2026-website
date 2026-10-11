import type { Metadata } from "next";

// English social preview: a 1200x630 branded card (public/en/social/og-en.png). Relative paths resolve against
// the root layout's metadataBase, so they only point at a live image once the site is published on its domain.
const SOCIAL_IMAGE = "/en/social/og-en.png";
const SOCIAL_ALT = "Dewank: Brand people remember. Growth you can measure.";

// English pages are internal preview pages: noindex in metadata, never submitted to search engines.
export function enMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | Dewank`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
    openGraph: {
      type: "website",
      siteName: "Dewank",
      locale: "en_US",
      title: fullTitle,
      description,
      url: path,
      images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630, alt: SOCIAL_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: SOCIAL_IMAGE, alt: SOCIAL_ALT }],
    },
  };
}
