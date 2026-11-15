"use client";

import { useState } from "react";
import type { OfferPriceKey } from "../offer-pricing";
import { getVideoOfferPrice, setVideoOfferCountry, useVideoOfferCountry } from "./video-localized-price";
import { videoPackages, type VideoPackageId } from "./video-offer-content";
import { pushVideoEvent } from "./video-events";

type Locale = "ar" | "en";

const labels = {
  ar: {
    recommended: "الأكثر مرونة",
    country: "السوق والعملة",
    startingAt: "يبدأ من",
    quantity: "فيديوهات",
    seconds: "ثانية للفيديو",
    choose: "اختر هذه الباقة",
    chosen: "الباقة المختارة",
    grid: "باقات إنتاج الفيديو",
    briefEyebrow: "طلبك في دقيقة",
    formTitle: "أرسل طلبك على واتساب",
    formSubtitle: "اختر الباقة واكتب نشاطك. تصلنا التفاصيل على واتساب، ونرد بتأكيد النطاق والسعر والمدة قبل أي دفع.",
    selected: "الباقة المختارة",
    quote: "سعر بداية، ويُؤكَّد بعد مراجعة الطلب.",
    packageField: "الباقة",
    activity: "نشاطك التجاري",
    activityPlaceholder: "مثال: متجر عطور أو عيادة تجميل",
    goal: "هدف الفيديوهات",
    assets: "الخامات المتوفرة",
    reference: "رابط مرجعي أو ملاحظات (اختياري)",
    referencePlaceholder: "ضع رابط فيديو يعجبك أو صف الأسلوب المطلوب",
    send: "أرسل الطلب على واتساب",
    footnote: "لا يتم الدفع عبر الموقع. استخدام صور أو أصوات أشخاص حقيقيين يتطلب موافقتهم.",
    goals: [["ads", "إعلانات وجذب عملاء"], ["content", "محتوى ريلز للسوشيال ميديا"], ["product", "عرض منتج أو خدمة"]],
    assetsList: [["none", "لا أملك خامات، أحتاج إنتاجًا من الصفر"], ["clips", "لدي صور ومقاطع فيديو"], ["photos", "لدي صور فقط"]],
    waGreeting: "مرحبًا ديوانك، أود طلب إنتاج فيديوهات قصيرة.",
    waPackage: "الباقة",
    waEstimate: "السعر المبدئي",
    waBusiness: "النشاط",
    waGoal: "الهدف",
    waAssets: "الخامات",
    waReference: "رابط مرجعي/ملاحظات",
    waEmpty: "غير محدد",
    waClose: "يرجى تأكيد النطاق والتكلفة والمدة قبل البدء.",
  },
  en: {
    recommended: "Most flexible",
    country: "Market and currency",
    startingAt: "From",
    quantity: "videos",
    seconds: "seconds each",
    choose: "Choose this package",
    chosen: "Selected package",
    grid: "Video production packages",
    briefEyebrow: "Your brief in a minute",
    formTitle: "Send your brief on WhatsApp",
    formSubtitle: "Pick a package and name your business. The details reach us on WhatsApp, and we reply with the scope, price and timing before any payment.",
    selected: "Selected package",
    quote: "A starting price, confirmed after we review your brief.",
    packageField: "Package",
    activity: "Your business",
    activityPlaceholder: "e.g. Skincare shop or dental clinic",
    goal: "Main goal",
    assets: "What materials do you have?",
    reference: "Reference video or notes (optional)",
    referencePlaceholder: "Paste a reference URL or describe the style",
    send: "Send the brief on WhatsApp",
    footnote: "No payment is taken on this site. Using real people's voices or likenesses requires their consent.",
    goals: [["ads", "Advertising and leads"], ["content", "Social reels content"], ["product", "Showcase a product or service"]],
    assetsList: [["none", "No footage; start from scratch"], ["clips", "Photos and video clips"], ["photos", "Product photos only"]],
    waGreeting: "Hello Dewank, I would like to order short-form video production.",
    waPackage: "Package",
    waEstimate: "Indicative starting price",
    waBusiness: "Business",
    waGoal: "Goal",
    waAssets: "Assets",
    waReference: "Reference/notes",
    waEmpty: "Not provided",
    waClose: "Please confirm the scope, final price and delivery time before production.",
  },
} as const;

function labelFor(list: readonly (readonly [string, string])[], id: string) {
  return list.find((entry) => entry[0] === id)?.[1] ?? id;
}

