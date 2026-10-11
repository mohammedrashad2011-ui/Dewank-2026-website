import type { Metadata } from "next";
import { ENGLISH_LAUNCH_ENABLED } from "@/app/en/_en/lib/seo-launch";

// English social preview: a 1200x630 branded card (public/en/social/og-en.png). Relative paths resolve against
// the root layout's metadataBase, so they only point at a live image once the site is published on its domain.
const SOCIAL_IMAGE = "/en/social/og-en.png";
const SOCIAL_ALT = "Dewank: Brand people remember. Growth you can measure.";

// English pages stay noindex (Preview and until launch). Indexing needs both the launch flag and a production deployment,
// so a Preview deployment can never be indexed by accident. With the flag off, output is unchanged.
const noindex = { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } };
const englishIndexing = ENGLISH_LAUNCH_ENABLED && globalThis.process.env.VERCEL_ENV === "production";

// English pages: canonical, Open Graph and Twitter metadata for the English site.
export function enMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | Dewank`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    robots: englishIndexing ? undefined : noindex,
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
