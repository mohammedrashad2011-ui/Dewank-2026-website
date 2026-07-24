import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";
import ServiceLanding from "../components/service-landing";
import { servicePages } from "../lib/service-pages";

export const metadata: Metadata = createMetadata({
  title: "تصميم مواقع للشركات في السعودية | ديوانك",
  description: "تصميم وتطوير مواقع سريعة ومتجاوبة للشركات في السعودية والخليج، مع UX وCRO وSEO وAEO وربط التحليلات والأنظمة.",
  path: "/website-design",
  keywords: ["تصميم مواقع في السعودية", "تصميم مواقع للشركات", "صفحات هبوط", "شركة تصميم مواقع"],
});

export default function WebsiteDesignPage() {
  const page = servicePages["website-design"];
  return <ServiceLanding {...page} title={<>{page.titleLines[0]}<br/><em>{page.titleLines[1]}</em></>} />;
}
