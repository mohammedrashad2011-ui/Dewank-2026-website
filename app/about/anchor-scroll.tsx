"use client";

import { useEffect } from "react";

/**
 * Supports reliable deep-linking to sections on /about after hydration.
 * Prefer ?section=<id>, then clean path aliases such as
 * /about/mohamed-rashad, while keeping legacy #section-id links working.
 */
export default function AnchorScroll() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section")?.trim();
    const pathname = window.location.pathname.replace(/\/+$/, "");
    const pathSection =
      pathname === "/about/mohamed-rashad" ? "mohamed-rashad" : undefined;
    const hash = decodeURIComponent(window.location.hash.slice(1)).trim();
    const id = section || pathSection || hash;

    if (!id) return;

    let attempts = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const scrollToTarget = () => {
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ block: "start", behavior: "auto" });
        return;
      }

      attempts += 1;
      if (attempts < 10) {
        timeoutId = setTimeout(scrollToTarget, 150);
      }
    };

    const animationFrameId = requestAnimationFrame(scrollToTarget);

    if (document.readyState !== "complete") {
      window.addEventListener("load", scrollToTarget, { once: true });
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("load", scrollToTarget);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
