"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HomeTestimonials = dynamic(() => import("./home-testimonials"), {
  ssr: false,
  loading: () => null,
});

export default function LazyHomeTestimonials() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = hostRef.current;
    if (!node || ready) return;

    if (!("IntersectionObserver" in window)) {
      setReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <div
      ref={hostRef}
      className="lazy-testimonials-host"
      style={{ minHeight: ready ? undefined : "520px" }}
    >
      {ready ? <HomeTestimonials /> : null}
    </div>
  );
}
