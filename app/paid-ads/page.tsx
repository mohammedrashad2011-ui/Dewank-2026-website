import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";
import ServiceLanding from "../components/service-landing";
import { servicePages } from "../lib/service-pages";

export const metadata: Metadata = createMetadata({
  title: "إدارة إعلانات ميتا وجوجل في السعودية | ديوانك",
  description: "إدارة إعلانات Meta وGoogle وتحسين التحويل للشركات في السعودية والخليج، من التتبع والرسالة إلى صفحة الهبوط والمتابعة.",
  path: "/paid-ads",
  keywords: ["إدارة إعلانات ميتا", "إعلانات جوجل", "شركة إعلانات في السعودية", "تحسين التحويل"],
});

export default function PaidAdsPage() {
  const page = servicePages["paid-ads"];
  return <ServiceLanding {...page} title={<>{page.titleLines[0]}<br/><em>{page.titleLines[1]}</em></>} />;
}
