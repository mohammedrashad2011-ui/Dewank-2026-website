"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Plays the hero stage choreography once, when the stage is in view. The server renders the finished composition;
// this only adds data-motion ("armed", then "play"), so without JavaScript or with reduced motion nothing moves.
export default function ContentSystemMotion({ label, children }: { label: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.dataset.motion = "armed";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.motion = "play";
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="csys-stage" role="img" aria-label={label}>
      {children}
    </div>
  );
}
