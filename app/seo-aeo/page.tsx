import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";
import ServiceLanding from "../components/service-landing";
import { servicePages } from "../lib/service-pages";

export const metadata: Metadata = createMetadata({
  title: "خدمات SEO وAEO في السعودية | ديوانك",
  description: "تحسين ظهور المواقع في Google ومحركات الإجابة والذكاء الاصطناعي عبر SEO تقني، محتوى واضح، Schema وهيكلة صفحات قوية.",
  path: "/seo-aeo",
  keywords: ["SEO السعودية", "تحسين محركات البحث", "AEO", "الظهور في الذكاء الاصطناعي", "Technical SEO"],
});

export default function SeoAeoPage() {
  const page = servicePages["seo-aeo"];
  return <ServiceLanding {...page} title={<>{page.titleLines[0]}<br/><em>{page.titleLines[1]}</em></>} />;
}
