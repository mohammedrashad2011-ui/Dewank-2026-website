"use client";

import { useRef, useState } from "react";
import { pushVideoEvent } from "./video-events";

export const SHOWREEL_URL = "/videos/dewank-showreel-2026.mp4";
export const SHOWREEL_POSTER = "/videos/dewank-showreel-2026-poster.webp";
const POSTER_SMALL = "/videos/dewank-showreel-2026-poster-540.webp";

const labels = {
  ar: {
    button: "شاهد الشوريل",
    meta: "25 ثانية · بالصوت",
    aria: "تشغيل شوريل ديوانك لإنتاج الفيديو، 25 ثانية",
    alt: "لقطة من فيديو ديوانك الترويجي لإنتاج الفيديو",
    error: "تعذّر تشغيل المقطع داخل المتصفح.",
    open: "افتح الفيديو مباشرة",
    note: "فيديو ترويجي من إنتاج ديوانك، يشرح طرق الإنتاج الثلاث. مشاهد توضيحية، وليست أعمالًا لعملاء.",
  },
  en: {
    button: "Watch the showreel",
    meta: "25 seconds · with sound",
    aria: "Play the Dewank video production showreel, 25 seconds",
    alt: "A frame from the Dewank video production promo",
    error: "The showreel could not be played in this browser.",
    open: "Open the video directly",
    note: "A promo produced by Dewank that explains the three production routes. Demo scenes, not client work.",
  },
} as const;

/**
 * First-party showreel. The page loads only a light poster; the video file is
 * requested after a real tap. No autoplay, and native controls stay available.
 */
export default function VideoHeroPlayer({ locale }: { locale: "ar" | "en" }) {
  const t = labels[locale];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    setActive(true);
    setError(false);
    // Source assignment and play stay inside the tap gesture, which iOS Safari requires.
    video.src = SHOWREEL_URL;
    video.load();
    void video.play().catch(() => {
      // Native controls remain for browsers that need a second tap.
    });
    pushVideoEvent("video_showreel_play", { video_name: "dewank-showreel-2026", page_locale: locale });
  };

  return (
    <figure className="vs-reel">
      <div className="vs-reel-frame">
        <img
          className="vs-reel-poster"
          src={SHOWREEL_POSTER}
          srcSet={`${POSTER_SMALL} 540w, ${SHOWREEL_POSTER} 720w`}
          sizes="(max-width: 700px) 62vw, 340px"
          width={720}
          height={1280}
          alt={t.alt}
          fetchPriority="high"
          decoding="async"
        />
        <video
          className={"vs-reel-video" + (active && !error ? " is-active" : "")}
          ref={videoRef}
          controls
          playsInline
          preload="none"
          poster={SHOWREEL_POSTER}
          onError={() => { setError(true); setActive(false); }}
          aria-label={t.button}
        />
        {!active && (
          <button className="vs-reel-play" onClick={play} type="button" aria-label={t.aria}>
            <span className="vs-reel-play-icon" aria-hidden="true" />
            <span className="vs-reel-play-text"><strong>{t.button}</strong><small>{t.meta}</small></span>
          </button>
        )}
      </div>
      {error && <p className="vs-reel-error" role="alert">{t.error} <a href={SHOWREEL_URL} target="_blank" rel="noopener noreferrer">{t.open}</a></p>}
      <figcaption className="vs-reel-note">{t.note}</figcaption>
    </figure>
  );
}
