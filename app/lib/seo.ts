import type { Metadata } from "next";

export const siteUrl = "https://dewank.com";
export const siteName = "Dewank | ديوانك";
export const defaultDescription =
  "Dewank is a Saudi-focused creative growth studio combining brand strategy, digital marketing, website design, SEO, and AI automation for ambitious businesses across the GCC.";

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        "ar-SA": canonical,
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: canonical,
      siteName,
      title,
      description,
      images: [
        {
          url: `${siteUrl}/dewank-logo.png`,
          width: 1200,
          height: 630,
          alt: "Dewank creative growth studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/dewank-logo.png`],
    },
  };
}
