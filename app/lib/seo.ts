import type { Metadata } from "next";

export const siteUrl = "https://dewank.com";
export const siteName = "ديوانك | Dewank";
export const organizationId = `${siteUrl}/#organization`;
export const defaultDescription =
  "ديوانك شركة تسويق رقمي واستوديو نمو للشركات في السعودية والخليج، يجمع استراتيجية البراند وتصميم المواقع والحملات وأتمتة واتساب وCRM في منظومة واحدة.";

const socialImage = `${siteUrl}/dewank-social-preview-2026-07.png`;

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  socialImagePath,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  socialImagePath?: string;
}): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const pageSocialImage = socialImagePath
    ? new URL(socialImagePath, siteUrl).toString()
    : socialImage;
  const socialTitle = title.split("|")[0].trim();

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        ar: canonical,
        "x-default": canonical,
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
          url: pageSocialImage,
          secureUrl: pageSocialImage,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: `${socialTitle} — ديوانك`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [pageSocialImage],
    },
  };
}
