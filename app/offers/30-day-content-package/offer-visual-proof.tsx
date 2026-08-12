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

const feedbackThemes = [
  {
    title: "محتوى أقرب للنشاط",
    text: "من أكثر الملاحظات التي تتكرر: المحتوى ما يكون عامًا، بل يعكس طبيعة النشاط وطريقة ظهوره.",
  },
  {
    title: "خطة أوضح للشهر",
    text: "بدل سؤال: وش ننشر؟ يكون عندك اتجاه واضح ومحتوى مرتب يغطي الشهر بشكل عملي.",
  },
  {
    title: "تواصل منظم",
    text: "وضوح المطلوب، مراحل التنفيذ، وما الذي ستستلمه قبل بدء العمل يقلل التردد ويوفر الوقت.",
  },
  {
    title: "فهم للجمهور قبل التصميم",
    text: "القيمة مو في الشكل وحده؛ الأهم أن يكون وراء كل قطعة فكرة تخاطب الجمهور المناسب.",
  },
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
        <span className="section-label">مستوى التنفيذ</span>
        <h2 id="offer-visual-proof-title">شاهد مستوى المحتوى<br/>قبل ما تقرر.</h2>
        <p className="offer-proof-intro">نماذج من قطاعات مختلفة توضح مستوى التصميم وتنوع الأسلوب حسب طبيعة النشاط.</p>
        <div className="offer-proof-signals" aria-label="مؤشرات الثقة في التنفيذ">
          <span><b>7</b><small>نماذج</small></span>
          <span><b>7</b><small>قطاعات</small></span>
          <span><b>مخصص</b><small>حسب نشاطك</small></span>
        </div>
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
        <div>
          <b>تبي حسابك يكون النموذج الجاي؟</b>
          <span>نبدأ من نشاطك وجمهورك وطريقة ظهورك، مو من قالب جاهز.</span>
        </div>
        <a className="button primary" href="https://wa.me/97339066649?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D8%AF%D9%8A%D9%88%D8%A7%D9%86%D9%83%D8%8C%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%A8%D8%A7%D9%82%D8%A9%20%D9%85%D8%AD%D8%AA%D9%88%D9%89%2030%20%D9%8A%D9%88%D9%85%20%D9%88%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D8%A3%D9%83%D8%AF%20%D9%87%D9%84%20%D9%87%D9%8A%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%D8%A9%20%D9%84%D9%86%D8%B4%D8%A7%D8%B7%D9%8A." target="_blank" rel="noreferrer">تأكد أن الباقة مناسبة لنشاطك</a>
      </div>

      <div className="offer-feedback" aria-labelledby="offer-feedback-title">
        <div className="offer-feedback-head">
          <span className="section-label">تجربة العملاء</span>
          <h2 id="offer-feedback-title">أشياء تتكرر في تقييمات عملائنا.</h2>
          <p>بدل عرض أسماء أو تقييمات غير موثقة، جمعنا أكثر الملاحظات التي تتكرر في التجربة نفسها.</p>
        </div>

        <div className="offer-feedback-grid">
          {feedbackThemes.map((item) => (
            <article key={item.title}>
              <div className="offer-feedback-stars" aria-hidden="true">★★★★★</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="offer-feedback-sectors" aria-label="نماذج من القطاعات التي نخدمها">
          <span>متاجر إلكترونية</span>
          <span>علامات ناشئة</span>
          <span>خدمات أعمال</span>
          <span>عيادات</span>
          <span>مقاولات</span>
        </div>
      </div>
    </section>
  );
}
