"use client";

import { useRef, useState } from "react";
import { novaImage } from "./showcase-data-hq/nova";
import { coffeeImage } from "./showcase-data-hq/coffee";
import { travelImage } from "./showcase-data/travel";
import { chickenImage } from "./showcase-data/chicken";
import { bakeryImage } from "./showcase-data/bakery";
import { madarImage } from "./showcase-data-hq/madar";
import { skincareImage } from "./showcase-data/skincare";

const showcaseItems = [
  {
    label: "ترفيه",
    brand: "Nova Play",
    image: novaImage,
    alt: "نموذج تصميم سوشيال ميديا احترافي لتطبيق ترفيهي بألوان زرقاء وإخراج بصري حديث",
  },
  {
    label: "مقهى",
    brand: "بُنّة",
    image: coffeeImage,
    alt: "نموذج تصميم محتوى إنستقرام لمقهى عربي يعرض القهوة والحلوى بأسلوب دافئ واحترافي",
  },
  {
    label: "سفر",
    brand: "رحلة",
    image: travelImage,
    alt: "نموذج تصميم سوشيال ميديا لعلامة سفر وسياحة مع واجهة حجز وتجربة بصرية مستوحاة من الطبيعة",
  },
  {
    label: "مطعم",
    brand: "قرمشة",
    image: chickenImage,
    alt: "نموذج إعلان سوشيال ميديا لمطعم دجاج مقرمش بتكوين إعلاني قوي ودعوة واضحة للطلب",
  },
  {
    label: "مخبوزات",
    brand: "Buno",
    image: bakeryImage,
    alt: "نموذج تصميم محتوى إنستقرام لمخبز وكروسان بهوية مرحة وتغليف وعرض منتج احترافي",
  },
  {
    label: "خدمات احترافية",
    brand: "Madar",
    image: madarImage,
    alt: "نموذج تصميم سوشيال ميديا لخدمات احترافية واستراتيجية أعمال موجهة للسوق الخليجي",
  },
  {
    label: "عناية ومنتجات",
    brand: "Calm Root",
    image: skincareImage,
    alt: "نموذج تصميم إعلان سوشيال ميديا لمنتجات عناية شخصية بهوية زرقاء نظيفة وعرض منتج احترافي",
  },
] as const;

export default function OfferVisualProof() {
  const [active, setActive] = useState(0);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  const goTo = (index: number) => {
    const next = (index + showcaseItems.length) % showcaseItems.length;
    setActive(next);
    slideRefs.current[next]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="shell offer-visual-proof" aria-labelledby="offer-visual-proof-title">
      <div className="offer-visual-proof-head">
        <span className="section-label">[ مستوى التنفيذ ]</span>
        <h2 id="offer-visual-proof-title">شوف مستوى المحتوى قبل ما تحجز.</h2>
      </div>

      <div className="offer-slider-shell" dir="rtl">
        <button className="offer-slider-arrow prev" type="button" onClick={() => goTo(active - 1)} aria-label="التصميم السابق">‹</button>
        <div className="offer-showcase-slider" aria-label="نماذج تصميم سوشيال ميديا" role="region">
          {showcaseItems.map((item, index) => (
            <figure
              className={`offer-showcase-slide ${index === active ? "active" : ""}`}
              key={`${item.brand}-${item.label}`}
              ref={(node) => { slideRefs.current[index] = node; }}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <div className="offer-showcase-image-wrap">
                <img
                  src={item.image}
                  alt={item.alt}
                  width="720"
                  height="900"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  itemProp="image"
                />
              </div>
              <figcaption>
                <b itemProp="name">{item.label}</b>
                <span>{item.brand}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <button className="offer-slider-arrow next" type="button" onClick={() => goTo(active + 1)} aria-label="التصميم التالي">›</button>
      </div>

      <div className="offer-slider-dots" role="tablist" aria-label="اختيار نموذج التصميم">
        {showcaseItems.map((item, index) => (
          <button
            key={item.brand}
            type="button"
            className={index === active ? "active" : ""}
            onClick={() => goTo(index)}
            aria-label={`عرض نموذج ${item.label}`}
            aria-selected={index === active}
            role="tab"
          >
            <span />
          </button>
        ))}
        <small>{String(active + 1).padStart(2, "0")} / {String(showcaseItems.length).padStart(2, "0")}</small>
      </div>

      <div className="offer-visual-proof-cta">
        <div><b>عايز حسابك يبقى النموذج الجاي؟</b><span>نبدأ من نشاطك، جمهورك، وطريقة ظهورك. مش من قالب جاهز.</span></div>
        <a className="button primary" href="https://wa.me/97339066649?text=%D8%B4%D9%87%D8%B1" target="_blank" rel="noreferrer">احجز العرض عبر واتساب</a>
      </div>
    </section>
  );
}
