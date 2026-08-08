"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const showcaseItems = [
  { label: "ترفيه", brand: "Nova Play", image: "/showcase/content/nova-play.webp", alt: "تصميم سوشيال ميديا احترافي لتطبيق ترفيهي بألوان زرقاء وإخراج بصري حديث من ديوانك" },
  { label: "مقهى", brand: "بُنّة", image: "/showcase/content/bunnah.webp", alt: "تصميم محتوى إنستقرام لمقهى عربي يعرض القهوة والحلوى بأسلوب دافئ واحترافي من ديوانك" },
  { label: "سفر", brand: "رحلة", image: "/showcase/content/rihla.webp", alt: "تصميم سوشيال ميديا للسفر والسياحة مع واجهة حجز وتجربة بصرية مستوحاة من الطبيعة" },
  { label: "مطعم", brand: "قرمشة", image: "/showcase/content/qrmsha.webp", alt: "تصميم إعلان سوشيال ميديا لمطعم دجاج مقرمش بتكوين إعلاني قوي ودعوة واضحة للطلب" },
  { label: "مخبوزات", brand: "Buno", image: "/showcase/content/buno.webp", alt: "تصميم محتوى إنستقرام لمخبز وكروسان بهوية مرحة وتغليف وعرض منتج احترافي" },
  { label: "خدمات احترافية", brand: "Madar", image: "/showcase/content/madar.webp", alt: "تصميم سوشيال ميديا لخدمات احترافية واستراتيجية أعمال موجهة للسوق الخليجي" },
  { label: "عناية ومنتجات", brand: "Calm Root", image: "/showcase/content/calm-root.webp", alt: "تصميم إعلان سوشيال ميديا لمنتجات عناية شخصية بهوية زرقاء نظيفة وعرض منتج احترافي" },
] as const;

export default function OfferVisualProof() {
  const [active, setActive] = useState(0);
  const [sectionReady, setSectionReady] = useState(false);
  const [requested, setRequested] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionReady(true);
          setRequested(new Set([0]));
          observer.disconnect();
        }
      },
      { rootMargin: "260px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionReady) return;

    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          const visibleIndex = Number((visible[0].target as HTMLElement).dataset.slideIndex);
          if (Number.isInteger(visibleIndex)) setActive(visibleIndex);
        }

        setRequested((current) => {
          const updated = new Set(current);
          let changed = false;

          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const index = Number((entry.target as HTMLElement).dataset.slideIndex);
            if (!Number.isInteger(index) || updated.has(index)) return;
            updated.add(index);
            changed = true;
          });

          return changed ? updated : current;
        });
      },
      {
        root: slider,
        rootMargin: "0px 120px",
        threshold: [0.01, 0.55],
      },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [sectionReady]);

  const goTo = (index: number) => {
    const next = (index + showcaseItems.length) % showcaseItems.length;
    setRequested((current) => {
      const updated = new Set(current);
      updated.add(next);
      return updated;
    });
    setActive(next);
    requestAnimationFrame(() => {
      slideRefs.current[next]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  };

  return (
    <section ref={sectionRef} className="shell offer-visual-proof" aria-labelledby="offer-visual-proof-title">
      <div className="offer-visual-proof-head">
        <span className="section-label">[ مستوى التنفيذ ]</span>
        <h2 id="offer-visual-proof-title">شوف مستوى المحتوى قبل ما تحجز.</h2>
      </div>

      <div className="offer-slider-shell" dir="rtl">
        <button className="offer-slider-arrow prev" type="button" onClick={() => goTo(active - 1)} aria-label="التصميم السابق">‹</button>
        <div ref={sliderRef} className="offer-showcase-slider" aria-label="نماذج تصميم سوشيال ميديا" role="region">
          {showcaseItems.map((item, index) => {
            const shouldLoad = sectionReady && requested.has(index);
            return (
              <figure
                className={`offer-showcase-slide ${index === active ? "active" : ""}`}
                key={`${item.brand}-${item.label}`}
                ref={(node) => { slideRefs.current[index] = node; }}
                data-slide-index={index}
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <div className="offer-showcase-image-wrap">
                  {shouldLoad ? (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1122}
                      height={1402}
                      quality={85}
                      sizes="(max-width: 520px) 78vw, (max-width: 820px) 360px, 400px"
                      loading="lazy"
                      fetchPriority="low"
                      itemProp="image"
                    />
                  ) : (
                    <div className="offer-showcase-image-placeholder" aria-hidden="true" />
                  )}
                </div>
                <figcaption>
                  <b itemProp="name">{item.label}</b>
                  <span>{item.brand}</span>
                </figcaption>
              </figure>
            );
          })}
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
