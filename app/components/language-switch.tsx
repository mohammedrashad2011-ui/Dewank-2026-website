"use client";

import { usePathname } from "next/navigation";
import { englishEquivalent } from "./language-routes";
import "./language-switch.css";

// Arabic site switch: opens the English version of the current page, or the English home page when none exists.
// The header variant sits in the nav actions and stays visible at every width (the nav collapses into the Menu from
// 1180px down, see arabic-nav-collapse.css). The footer variant is a plain text link under the contact details.
export function LanguageSwitch({ variant = "header" }: { variant?: "header" | "footer" }) {
  const pathname = usePathname() ?? "/";
  const href = englishEquivalent(pathname);
  if (variant === "footer") {
    return (
      <a className="language-switch language-switch-footer" href={href} lang="en" hrefLang="en">
        English version
      </a>
    );
  }
  return (
    <a className="language-switch language-switch-ar" href={href} lang="en" hrefLang="en">
      EN
    </a>
  );
}
