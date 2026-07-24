import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";
import ServiceLanding from "../components/service-landing";
import { servicePages } from "../lib/service-pages";

export const metadata: Metadata = createMetadata({
  title: "استراتيجية البراند والهوية البصرية في السعودية | ديوانك",
  description: "خدمات استراتيجية البراند، التموضع، التسمية والهوية البصرية للشركات في السعودية والخليج. ابنِ علامة أوضح وأسهل تذكّرًا.",
  path: "/branding",
  keywords: ["استراتيجية البراند", "تصميم هوية بصرية", "شركة براندينج في السعودية", "تسمية العلامات التجارية"],
});

export default function BrandingPage() {
  const page = servicePages.branding;
  return <ServiceLanding {...page} title={<>{page.titleLines[0]}<br/><em>{page.titleLines[1]}</em></>} />;
}
