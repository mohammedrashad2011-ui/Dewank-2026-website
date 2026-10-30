"use client";

import { useEffect, useMemo, useState } from "react";

export type OfferChoice = { id: string; title: string; filter: string };
type Locale = "ar" | "en";

const categories = {
  ar: { all: "كل العروض", content: "المحتوى وإنستجرام", ads: "الإعلانات", web: "المواقع وSEO", conversion: "تحسين التحويل", brand: "الهوية والبراند", automation: "الأتمتة" },
  en: { all: "All offers", content: "Content and Instagram", ads: "Advertising", web: "Websites and SEO", conversion: "Conversion optimisation", brand: "Brand and identity", automation: "Automation" },
};

export default function OffersDecisionPanel({ locale, offers }: { locale: Locale; offers: OfferChoice[] }) {
  const [filter, setFilter] = useState("all");
  const [chosen, setChosen] = useState("");
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const ar = locale === "ar";

  useEffect(() => {
    const shell = document.getElementById("offers-explore");
    if (!shell) return;
    const sync = () => {
      const checked = shell.querySelector<HTMLInputElement>('input[name="offers-filter"]:checked');
      setFilter(checked?.id.replace("offers-", "") ?? "all");
    };
    sync();
    shell.addEventListener("change", sync);
    return () => shell.removeEventListener("change", sync);
  }, []);

  const visible = useMemo(() => offers.filter((offer) => filter === "all" || offer.filter.split(" ").includes(filter)), [offers, filter]);
  const selectedOffer = visible.find((offer) => offer.id === chosen);
  const category = categories[locale][filter as keyof typeof categories.ar] ?? categories[locale].all;
  const ready = business.trim().length > 0 && goal.trim().length > 0;
  const message = ar
    ? `مرحبًا ديوانك، أريد مناقشة عرض مناسب. النشاط: ${business.trim()}. الهدف: ${goal.trim()}. مجال الاهتمام: ${category}.${selectedOffer ? ` العرض الذي أريد مناقشته: ${selectedOffer.title}.` : " أحتاج ترشيح العرض الأنسب."}`
    : `Hello Dewank, I would like to discuss an offer. Business: ${business.trim()}. Goal: ${goal.trim()}. Area of interest: ${category}.${selectedOffer ? ` Offer I am considering: ${selectedOffer.title}.` : " Please recommend the best starting offer."}`;

  return (
    <div className="offers-decision-panel shell" dir={ar ? "rtl" : "ltr"}>
      <div className="offers-decision-heading">
        <div><h2>{ar ? "تحتاج مساعدة في الاختيار؟" : "Need help choosing?"}</h2><p>{ar ? "اكتب نشاطك وهدفك، واختر عرضًا إن رغبت. يمكنك مراجعة التفاصيل والأسعار أدناه." : "Share your business and goal, and optionally pick an offer. Review details and prices below."}</p></div>
      </div>
      <div className="offers-decision-flow">
        <div className="offers-decision-stage" key={filter}><small>{ar ? "المجال المختار" : "Selected area"}</small><strong aria-live="polite">{category}</strong><span aria-live="polite">{ar ? `${visible.length} عروض متاحة في هذا التصنيف` : `${visible.length} offers in this category`}</span></div>
        <div className="offers-decision-stage"><label htmlFor="offer-decision-select">{ar ? "العرض الذي يهمك" : "Offer you are considering"}</label><select id="offer-decision-select" value={selectedOffer?.id ?? ""} onChange={(event) => setChosen(event.target.value)}><option value="">{ar ? "أحتاج ترشيحًا" : "Help me choose"}</option>{visible.map((offer) => <option key={offer.id} value={offer.id}>{offer.title}</option>)}</select></div>
        <div className="offers-decision-stage offers-decision-fields"><label htmlFor="offer-business">{ar ? "نشاطك" : "Your business"}</label><input id="offer-business" type="text" maxLength={100} value={business} onChange={(event) => setBusiness(event.target.value)} placeholder={ar ? "مثال: متجر عطور" : "e.g. fragrance shop"} /><label htmlFor="offer-goal">{ar ? "النتيجة المطلوبة" : "Result you need"}</label><input id="offer-goal" type="text" maxLength={160} value={goal} onChange={(event) => setGoal(event.target.value)} placeholder={ar ? "مثال: زيادة الاستفسارات" : "e.g. more enquiries"} /></div>
      </div>
      <div className="offers-decision-footer"><p>{ar ? "اكتب النشاط والهدف لتجهيز رسالة واتساب محددة." : "Add your business and goal to prepare a focused WhatsApp message."}</p>{ready ? <a className="offers-decision-cta" href={`https://wa.me/97339066649?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">{ar ? "ناقش اختياري على واتساب" : "Discuss my choice on WhatsApp"} <span aria-hidden="true">↗</span></a> : <span className="offers-decision-cta offers-decision-disabled" aria-disabled="true">{ar ? "أكمل النشاط والهدف" : "Add business and goal"}</span>}</div>
    </div>
  );
}
