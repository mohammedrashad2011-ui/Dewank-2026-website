"use client";

import { useEffect, useState, type ReactNode } from "react";

// Mobile-only bar with the price and the WhatsApp CTA, shared by the Arabic and English Brand Naming offers. It shows once
// the first watched element (the hero CTA) has left through the top of the viewport, and hides while any watched element
// is on screen, so two identical buttons are never visible at the same time. Styles live in brand-naming-v2.css.
export function StickyOfferBar({ watchIds, href, label, priceLabel, price, arrow, alwaysWhenHidden = false, ctaMinVisibleRatio = 0 }: {
  watchIds: string[];
  // Share of the first watched element (the original CTA) that must be on screen to count as visible. 0 keeps the
  // old behaviour (any overlap counts). Other watched elements still count on any overlap.
  ctaMinVisibleRatio?: number;
  // When true, the bar shows whenever no watched element is on screen. Use it when the first watched element is the
  // original order CTA, which can start below the fold. The default (false) keeps Brand Naming's behaviour.
  alwaysWhenHidden?: boolean;
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
    const ratioThreshold = ctaMinVisibleRatio > 0 ? [0, ctaMinVisibleRatio] : 0;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const isCta = entry.target === targets[0];
        const counts = isCta && ctaMinVisibleRatio > 0 ? entry.isIntersecting && entry.intersectionRatio >= ctaMinVisibleRatio : entry.isIntersecting;
        onScreen.set(entry.target, counts);
        // The hero CTA counts as passed only when it left through the top of the viewport.
        if (entry.target === targets[0]) passedHero = !entry.isIntersecting && entry.boundingClientRect.top < (entry.rootBounds?.top ?? 0);
      }
      const anyVisible = targets.some((node) => onScreen.get(node));
      setVisible(!anyVisible && (alwaysWhenHidden || passedHero));
    }, { threshold: ratioThreshold });
    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [watchIds, alwaysWhenHidden, ctaMinVisibleRatio]);

  return (
    <div className={`bn2-sticky${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <div className="bn2-sticky-price"><small>{priceLabel}</small><b>{price}</b></div>
      <a className="button primary offer-consultation-cta" href={href} target="_blank" rel="noreferrer" tabIndex={visible ? 0 : -1}>
        {label} <span aria-hidden="true">{arrow}</span>
      </a>
    </div>
  );
}
