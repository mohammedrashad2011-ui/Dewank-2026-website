"use client";

import { useEffect } from "react";

/**
 * Lightweight choreography for the rest of the homepage. Original page HTML remains
 * server-rendered and visible until this enhancement is ready.
 */
export default function HomeSectionChoreography() {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>(".growth-home-experiment");
    if (!main) return;

    const targets = Array.from(main.querySelectorAll<HTMLElement>(
      ".home-proof-intro, .home-proof-metrics article, " +
      ".home-core-paths .section-head, .home-core-paths .service-card, " +
      ".home-work-head, .home-work-card, " +
      ".home-trust-section .home-testimonials, " +
      ".home-method-section .method-intro, .home-method-section .method-list > div, " +
      ".home-growth-summary > h2, .home-growth-summary > p, .home-growth-links a, " +
      ".home-selected-offers-head, .home-selected-offers .home-offer-card, " +
      ".faq-section > h2, .faq-grid details, " +
      ".home-final-conversion > div"
    ));

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("hm-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -3% 0px" });

    for (const target of targets) {
      const position = target.getBoundingClientRect();
      target.classList.add("hm-enter");
      // Anything above or already within the viewport should never flash out.
      if (position.top < window.innerHeight * 0.95) {
        target.classList.add("hm-visible");
      } else {
        observer.observe(target);
      }
    }
    main.classList.add("hm-motion-ready");

    const method = main.querySelector<HTMLElement>(".home-method-section");
    let frame = 0;
    const updateProcess = () => {
      frame = 0;
      if (!method) return;
      const bounds = method.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight * .7 - bounds.top) / Math.max(bounds.height, 1)));
      method.style.setProperty("--hm-process", progress.toFixed(3));
    };
    const scheduleProcess = () => { if (!frame) frame = window.requestAnimationFrame(updateProcess); };
    window.addEventListener("scroll", scheduleProcess, { passive: true });
    window.addEventListener("resize", scheduleProcess);
    scheduleProcess();

    const onMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) {
        observer.disconnect();
        for (const target of targets) target.classList.add("hm-visible");
        main.classList.remove("hm-motion-ready");
      }
    };
    motionPreference.addEventListener("change", onMotionPreference);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleProcess);
      window.removeEventListener("resize", scheduleProcess);
      motionPreference.removeEventListener("change", onMotionPreference);
      main.classList.remove("hm-motion-ready");
      for (const target of targets) target.classList.remove("hm-enter", "hm-visible");
    };
  }, []);

  return null;
}
