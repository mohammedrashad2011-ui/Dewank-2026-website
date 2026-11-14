"use client";

import { useRef, useState } from "react";

const SHOWREEL_URL = "/videos/dewank-video-studio-showreel.mp4";

const labels = {
  ar: {
    button: "شغّل فيديو ديوانك",
    aria: "تشغيل فيديو موشن ديوانك الأصلي",
    error: "تعذّر تشغيل المقطع داخل المتصفح.",
    open: "افتح الفيديو مباشرة",
    note: "موشن أصلي من استوديو ديوانك، 18 ثانية، يعرض المونتاج وفيديوهات AI والكرياتيفات الإعلانية. اضغط للتشغيل مع الصوت.",
  },
  en: {
    button: "Play the Dewank showreel",
    aria: "Play Dewank original motion design showreel",
    error: "The showreel could not be played in this browser.",
    open: "Open the video directly",
    note: "An original 18-second Dewank motion design showreel featuring Reels editing, AI video and ad creative. Tap to play with sound.",
  },
} as const;

/**
 * First-party original motion showreel, requested strictly after a real click.
 * No autoplay, no remote media host and no download on page load.
 */
export default function VideoHeroPlayer({ locale }: { locale: "ar" | "en" }) {
  const t = labels[locale];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);

  const playDemo = () => {
    const video = videoRef.current;
    if (!video) return;
    setActive(true);
    setError(false);
    // Assignment and play are kept inside the click gesture for iOS Safari.
    video.src = SHOWREEL_URL;
    video.load();
    void video.play().catch(() => {
      // Native controls remain available for browsers requiring a second tap.
    });
  };

  return (
    <div className="vop-stage" aria-label={t.aria}>
      <div className="vop-stage-top">
        <span className="vop-stage-dot" />
        <span>CREATIVE LAB / DEWANK</span>
        <span>9:16</span>
      </div>
      <div className="vop-film vop-film-video">
        <div className="vop-film-poster" aria-hidden="true">
          <div className="vop-film-sun" />
          <div className="vop-film-ring vop-film-ring-a" />
          <div className="vop-film-ring vop-film-ring-b" />
          <div className="vop-film-object" />
          <div className="vop-film-caption"><small>FRAME / 01</small><strong>FORM<br />IN MOTION.</strong></div>
          <div className="vop-film-frame" />
        </div>
        <video
          className={"vop-video-element" + (active && !error ? " is-active" : "")}
          ref={videoRef}
          controls
          playsInline
          preload="none"
          onError={() => { setError(true); setActive(false); }}
          aria-label={t.button}
        >
          Your browser does not support the video element.
        </video>
        {!active && (
          <button className="vop-video-play" onClick={playDemo} type="button" aria-label={t.aria}>
            <span className="vop-play-icon" aria-hidden="true" />
            <span className="vop-play-label">{t.button}</span>
          </button>
        )}
      </div>
      <div className="vop-stage-timeline" aria-hidden="true"><span>PREVIEW</span><div className="vop-stage-track"><i /></div><span>PLAY</span></div>
      {error && <p className="vop-video-error" role="alert">{t.error} <a href={SHOWREEL_URL} target="_blank" rel="noopener noreferrer">{t.open}</a></p>}
      <p className="vop-visual-note">{t.note}</p>
    </div>
  );
}
