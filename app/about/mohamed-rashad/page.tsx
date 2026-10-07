import type { Metadata } from "next";
import { createMetadata } from "../../lib/seo";
import { AboutPageContent } from "../page";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Mohamed Rashad | Marketing & Brand Growth Strategist | Dewank",
    description:
      "Mohamed Rashad is a Marketing & Brand Growth Strategist with 14+ years of experience across brand strategy, digital growth, customer acquisition and CRM in GCC markets.",
    path: "/about/mohamed-rashad",
    keywords: [
      "Mohamed Rashad",
      "Marketing Strategist",
      "Brand Growth Strategist",
      "Digital Growth GCC",
      "Brand Strategy Saudi Arabia",
    ],
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function MohamedRashadAboutPage() {
  return <AboutPageContent startAtMohamed />;
}
