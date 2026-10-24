"use client";

import Link from "next/link";
import { useState } from "react";

type Locale = "ar" | "en";

const paths = {
  ar: [
    { problem: "العلامة غير واضحة", service: "استراتيجية البراند والهوية", reason: "وضّح الوعد والجمهور والتميّز قبل الاستثمار في قنوات جديدة.", href: "/branding", offer: "/offers/brand-naming", offerLabel: "عرض التسمية" },
    { problem: "أحتاج عملاء أكثر", service: "الإعلانات واكتساب العملاء", reason: "اربط الإعلان بالصفحة والتتبع والمتابعة حتى تعرف أين يبدأ الطلب.", href: "/paid-ads", offer: "/offers/google-ads-launch", offerLabel: "عرض إطلاق Google Ads" },
    { problem: "الزيارات لا تتحول", service: "الموقع وتحسين التحويل", reason: "راجع الرسالة والثقة والخطوة التالية في رحلة الزائر قبل زيادة الزيارات.", href: "/website-design", offer: "/conversion-rate-optimization#pricing", offerLabel: "باقات تدقيق التحويل" },
    { problem: "الحضور غير منتظم", service: "المحتوى والسوشيال", reason: "ابدأ بخطة محتوى واضحة تربط الظهور بما يحتاجه العميل ليقرر.", href: "/services/social-media-content", offer: "/offers/30-day-content-package", offerLabel: "باقة محتوى شهر" },
    { problem: "المتابعة بطيئة أو تضيع", service: "واتساب وCRM والأتمتة", reason: "نظّم الرد والتأهيل والتسليم للفريق حتى لا تنقطع المحادثة.", href: "/whatsapp-automation", offer: "/offers/whatsapp-automation-starter", offerLabel: "عرض واتساب التأسيسي" },
  ],
  en: [
    { problem: "The brand is unclear", service: "Brand strategy and identity", reason: "Clarify the promise, audience and difference before investing in more channels.", href: "/en/services#brand-strategy", offer: "/en/offers/brand-naming", offerLabel: "Naming offer" },
    { problem: "I need more customers", service: "Paid advertising", reason: "Connect the campaign to the page, tracking and follow-up so demand is measurable.", href: "/en/paid-advertising", offer: "/en/offers/google-ads-launch", offerLabel: "Google Ads launch offer" },
    { problem: "Visits do not convert", service: "Website and conversion", reason: "Review the message, trust and next step before paying for more traffic.", href: "/en/website-design", offer: "/en/conversion-rate-optimization#pricing", offerLabel: "Conversion audit packages" },
    { problem: "Our presence is inconsistent", service: "Content and social media", reason: "Build a content plan that connects visibility to the information buyers need.", href: "/en/services/social-media-content", offer: "/en/offers/30-day-content-package", offerLabel: "30-day content offer" },
    { problem: "Follow-up is slow or lost", service: "WhatsApp, CRM and automation", reason: "Organise replies, qualification and handover so conversations keep moving.", href: "/en/whatsapp-crm-automation", offer: "/en/offers/whatsapp-automation-starter", offerLabel: "WhatsApp starter offer" },
  ],
};

export default function ServicePathSelector({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState(0);
  const item = paths[locale][selected];
  const ar = locale === "ar";
  const message = ar
    ? `مرحبًا ديوانك، أحتاج مساعدتكم في تحديد الخدمة المناسبة. المشكلة: ${item.problem}. الخدمة المقترحة التي أريد مناقشتها: ${item.service}. نشاطي هو: `
    : `Hello Dewank, I would like to discuss the right service. My problem: ${item.problem}. Suggested service: ${item.service}. My business is: `;

  return (
    <div className="service-path-selector" dir={ar ? "rtl" : "ltr"}>
      <div className="service-path-intro">
        <small>{ar ? "اختر نقطة التعطّل" : "Choose the bottleneck"}</small>
        <p>{ar ? "اختيارك يغيّر المسار المقترح. هذا توجيه أولي، وليس تشخيصًا نهائيًا." : "Your choice updates the suggested route. This is a starting point, not a final diagnosis."}</p>
      </div>
      <div className="service-path-options" role="group" aria-label={ar ? "المشكلة الحالية" : "Current problem"}>
        {paths[locale].map((path, index) => (
          <button type="button" key={path.problem} aria-pressed={selected === index} onClick={() => setSelected(index)}>{path.problem}</button>
        ))}
      </div>
      <div className="service-path-result" key={item.problem} aria-live="polite">
        <div className="service-path-step"><span>01</span><small>{ar ? "المشكلة" : "Problem"}</small><strong>{item.problem}</strong></div>
        <div className="service-path-step"><span>02</span><small>{ar ? "المسار" : "Service route"}</small><strong>{item.service}</strong></div>
        <div className="service-path-step"><span>03</span><small>{ar ? "لماذا نبدأ هنا" : "Why start here"}</small><p>{item.reason}</p></div>
      </div>
      <div className="service-path-actions">
        <Link href={item.href}>{ar ? "اكتشف الخدمة" : "Explore the service"} <span aria-hidden="true">↗</span></Link>
        <Link href={item.offer}>{item.offerLabel} <span aria-hidden="true">↗</span></Link>
        <a href={`https://wa.me/97339066649?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">{ar ? "ناقش احتياجك على واتساب" : "Discuss your need on WhatsApp"} <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  );
}
