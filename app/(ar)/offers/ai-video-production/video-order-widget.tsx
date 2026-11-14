"use client";

import { useState } from "react";
import type { OfferPriceKey } from "../offer-pricing";
import { getVideoOfferPrice, setVideoOfferCountry, useVideoOfferCountry } from "./video-localized-price";
import { videoPackages, type VideoPackageId } from "./video-offer-content";

type Locale = "ar" | "en";

const labels = {
  ar: {
    mostRequested: "باقة الانطلاقة",
    countryTitle: "الأسعار حسب الدولة",
    countryNote: "السعر الافتراضي بالريال السعودي، ويتم تحديد الدولة تلقائيًا إذا توفرت البيانات. يمكنك تغييرها يدويًا.",
    countrySelect: "اختر السوق",
    startingAt: "يبدأ من",
    quantity: "فيديو",
    seconds: "ثانية لكل فيديو",
    choose: "اختر هذه الباقة",
    selected: "الباقة المختارة",
    quote: "يُؤكَّد السعر والنطاق بعد مراجعة الطلب.",
    formTitle: "خلّنا نجهّز طلبك",
    formSubtitle: "اختر الباقة وشاركنا نشاطك وهدفك. سنستقبل التفاصيل على واتساب قبل الاتفاق على الإنتاج.",
    activity: "نشاطك التجاري",
    activityPlaceholder: "مثال: متجر عطور أو عيادة تجميل",
    goal: "هدف الفيديوهات",
    assets: "الخامات المتوفرة",
    reference: "رابط مرجعي أو ملاحظات (اختياري)",
    referencePlaceholder: "ضع رابط فيديو يعجبك أو صف الأسلوب المطلوب",
    send: "أرسل تفاصيل الطلب على واتساب",
    complete: "اكتب نشاطك أولًا لتجهيز الطلب",
    footnote: "لا يتم الدفع عبر الموقع. يبدأ التنفيذ بعد تأكيد النطاق والسعر والمدة. استخدام صور أو أصوات أشخاص حقيقيين يتطلب موافقتهم.",
    goals: [["ads", "إعلانات وجذب عملاء"], ["content", "محتوى ريلز للسوشيال ميديا"], ["product", "عرض منتج أو خدمة"]],
    assetsList: [["none", "لا أملك خامات، أحتاج إنتاجًا من الصفر"], ["clips", "لدي صور ومقاطع فيديو"], ["photos", "لدي صور فقط"]],
    waGreeting: "مرحبًا ديوانك، أود الاستفسار عن إنتاج فيديوهات قصيرة.",
    waPackage: "الباقة",
    waEstimate: "السعر المبدئي",
    waBusiness: "النشاط",
    waGoal: "الهدف",
    waAssets: "الخامات",
    waReference: "رابط مرجعي/ملاحظات",
    waClose: "يرجى مراجعة التفاصيل وتأكيد النطاق والتكلفة والمدة قبل البدء.",
  },
  en: {
    mostRequested: "Recommended starting point",
    countryTitle: "Location-based pricing",
    countryNote: "Saudi riyal is the default price. Country is detected when available, and you can change it here.",
    countrySelect: "Select country",
    startingAt: "From",
    quantity: "videos",
    seconds: "seconds per video",
    choose: "Select this package",
    selected: "Selected package",
    quote: "Final scope and price are confirmed after reviewing your brief.",
    formTitle: "Tell us about your video",
    formSubtitle: "Choose a package and share your business and goal. Your brief opens in WhatsApp for confirmation before production.",
    activity: "Your business",
    activityPlaceholder: "e.g. Skincare shop or dental clinic",
    goal: "What is your main goal?",
    assets: "What materials do you have?",
    reference: "Reference video or notes (optional)",
    referencePlaceholder: "Paste a reference URL or describe the style",
    send: "Send your brief on WhatsApp",
    complete: "Add your business to prepare the brief",
    footnote: "No payment is taken on this site. Production begins only after agreeing scope, price and timing. Using real people's voices or likenesses requires consent.",
    goals: [["ads", "Advertising and leads"], ["content", "Social reels content"], ["product", "Showcase a product or service"]],
    assetsList: [["none", "No footage; start from scratch"], ["clips", "Photos and video clips"], ["photos", "Product photos only"]],
    waGreeting: "Hello Dewank, I would like to discuss short-form video production.",
    waPackage: "Package",
    waEstimate: "Indicative starting price",
    waBusiness: "Business",
    waGoal: "Goal",
    waAssets: "Assets",
    waReference: "Reference/notes",
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

  const displayPrice = (key: OfferPriceKey) => getVideoOfferPrice(key, country, locale).formatted;

  const message = [
    t.waGreeting,
    t.waPackage + ": " + chosen[locale].title,
    t.waEstimate + ": " + displayPrice(chosen.priceKey),
    t.waBusiness + ": " + business.trim(),
    t.waGoal + ": " + labelFor(t.goals, goal),
    t.waAssets + ": " + labelFor(t.assetsList, assets),
    t.waReference + ": " + (reference.trim() || (ar ? "غير محدد" : "Not provided")),
    t.waClose,
  ].join("\n");
  const whatsapp = "https://wa.me/97339066649?text=" + encodeURIComponent(message);
  const ready = business.trim().length > 1;

  return (
    <>
      <div className="vop-country-select-wrap">
        <div><strong>{t.countryTitle}</strong><p>{t.countryNote}</p></div>
        <label htmlFor="vop-country-select">{t.countrySelect}
          <select id="vop-country-select" value={selectedCountry} onChange={(event) => setVideoOfferCountry(event.target.value)}>
            <option value="SA">{ar ? "السعودية · SAR" : "Saudi Arabia · SAR"}</option>
            <option value="AE">{ar ? "الإمارات · AED" : "United Arab Emirates · AED"}</option>
            <option value="BH">{ar ? "البحرين · BHD" : "Bahrain · BHD"}</option>
            <option value="KW">{ar ? "الكويت · KWD" : "Kuwait · KWD"}</option>
            <option value="QA">{ar ? "قطر · QAR" : "Qatar · QAR"}</option>
            <option value="OM">{ar ? "عُمان · OMR" : "Oman · OMR"}</option>
            <option value="US">{ar ? "دولي · USD" : "Other countries · USD"}</option>
          </select>
        </label>
      </div>
      <div className="vop-package-grid" aria-label={ar ? "باقات إنتاج الفيديو" : "Video production packages"}>
        {videoPackages.map((item) => {
          const active = item.id === selectedId;
          return (
            <article key={item.id} className={"vop-package" + (item.id === "ai" ? " vop-package-featured" : "") + (active ? " vop-package-selected" : "")}>
              <div className="vop-package-head">
                <span className="vop-package-index">{item.id === "edit" ? "01 / EDIT" : item.id === "ai" ? "02 / CREATE" : "03 / SELL"}</span>
                {item.id === "ai" && <span className="vop-recommend">{t.mostRequested}</span>}
              </div>
              <h3>{item[locale].title}</h3>
              <p>{item[locale].description}</p>
              <div className="vop-package-price"><small>{t.startingAt}</small><strong dir="auto">{displayPrice(item.priceKey)}</strong></div>
              <div className="vop-package-spec"><span>{item.count} {t.quantity}</span><span>{item.length} {t.seconds}</span></div>
              <ul>{item[locale].features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <p className="vop-package-note">{item[locale].note}</p>
              <button
                type="button"
                aria-pressed={active}
                className="vop-package-action"
                onClick={() => {
                  setSelectedId(item.id);
                  document.getElementById("video-brief")?.scrollIntoView({ behavior: "auto", block: "start" });
                }}
              >{t.choose}<span aria-hidden="true">{ar ? "↙" : "↘"}</span></button>
            </article>
          );
        })}
      </div>

      <div id="video-brief" className="vop-brief">
        <div className="vop-brief-intro">
          <span className="vop-eyebrow">PROJECT BRIEF / 04</span>
          <h2>{t.formTitle}</h2>
          <p>{t.formSubtitle}</p>
          <div className="vop-selected-summary" role="status">
            <span>{t.selected}</span>
            <strong>{chosen[locale].title}</strong>
            <b dir="auto">{displayPrice(chosen.priceKey)}</b>
            <small>{t.quote}</small>
          </div>
        </div>
        <div className="vop-brief-fields">
          <label htmlFor="vop-business">{t.activity}</label>
          <input id="vop-business" name="business" type="text" autoComplete="organization" required maxLength={100} placeholder={t.activityPlaceholder} value={business} onChange={(event) => setBusiness(event.target.value)} />
          <label htmlFor="vop-goal">{t.goal}</label>
          <select id="vop-goal" value={goal} onChange={(event) => setGoal(event.target.value)}>{t.goals.map(([value, name]) => <option key={value} value={value}>{name}</option>)}</select>
          <label htmlFor="vop-assets">{t.assets}</label>
          <select id="vop-assets" value={assets} onChange={(event) => setAssets(event.target.value)}>{t.assetsList.map(([value, name]) => <option key={value} value={value}>{name}</option>)}</select>
          <label htmlFor="vop-reference">{t.reference}</label>
          <textarea id="vop-reference" rows={3} maxLength={450} placeholder={t.referencePlaceholder} value={reference} onChange={(event) => setReference(event.target.value)} />
          {ready ? <a className="vop-send" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.send}<span aria-hidden="true">↗</span></a> : <span className="vop-send vop-send-disabled" aria-disabled="true">{t.complete}</span>}
          <small className="vop-form-note">{t.footnote}</small>
        </div>
      </div>
    </>
  );
}
