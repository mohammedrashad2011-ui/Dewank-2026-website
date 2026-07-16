import type { Metadata } from "next";

export const siteUrl = "https://dewank.com";
export const siteName = "ديوانك";
export const defaultDescription =
  "ديوانك استوديو نمو إبداعي في السعودية يجمع البراندينج والتسويق وتصميم المواقع وأتمتة الذكاء الاصطناعي في منظومة واحدة.";

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
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: canonical,
      siteName,
      title,
      description,
      images: [
        {
          url: "/dewank-logo.png",
          width: 1200,
          height: 630,
          alt: "ديوانك — البراندينج والتسويق والذكاء الاصطناعي",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/dewank-logo.png"],
    },
  };
}
