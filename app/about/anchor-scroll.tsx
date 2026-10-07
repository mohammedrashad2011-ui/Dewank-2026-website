"use client";

import { useEffect } from "react";

/**
 * Cold loads of /about#section-id do not scroll to the section on this site
 * (reproducible on production for existing anchors too). Re-apply the hash
 * target after hydration and once more after load, honouring the section's
 * scroll-margin-top so it clears the sticky header.
 */
export default function AnchorScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const scrollToTarget = () => {
      document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "instant" });
    };

    scrollToTarget();
    if (document.readyState === "complete") return;
    window.addEventListener("load", scrollToTarget, { once: true });
    return () => window.removeEventListener("load", scrollToTarget);
  }, []);

  return null;
}
