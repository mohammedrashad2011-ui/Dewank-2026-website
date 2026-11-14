"use client";

import { useEffect, useState } from "react";
import { useOfferPrice } from "../use-offer-price";

// The WhatsApp message and number are unchanged. Every CTA on the page builds its link here, so the wa.me URL that GTM's
// Just Links triggers match stays identical across the hero, the price block, the sticky bar and the final CTA.
function useBrandNamingWhatsAppHref() {
  const price = useOfferPrice("brand-naming");
  const text = `مرحبًا ديوانك، أرغب في استشارة مجانية بخصوص اختيار اسم تجاري لمشروعي، ومعرفة تفاصيل باقة الـ${price.formattedAmount} ${price.currencyLabel}.`;
  return { price, href: `https://wa.me/97339066649?text=${encodeURIComponent(text)}` };
}

export function BrandNamingOfferPrice() {
  const price = useOfferPrice("brand-naming");
  return <div className="offer-price"><strong>{price.formattedAmount}</strong><span>{price.currencyLabel}</span></div>;
}

// Inline price for running text, e.g. inside the hero line "الباقة كاملة بـ 490 ريال سعودي".
export function BrandNamingInlinePrice() {
  const price = useOfferPrice("brand-naming");
  return <b className="bn2-inline-price">{price.formattedAmount} {price.currencyLabel}</b>;
}

export function BrandNamingWhatsApp({ className, label, id }: { className: string; label: string; id?: string }) {
  const { href } = useBrandNamingWhatsAppHref();
  return <a id={id} className={className} href={href} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">←</span></a>;
}

// Mobile-only bar with the price and the WhatsApp CTA. It shows once the hero CTA has scrolled out of view and hides
// again while the final CTA is on screen, so two identical buttons are never visible at the same time.
export function BrandNamingStickyCta({ watchIds }: { watchIds: string[] }) {
  const { price, href } = useBrandNamingWhatsAppHref();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = watchIds.map((id) => document.getElementById(id)).filter((node): node is HTMLElement => node !== null);
    if (!targets.length || typeof IntersectionObserver === "undefined") return;
    const onScreen = new Map<Element, boolean>();
    let passedHero = false;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        onScreen.set(entry.target, entry.isIntersecting);
        // The hero CTA counts as passed only when it left through the top of the viewport.
        if (entry.target === targets[0]) passedHero = !entry.isIntersecting && entry.boundingClientRect.top < (entry.rootBounds?.top ?? 0);
      }
      const anyVisible = targets.some((node) => onScreen.get(node));
      setVisible(!anyVisible && passedHero);
    });
    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [watchIds]);

  return (
    <div className={`bn2-sticky${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <div className="bn2-sticky-price"><small>الباقة كاملة</small><b>{price.formattedAmount} {price.currencyLabel}</b></div>
      <a className="button primary offer-consultation-cta" href={href} target="_blank" rel="noreferrer" tabIndex={visible ? 0 : -1}>
        استشارة مجانية على واتساب <span aria-hidden="true">←</span>
      </a>
    </div>
  );
}
