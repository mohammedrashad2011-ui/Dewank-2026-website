"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const showcaseItems = [
  {
    label: "ترفيه",
    brand: "Nova Play",
    image: "/showcase/content/nova-play.png",
    alt: "تصميم سوشيال ميديا احترافي لتطبيق ترفيهي بألوان زرقاء وإخراج بصري حديث من ديوانك",
  },
  {
    label: "مقهى",
    brand: "بُنّة",
    image: "/showcase/content/bunnah.png",
    alt: "تصميم محتوى إنستقرام لمقهى عربي يعرض القهوة والحلوى بأسلوب دافئ واحترافي من ديوانك",
  },
  {
    label: "سفر",
    brand: "رحلة",
    image: "/showcase/content/rihla.png",
    alt: "تصميم سوشيال ميديا للسفر والسياحة مع واجهة حجز وتجربة بصرية مستوحاة من الطبيعة",
  },
  {
    label: "مطعم",
    brand: "قرمشة",
    image: "/showcase/content/qrmsha.png",
    alt: "تصميم إعلان سوشيال ميديا لمطعم دجاج مقرمش بتكوين إعلاني قوي ودعوة واضحة للطلب",
  },
  {
    label: "مخبوزات",
    brand: "Buno",
    image: "/showcase/content/buno.png",
    alt: "تصميم محتوى إنستقرام لمخبز وكروسان بهوية مرحة وتغليف وعرض منتج احترافي",
  },
  {
    label: "خدمات احترافية",
    brand: "Madar",
    image: "/showcase/content/madar.png",
    alt: "تصميم سوشيال ميديا لخدمات احترافية واستراتيجية أعمال موجهة للسوق الخليجي",
  },
  {
    label: "عناية ومنتجات",
    brand: "Calm Root",
    image: "/showcase/content/calm-root.png",
    alt: "تصميم إعلان سوشيال ميديا لمنتجات عناية شخصية بهوية زرقاء نظيفة وعرض منتج احترافي",
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
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1122}
                  height={1402}
                  quality={100}
                  sizes="(max-width: 520px) 82vw, (max-width: 820px) 400px, 420px"
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
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
