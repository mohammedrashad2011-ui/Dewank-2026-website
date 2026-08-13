"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileOffersRail() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    if (pathname === "/contact" || pathname.startsWith("/offers")) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= 0.14) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="mobile-offers-rail-wrap">
      <Link className="mobile-offers-rail" href="/offers">
        <span>العروض</span>
        <strong>استكشف العروض الحالية</strong>
        <b aria-hidden="true">←</b>
      </Link>
    </div>
  );
}
