"use client";

import { useState } from "react";

const showcaseItems = [
  { label: "ترفيه", brand: "Nova Play", image: "/showcase/content/nova-play.webp" },
  { label: "مقهى", brand: "بُنّة", image: "/showcase/content/bunnah-coffee.webp" },
  { label: "سفر", brand: "رحلة", image: "/showcase/content/rihla-travel.webp" },
  { label: "مطعم", brand: "قرمشة", image: "/showcase/content/qarmasha-food.webp" },
  { label: "مخبوزات", brand: "Buno", image: "/showcase/content/buno-bakery.webp" },
  { label: "خدمات احترافية", brand: "Madar", image: "/showcase/content/madar-business.webp" },
  { label: "عناية ومنتجات", brand: "Calm Root", image: "/showcase/content/calm-root.webp" },
] as const;

export default function OfferVisualProof() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="shell offer-visual-proof" aria-labelledby="offer-visual-proof-title">
      <div className="offer-visual-proof-head">
        <span className="section-label">[ مستوى التنفيذ ]</span>
        <h2 id="offer-visual-proof-title">شوف مستوى المحتوى قبل ما تحجز.</h2>
        <p>نماذج توضيحية لاتجاهات بصرية مختلفة، لأن كل نشاط له شخصية مختلفة. الهدف أن تتخيّل مستوى الظهور الذي يمكن أن يصل إليه حسابك.</p>
      </div>

      <div className="offer-showcase-grid">
        {showcaseItems.map((item, index) => (
          <button
            type="button"
            className={`offer-showcase-card ${index === 0 ? "featured" : ""}`}
            key={`${item.brand}-${item.label}`}
            onClick={() => setActive(index)}
            aria-label={`تكبير نموذج ${item.label}`}
          >
            <img src={item.image} alt={`نموذج تصميم سوشيال ميديا لقطاع ${item.label}`} loading={index === 0 ? "eager" : "lazy"} />
            <span className="offer-showcase-meta"><b>{item.label}</b><small>{item.brand}</small></span>
            <i aria-hidden="true">↗</i>
          </button>
        ))}
      </div>

      <div className="offer-visual-proof-cta">
        <div><b>عايز حسابك يبقى النموذج الجاي؟</b><span>نبدأ من نشاطك، جمهورك، وطريقة ظهورك. مش من قالب جاهز.</span></div>
        <a className="button primary" href="https://wa.me/97339066649?text=%D8%B4%D9%87%D8%B1" target="_blank" rel="noreferrer">احجز العرض عبر واتساب</a>
      </div>

      {active !== null && (
        <div className="offer-showcase-lightbox" role="dialog" aria-modal="true" aria-label="معاينة نموذج التصميم" onClick={() => setActive(null)}>
          <button type="button" className="offer-showcase-close" onClick={() => setActive(null)} aria-label="إغلاق المعاينة">×</button>
          <div className="offer-showcase-lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <img src={showcaseItems[active].image} alt={`نموذج تصميم سوشيال ميديا لقطاع ${showcaseItems[active].label}`} />
            <div><b>{showcaseItems[active].label}</b><span>{showcaseItems[active].brand}</span></div>
          </div>
        </div>
      )}
    </section>
  );
}
