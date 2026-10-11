"use client";

import { usePathname } from "next/navigation";
import { englishEquivalent } from "./language-routes";
import "./language-switch.css";

// Arabic site switch: opens the English version of the current page, or the English home page when none exists.
// The header variant sits in the nav actions. Between 901px and 1180px the nav needs that room, so the header variant
// hides there and the footer variant (always shown) carries the link.
export function LanguageSwitch({ variant = "header" }: { variant?: "header" | "footer" }) {
  const pathname = usePathname() ?? "/";
  const href = englishEquivalent(pathname);
  if (variant === "footer") {
    return (
      // eslint-disable-next-line @next/next/no-html-link-for-pages -- the switch must load the English document in full.
      <a className="language-switch language-switch-footer" href={href} lang="en" hrefLang="en">
        English version
      </a>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages -- the switch must load the English document in full.
    <a className="language-switch language-switch-ar" href={href} lang="en" hrefLang="en" aria-label="English">
      EN
    </a>
  );
}
