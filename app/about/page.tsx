import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";
import AboutPageContent from "./about-page-content";
import "./about-page.css";
import "./about-entity-aeo.css";

export const metadata: Metadata = createMetadata({
  title: "عن ديوانك | شركة نمو رقمي في السعودية والخليج",
  description: "ديوانك شركة نمو رقمي تخدم الشركات في السعودية والخليج عبر البراند، التسويق، المواقع، SEO، أتمتة واتساب وCRM والذكاء الاصطناعي ضمن منظومة واحدة قابلة للقياس.",
  path: "/about",
  keywords: ["عن ديوانك", "شركة نمو رقمي في السعودية", "شركة تسويق في السعودية", "استراتيجية البراند", "تصميم مواقع", "SEO", "أتمتة واتساب", "CRM", "AI Automation GCC"],
});

export default function AboutPage() {
  return <AboutPageContent />;
}
