import type { Metadata } from "next";
import { createMetadata } from "../../../lib/seo";
import VideoOfferPage from "./video-offer-page";

export const metadata: Metadata = createMetadata({
  title: "إنتاج فيديوهات AI وريلز إعلانية في السعودية | باقات ديوانك",
  description: "إنتاج فيديوهات قصيرة بالذكاء الاصطناعي، مونتاج ريلز، وفيديوهات إعلانية للمتاجر والشركات بالسعودية والخليج. 3 باقات بأسعار معلنة، وطلب مباشر عبر واتساب.",
  path: "/offers/ai-video-production",
  keywords: [
    "إنتاج فيديوهات بالذكاء الاصطناعي",
    "تصميم فيديوهات AI",
    "مونتاج ريلز",
    "تصميم فيديوهات إعلانية",
    "إنتاج ريلز للشركات",
    "فيديوهات إعلانية قصيرة",
    "إعلانات فيديو للسوشيال ميديا",
    "أسعار مونتاج فيديو السعودية",
    "AI video production Saudi Arabia",
  ],
});

export default function Page() {
  return <VideoOfferPage locale="ar" />;
}
