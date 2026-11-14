"use client";

import { useEffect, useState, type ReactNode } from "react";

// Mobile-only bar with the price and the WhatsApp CTA, shared by the Arabic and English Brand Naming offers. It shows once
// the first watched element (the hero CTA) has left through the top of the viewport, and hides while any watched element
// is on screen, so two identical buttons are never visible at the same time. Styles live in brand-naming-v2.css.
export function StickyOfferBar({ watchIds, href, label, priceLabel, price, arrow }: {
  watchIds: string[];
  href: string;
  label: string;
  priceLabel: string;
  price: ReactNode;
  arrow: string;
}) {
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
      <div className="bn2-sticky-price"><small>{priceLabel}</small><b>{price}</b></div>
      <a className="button primary offer-consultation-cta" href={href} target="_blank" rel="noreferrer" tabIndex={visible ? 0 : -1}>
        {label} <span aria-hidden="true">{arrow}</span>
      </a>
    </div>
  );
}
