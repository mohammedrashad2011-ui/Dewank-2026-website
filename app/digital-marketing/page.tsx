import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";
import ServiceLanding from "../components/service-landing";
import { servicePages } from "../lib/service-pages";

export const metadata: Metadata = createMetadata({
  title: "التسويق الرقمي وصناعة المحتوى في السعودية | ديوانك",
  description: "استراتيجية تسويق رقمي وصناعة محتوى تربط الرسالة بالقناة ورحلة العميل للشركات في السعودية والخليج.",
  path: "/digital-marketing",
  keywords: ["التسويق الرقمي في السعودية", "استراتيجية محتوى", "إدارة السوشيال ميديا", "رحلة العميل"],
});

export default function DigitalMarketingPage() {
  const page = servicePages["digital-marketing"];
  return <ServiceLanding {...page} title={<>{page.titleLines[0]}<br/><em>{page.titleLines[1]}</em></>} />;
}
