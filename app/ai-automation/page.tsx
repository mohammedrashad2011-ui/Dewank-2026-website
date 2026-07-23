import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";
import ServiceLanding from "../components/service-landing";
import { servicePages } from "../lib/service-pages";

export const metadata: Metadata = createMetadata({
  title: "حلول أتمتة الذكاء الاصطناعي للشركات | ديوانك",
  description: "حلول AI Automation وسير العمل وربط CRM والتسويق والمبيعات وخدمة العملاء للشركات في السعودية والخليج.",
  path: "/ai-automation",
  keywords: ["أتمتة الذكاء الاصطناعي", "AI Automation", "Workflow Automation", "CRM Automation", "وكلاء الذكاء الاصطناعي"],
});

export default function AiAutomationPage() {
  const page = servicePages["ai-automation"];
  return <ServiceLanding {...page} title={<>{page.titleLines[0]}<br/><em>{page.titleLines[1]}</em></>} />;
}
