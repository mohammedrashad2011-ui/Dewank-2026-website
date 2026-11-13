"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { identityPortfolio, type IdentityLocale } from "../../../lib/identity-portfolio";

const INTERVAL_MS = 4600;

const copy = {
  ar: {
    label: "معرض هويات بصرية صممتها ديوانك",
    kicker: "هويات صممناها",
    prev: "الهوية السابقة",
    next: "الهوية التالية",
    pause: "إيقاف العرض",
    play: "تشغيل العرض",
    choose: "اختر هوية",
    note: "نماذج من مشروعات هوية نفذتها ديوانك. نطاق كل مشروع يختلف عن الباقة المصغرة.",
    ask: "تحب علامتك تظهر بنفس المستوى؟",
    alt: (name: string) => `تطبيقات الهوية البصرية لعلامة ${name} من تصميم ديوانك`,
  },
  en: {
    label: "Gallery of visual identities designed by Dewank",
    kicker: "Identities we designed",
    prev: "Previous identity",
    next: "Next identity",
    pause: "Pause the gallery",
    play: "Play the gallery",
    choose: "Choose an identity",
    note: "Examples of identity projects Dewank delivered. Each project's scope differs from the mini package.",
    ask: "Want your brand to look this considered?",
    alt: (name: string) => `${name} visual identity applications designed by Dewank`,
  },
} as const;

const pad = (value: number) => String(value).padStart(2, "0");

export function IdentityReel({ locale, cta }: { locale: IdentityLocale; cta: ReactNode }) {
  const items = identityPortfolio(locale);
  const t = copy[locale];
  const total = items.length;
  const [active, setActive] = useState(0);
  // Only the current and next image are requested, so the gallery stays light on phones.
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0, 1]));
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const chips = useRef<HTMLDivElement>(null);

  const go = useCallback((index: number) => {
    const next = (index + total) % total;
    setActive(next);
    setLoaded((current) => {
      if (current.has(next) && current.has((next + 1) % total)) return current;
      const updated = new Set(current);
      updated.add(next);
      updated.add((next + 1) % total);
      return updated;
    });
  }, [total]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const element = root.current;
    if (!element || !("IntersectionObserver" in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const playing = visible && !hovered && !userPaused && !reduced;

  // Keep the active chip in view inside the chip row, without moving the page.
  useEffect(() => {
    const row = chips.current;
    const chip = row?.children[active] as HTMLElement | undefined;
    if (!row || !chip || !visible) return;
    const rowBox = row.getBoundingClientRect();
    const chipBox = chip.getBoundingClientRect();
    const delta = chipBox.left + chipBox.width / 2 - (rowBox.left + rowBox.width / 2);
    row.scrollBy({ left: delta, behavior: reduced ? "auto" : "smooth" });
  }, [active, visible, reduced]);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (document.hidden) return;
      go(active + 1);
    }, INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [playing, active, go]);

  const current = items[active];
  // "Next" moves forward in reading order, so it points left in Arabic.
  const forwardArrow = locale === "ar" ? "←" : "→";
  const backArrow = locale === "ar" ? "→" : "←";

  return (
    <div
      ref={root}
      className={"id-reel" + (playing ? " is-playing" : "")}
      dir={locale === "ar" ? "rtl" : "ltr"}
      role="region"
      aria-roledescription="carousel"
      aria-label={t.label}
      style={{ "--reel-accent": current.accent, "--reel-ms": `${INTERVAL_MS}ms` } as CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setHovered(false); }}
    >
      <div className="id-reel-glow" aria-hidden="true" />

      <div className="id-reel-top">
        <span className="id-reel-kicker"><i aria-hidden="true" />{t.kicker}</span>
        <span className="id-reel-count" dir="ltr"><b>{pad(active + 1)}</b> / {pad(total)}</span>
      </div>

      <div
        className="id-reel-stage"
        onTouchStart={(event) => { touchX.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchX.current === null) return;
          const delta = event.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(delta) < 40) return;
          // In RTL a swipe to the right moves forward; in LTR a swipe to the left does.
          const forward = locale === "ar" ? delta > 0 : delta < 0;
          go(active + (forward ? 1 : -1));
        }}
      >
        {items.map((item, index) => (
          <figure
            key={item.key}
            className={"id-reel-slide" + (index === active ? " is-active" : "")}
            aria-hidden={index !== active}
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${total}: ${item.name}`}
          >
            {loaded.has(index) && (
              <img
                src={item.imageSmall}
                srcSet={`${item.imageSmall} 800w, ${item.image} 1448w`}
                sizes="(max-width: 860px) 92vw, 680px"
                width={item.width}
                height={item.height}
                alt={index === active ? t.alt(item.name) : ""}
                loading="lazy"
                decoding="async"
              />
            )}
          </figure>
        ))}
        <div className="id-reel-progress" aria-hidden="true"><span key={`${current.key}-${playing}`} /></div>
      </div>

      <div className="id-reel-caption" key={current.key} aria-live={playing ? "off" : "polite"}>
        <small>{current.sector}</small>
        <strong dir="auto">{current.name}</strong>
      </div>

      <div className="id-reel-controls">
        <div className="id-reel-arrows">
          <button type="button" onClick={() => go(active - 1)} aria-label={t.prev}><span aria-hidden="true">{backArrow}</span></button>
          <button type="button" className="id-reel-toggle" onClick={() => setUserPaused((value) => !value)} aria-label={userPaused ? t.play : t.pause} aria-pressed={userPaused}>
            <span aria-hidden="true" className={userPaused ? "id-reel-icon-play" : "id-reel-icon-pause"} />
          </button>
          <button type="button" onClick={() => go(active + 1)} aria-label={t.next}><span aria-hidden="true">{forwardArrow}</span></button>
        </div>
        <div className="id-reel-chips" ref={chips} role="group" aria-label={t.choose}>
          {items.map((item, index) => (
            <button
              key={item.key}
              type="button"
              className={index === active ? "is-active" : undefined}
              aria-pressed={index === active}
              onClick={() => go(index)}
              style={{ "--chip-accent": item.accent } as CSSProperties}
            >
              <span dir="auto">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="id-reel-cta">
        <p>{t.ask}</p>
        {cta}
      </div>
      <p className="id-reel-note">{t.note}</p>
    </div>
  );
}
