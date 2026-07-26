import type { Metadata } from "next";

export const siteUrl = "https://dewank.com";
export const siteName = "ديوانك | Dewank";
export const defaultDescription =
  "ديوانك شريك نمو رقمي للشركات في السعودية والخليج، يجمع البراندينج والتسويق وتصميم المواقع وأتمتة المبيعات في منظومة واحدة تحقق نتائج أوضح.";

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
  const socialTitle = title.split("|")[0].trim();
  const socialImage = `${siteUrl}/api/og?title=${encodeURIComponent(socialTitle)}`;

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
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${socialTitle} — ديوانك`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
