"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ServiceCard = {
  key: string;
  label: string;
  title: string;
  text: string;
  href: string;
  tags: string[];
};

type PopularityResponse = {
  ranking?: Array<{ key: string; clicks: number }>;
  enoughData?: boolean;
};

const services: ServiceCard[] = [
  { key: "branding", label: "BRAND STRATEGY", title: "استراتيجية البراند والهوية", text: "وضوح في التموضع والرسالة والهوية حتى تصبح العلامة أسهل في الفهم والتذكّر والاختيار.", href: "/branding", tags: ["Strategy", "Identity"] },
  { key: "brand-naming", label: "BRAND NAMING", title: "تسمية العلامة", text: "أسماء مبنية على النشاط والجمهور والسوق مع فحص لغوي وثقافي وبحث مبدئي للتوفر.", href: "/services/brand-naming", tags: ["Naming", "Research"] },
  { key: "social-media-content", label: "SOCIAL MEDIA", title: "السوشيال ميديا وصناعة المحتوى", text: "استراتيجية وأفكار وتصميم وكابشنات وخطة نشر تجعل الحضور أكثر اتساقًا وقابلية للتحويل.", href: "/services/social-media-content", tags: ["Content", "Design"] },
  { key: "digital-marketing", label: "DIGITAL STRATEGY", title: "استراتيجية التسويق الرقمي", text: "ربط الرسالة والجمهور والقنوات والعرض والمتابعة في رحلة واحدة بدل أن تعمل كل قناة منفردة.", href: "/digital-marketing", tags: ["Journey", "Growth"] },
  { key: "paid-ads", label: "PAID ADS", title: "إعلانات Meta وGoogle", text: "حملات مدفوعة مرتبطة بالصفحة والتتبع والمتابعة لتقليل الهدر وتحسين جودة التحويل.", href: "/paid-ads", tags: ["Google Ads", "Meta Ads"] },
  { key: "website-design", label: "WEB & CRO", title: "تصميم المواقع وتحسين التحويل", text: "مواقع سريعة ومتجاوبة تجمع الرسالة وتجربة المستخدم وSEO لتقود الزائر نحو إجراء واضح.", href: "/website-design", tags: ["UX/UI", "CRO"] },
  { key: "landing-page", label: "LANDING PAGES", title: "صفحات الهبوط والمبيعات", text: "صفحات مخصصة للحملات تجمع النص والتصميم والتتبع وواتساب لتحويل الزيارة إلى استفسار.", href: "/offers/landing-page-package", tags: ["Landing Page", "Leads"] },
  { key: "seo-aeo", label: "SEO & AEO", title: "SEO وAEO", text: "تحسين تقني ومحتوى وهيكلة تساعد محركات البحث والإجابة على فهم خبرتك وإظهارها للجمهور المناسب.", href: "/seo-aeo", tags: ["SEO", "Schema"] },
  { key: "analytics", label: "ANALYTICS", title: "التحليلات وتتبع التحويلات", text: "ربط GA4 وGTM والتحويلات حتى تعرف من أين تأتي النتيجة وما الذي يستحق المزيد من الاستثمار.", href: "/contact", tags: ["GA4", "GTM"] },
  { key: "whatsapp-automation", label: "WHATSAPP & CRM", title: "أتمتة واتساب وCRM", text: "رد وتأهيل وحجز وتذكير ومتابعة في مسار منظم يقلل العمل اليدوي ويحافظ على سرعة الاستجابة.", href: "/whatsapp-automation", tags: ["WhatsApp", "CRM"] },
  { key: "ai-automation", label: "AI AUTOMATION", title: "أتمتة الذكاء الاصطناعي", text: "ربط التسويق والمبيعات وخدمة العملاء في Workflows تقلل التكرار وتسرّع القرار.", href: "/ai-automation", tags: ["AI Agents", "Workflows"] },
  { key: "ats-cv", label: "CAREER BRANDING", title: "ATS CV وCareer Branding", text: "سيرة ذاتية وLinkedIn أوضح للأفراد مع تحسين الإنجازات والكلمات المفتاحية للفرصة المستهدفة.", href: "/ats-cv", tags: ["ATS CV", "LinkedIn"] },
];

const serviceByKey = new Map(services.map((service) => [service.key, service]));
const fallbackKeys = ["paid-ads", "social-media-content", "whatsapp-automation"];

export default function HomeSelectedOffers() {
  const [rankedKeys, setRankedKeys] = useState<string[]>(fallbackKeys);
  const [isDataDriven, setIsDataDriven] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const load = () => {
      fetch("/api/service-popularity", { signal: controller.signal, cache: "force-cache" })
        .then((response) => response.ok ? response.json() as Promise<PopularityResponse> : null)
        .then((data) => {
          if (!data?.enoughData || !data.ranking?.length) return;
          const valid = data.ranking.map((row) => row.key).filter((key) => serviceByKey.has(key));
          const completed = [...valid, ...fallbackKeys.filter((key) => !valid.includes(key))].slice(0, 3);
          if (completed.length === 3) {
            setRankedKeys(completed);
            setIsDataDriven(true);
          }
        })
        .catch(() => {});
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(load, { timeout: 1200 });
      return () => { controller.abort(); window.cancelIdleCallback(idleId); };
    }

    const timer = window.setTimeout(load, 350);
    return () => { controller.abort(); window.clearTimeout(timer); };
  }, []);

  const resolved = useMemo(() => rankedKeys.map((key) => serviceByKey.get(key)).filter(Boolean) as ServiceCard[], [rankedKeys]);

  return (
    <>
      <div className="home-offer-grid" data-ranking-source={isDataDriven ? "30d-clicks" : "editorial-fallback"}>
        {resolved.map((service, index) => (
          <Link className={`home-offer-card${index === 0 ? " is-recommended" : ""}`} href={service.href} key={service.key}>
            <div className="home-offer-top">
              <small>{service.label}</small>
              <div className="home-offer-signals">{index === 0 && <b>{isDataDriven ? "الأكثر طلبًا" : "اختيار بارز"}</b>}<span>↗</span></div>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <div className="home-offer-bottom">
              <div className="home-service-tags" aria-label="مجالات الخدمة">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <b>اكتشف الخدمة</b>
            </div>
          </Link>
        ))}
      </div>
      <div className="home-selected-services-all"><Link href="/services">استعرض كل الخدمات <span>←</span></Link></div>
    </>
  );
}