export default function VideoOrderWidget({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const t = labels[locale];
  const [selectedId, setSelectedId] = useState<VideoPackageId>("ai");
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("ads");
  const [assets, setAssets] = useState("none");
  const [reference, setReference] = useState("");
  const country = useVideoOfferCountry();
  const selectedCountry = country && ["SA", "AE", "BH", "KW", "QA", "OM"].includes(country) ? country : country ? "US" : "SA";
  const chosen = videoPackages.find((item) => item.id === selectedId) ?? videoPackages[1];

  const price = (key: OfferPriceKey) => getVideoOfferPrice(key, country, locale);

  const select = (id: VideoPackageId, source: "card" | "brief") => {
    setSelectedId(id);
    const item = videoPackages.find((entry) => entry.id === id);
    if (item) {
      const shown = price(item.priceKey);
      pushVideoEvent("video_package_select", { package_id: id, package_price: shown.amount, package_currency: shown.currency, select_source: source, page_locale: locale });
    }
  };

  const message = [
    t.waGreeting,
    t.waPackage + ": " + chosen[locale].title,
    t.waEstimate + ": " + price(chosen.priceKey).formatted,
    t.waBusiness + ": " + (business.trim() || t.waEmpty),
    t.waGoal + ": " + labelFor(t.goals, goal),
    t.waAssets + ": " + labelFor(t.assetsList, assets),
    t.waReference + ": " + (reference.trim() || t.waEmpty),
    t.waClose,
  ].join("\n");
  const whatsapp = "https://wa.me/97339066649?text=" + encodeURIComponent(message);

  return (
    <>
      <div className="vs-market">
        <label htmlFor="vs-country">{t.country}</label>
        <select id="vs-country" value={selectedCountry} onChange={(event) => setVideoOfferCountry(event.target.value)}>
          <option value="SA">{ar ? "السعودية · ريال" : "Saudi Arabia · SAR"}</option>
          <option value="AE">{ar ? "الإمارات · درهم" : "United Arab Emirates · AED"}</option>
          <option value="BH">{ar ? "البحرين · دينار" : "Bahrain · BHD"}</option>
          <option value="KW">{ar ? "الكويت · دينار" : "Kuwait · KWD"}</option>
          <option value="QA">{ar ? "قطر · ريال" : "Qatar · QAR"}</option>
          <option value="OM">{ar ? "عُمان · ريال" : "Oman · OMR"}</option>
          <option value="US">{ar ? "دولي · دولار" : "Other countries · USD"}</option>
        </select>
      </div>

      <div className="vs-packages" role="group" aria-label={t.grid}>
        {videoPackages.map((item, index) => {
          const active = item.id === selectedId;
          const shown = price(item.priceKey);
          return (
            <article key={item.id} className={"vs-package" + (active ? " is-selected" : "")}>
              <div className="vs-package-demo">
                <img src={item.demo} width={464} height={720} alt="" loading="lazy" decoding="async" />
                <span className="vs-package-step" dir="ltr">{item.step}</span>
              </div>
              <div className="vs-package-body">
                <p className="vs-package-fit">{item[locale].fit}{item.id === "ai" && <span>{t.recommended}</span>}</p>
                <h3>{item[locale].title}</h3>
                <p className="vs-package-desc">{item[locale].description}</p>
                <div className="vs-package-price">
                  <small>{t.startingAt}</small>
                  <strong>{shown.digits}</strong>
                  <span>{shown.currencyLabel}</span>
                </div>
                <p className="vs-package-spec">{item.count} {t.quantity} · {item.length} {t.seconds}</p>
                <ul>{item[locale].features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <p className="vs-package-note">{item[locale].note}</p>
                <button
                  type="button"
                  aria-pressed={active}
                  className="vs-package-action"
                  onClick={() => {
                    select(item.id, "card");
                    document.getElementById("video-brief")?.scrollIntoView({ behavior: "auto", block: "start" });
                  }}
                >{active ? t.chosen : t.choose}<span aria-hidden="true">{ar ? "←" : "→"}</span></button>
              </div>
            </article>
          );
        })}
      </div>

      <div id="video-brief" className="vs-brief">
        <div className="vs-brief-intro">
          <span className="vs-eyebrow">{t.briefEyebrow}</span>
          <h2>{t.formTitle}</h2>
          <p>{t.formSubtitle}</p>
          <div className="vs-brief-summary" role="status">
            <span>{t.selected}</span>
            <strong>{chosen[locale].title}</strong>
            <b>{price(chosen.priceKey).formatted}</b>
            <small>{t.quote}</small>
          </div>
        </div>
        <div className="vs-brief-fields">
          <label htmlFor="vs-package-select">{t.packageField}</label>
          <select id="vs-package-select" value={selectedId} onChange={(event) => select(event.target.value as VideoPackageId, "brief")}>
            {videoPackages.map((item) => <option key={item.id} value={item.id}>{item[locale].title}</option>)}
          </select>
          <label htmlFor="vs-business">{t.activity}</label>
          <input id="vs-business" name="business" type="text" autoComplete="organization" maxLength={100} placeholder={t.activityPlaceholder} value={business} onChange={(event) => setBusiness(event.target.value)} />
          <div className="vs-brief-pair">
            <div><label htmlFor="vs-goal">{t.goal}</label>
              <select id="vs-goal" value={goal} onChange={(event) => setGoal(event.target.value)}>{t.goals.map(([value, name]) => <option key={value} value={value}>{name}</option>)}</select></div>
            <div><label htmlFor="vs-assets">{t.assets}</label>
              <select id="vs-assets" value={assets} onChange={(event) => setAssets(event.target.value)}>{t.assetsList.map(([value, name]) => <option key={value} value={value}>{name}</option>)}</select></div>
          </div>
          <label htmlFor="vs-reference">{t.reference}</label>
          <textarea id="vs-reference" rows={2} maxLength={450} placeholder={t.referencePlaceholder} value={reference} onChange={(event) => setReference(event.target.value)} />
          <a className="vs-send" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.send}<span aria-hidden="true">↗</span></a>
          <small className="vs-brief-note">{t.footnote}</small>
        </div>
      </div>
    </>
  );
}
