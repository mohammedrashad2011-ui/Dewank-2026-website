"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Example designs from the shared content library. Labels and alt text are English; brand names are kept as the
// project names. Transliterations for the Arabic-named projects are marked in the summary for client confirmation.
const showcaseItems = [
  { label: "Entertainment", brand: "Nova Play", image: "/showcase/content/nova-play.webp", alt: "Social media design for an entertainment app, in blue with a modern visual style" },
  { label: "Café", brand: "Bunnah", image: "/showcase/content/bunnah.webp", alt: "Instagram content for an Arabic café, showing coffee and desserts in a warm, professional style" },
  { label: "Travel", brand: "Rihla", image: "/showcase/content/rihla.webp", alt: "Social media design for travel and tourism, with a booking interface and a visual style inspired by nature" },
  { label: "Restaurant", brand: "Qarmasha", image: "/showcase/content/qrmsha.webp", alt: "Social media advert for a crispy chicken restaurant, with a strong composition and a clear call to order" },
  { label: "Bakery", brand: "Buno", image: "/showcase/content/buno.webp", alt: "Instagram content for a bakery and croissants, with a playful identity and a professional product display" },
  { label: "Professional services", brand: "Madar", image: "/showcase/content/madar.webp", alt: "Social media design for professional services and business strategy, aimed at the Gulf market" },
  { label: "Personal care", brand: "Calm Root", image: "/showcase/content/calm-root.webp", alt: "Social media advert for personal care products, with a clean blue identity and a clear product display" },
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
        <span className="section-label">Delivery standard</span>
        <h2 id="offer-visual-proof-title">See the quality<br/>before you decide.</h2>
        <p className="offer-proof-intro">Examples from different sectors, showing the design level and the range of styles adapted to each business.</p>
        <div className="offer-proof-signals" aria-label="Delivery indicators">
          <span><b>7</b><small>examples</small></span>
          <span><b>7</b><small>sectors</small></span>
          <span><b>Custom</b><small>to your business</small></span>
        </div>
      </div>

      <div className="offer-slider-shell" dir="ltr">
        <button className="offer-slider-arrow prev" type="button" onClick={() => goTo(active - 1)} aria-label="Previous design">‹</button>
        <div ref={sliderRef} className="offer-showcase-slider" aria-label="Social media design examples" role="region" tabIndex={0}>
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
        <button className="offer-slider-arrow next" type="button" onClick={() => goTo(active + 1)} aria-label="Next design">›</button>
      </div>

      <div className="offer-slider-dots" role="tablist" aria-label="Choose a design example">
        {showcaseItems.map((item, index) => (
          <button
            key={item.brand}
            type="button"
            className={index === active ? "active" : ""}
            onClick={() => goTo(index)}
            aria-label={`Show the ${item.label} example`}
            aria-selected={index === active}
            role="tab"
          >
            <span />
          </button>
        ))}
        <small>{String(active + 1).padStart(2, "0")} / {String(showcaseItems.length).padStart(2, "0")}</small>
      </div>
    </section>
  );
}
