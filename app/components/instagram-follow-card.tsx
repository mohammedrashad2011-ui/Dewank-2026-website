"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "dewank-instagram-card-dismissed";
const WHATSAPP_SESSION_KEY = "dewank-whatsapp-intent-clicked";
const DISMISS_FOR_MS = 7 * 24 * 60 * 60 * 1000;

export default function InstagramFollowCard() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setVisible(false);
    setHost(null);

    if (pathname === "/contact" || pathname.startsWith("/offers")) return;

    const dismissedAt = Number(window.localStorage.getItem(STORAGE_KEY) || 0);
    const recentlyDismissed = Date.now() - dismissedAt < DISMISS_FOR_MS;
    const cameFromInstagram = /instagram\.com|l\.instagram\.com/i.test(document.referrer);
    const whatsappAlreadyClicked = window.sessionStorage.getItem(WHATSAPP_SESSION_KEY) === "1";

    if (recentlyDismissed || cameFromInstagram || whatsappAlreadyClicked) return;

    const main = document.querySelector("main");
    const sections = main?.querySelectorAll(":scope > section");
    const target = sections && sections.length > 2 ? sections[1] : sections?.[0];
    if (!target) return;

    const portalHost = document.createElement("div");
    portalHost.className = "instagram-editorial-host";
    target.insertAdjacentElement("afterend", portalHost);
    setHost(portalHost);

    const reveal = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (pageHeight > 0 && window.scrollY / pageHeight >= 0.48) {
        setVisible(true);
        window.removeEventListener("scroll", reveal);
      }
    };

    const hideForWhatsApp = () => setVisible(false);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("dewank:whatsapp-intent", hideForWhatsApp);
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("dewank:whatsapp-intent", hideForWhatsApp);
      portalHost.remove();
    };
  }, [pathname]);

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  };

  if (!visible || !host) return null;

  return createPortal(
    <aside className="instagram-editorial-card shell" aria-label="تابع ديوانك على إنستجرام">
      <div className="instagram-editorial-visual" aria-hidden="true">
        <span>DW</span>
        <i /><i /><i />
      </div>
      <div className="instagram-editorial-copy">
        <small>DEWANK ON INSTAGRAM</small>
        <strong>تحب تشوف الأفكار دي قبل ما تتحول لخدمة؟</strong>
        <p>أفكار قصيرة في التسويق والمحتوى والأتمتة تساعدك تشوف فرص النمو بشكل أوضح.</p>
      </div>
      <div className="instagram-editorial-actions">
        <a
          href="https://www.instagram.com/dewank_marketing"
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
        >
          شوف الأفكار <span aria-hidden="true">↗</span>
        </a>
        <button type="button" onClick={dismiss}>مش الآن</button>
      </div>
    </aside>,
    host,
  );
}
