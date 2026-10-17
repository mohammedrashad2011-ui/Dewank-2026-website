"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Mobile-only presentation fix. The source of this note can be a different
// deployed content component; only the exact disclosure text is affected.
const feedbackNote =
  "Feedback was originally given in English or translated for publication; wording has been lightly adapted for clarity while keeping its meaning.";

export default function HideMobileFeedbackNote() {
  const pathname = usePathname();

  useEffect(() => {
    if (!(pathname === "/en" || pathname.startsWith("/en/"))) return;

    const mobile = window.matchMedia("(max-width: 720px)");

    function syncNote() {
      // Examine leaf-level text containers first, so no testimonial card or
      // unrelated ancestor gets hidden by accident.
      const elements = document.querySelectorAll<HTMLElement>("p, small, figcaption, span, div");
      for (const element of elements) {
        if (element.textContent?.trim().replace(/\\s+/g, " ") !== feedbackNote) continue;
        if (element.children.length > 0) continue;
        element.style.display = mobile.matches ? "none" : "";
      }
    }

    syncNote();
    const observer = new MutationObserver(syncNote);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    mobile.addEventListener("change", syncNote);
    return () => {
      observer.disconnect();
      mobile.removeEventListener("change", syncNote);
      // Remove the temporary style when navigating away from English routes.
      const elements = document.querySelectorAll<HTMLElement>("p, small, figcaption, span, div");
      for (const element of elements) {
        if (element.children.length === 0 && element.textContent?.trim().replace(/\\s+/g, " ") === feedbackNote) {
          element.style.display = "";
        }
      }
    };
  }, [pathname]);

  return null;
}
