"use client";

import { useRef, useState } from "react";

const DEMO_VIDEO_URL = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const labels = {
  ar: {
    button: "شغّل فيديو المعاينة",
    aria: "تشغيل فيديو توضيحي في المشغل",
    error: "تعذّر تشغيل المقطع داخل المتصفح.",
    open: "افتح الفيديو مباشرة",
    note: "مشغّل فيديو فعلي. المقطع التجريبي مجاني ومرجعي (CC0)، وليس من أعمال ديوانك. سنستبدله بنموذج إنتاج حقيقي بعد اعتماده.",
  },
  en: {
    button: "Play the video preview",
    aria: "Play an illustrative video in the media player",
    error: "The sample video could not be played in this browser.",
    open: "Open the video directly",
    note: "Working native video player. This is generic CC0 sample footage, not Dewank client work. It will be replaced with an approved original showreel.",
  },
} as const;

/**
 * A real native video player, loaded strictly after a user action.
 * The CSS scene is an honest visual placeholder, not a fabricated client project.
 * Replace DEMO_VIDEO_URL with a rights-cleared first-party showreel when supplied.
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
    video.src = DEMO_VIDEO_URL;
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
          muted
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
      {error && <p className="vop-video-error" role="alert">{t.error} <a href={DEMO_VIDEO_URL} target="_blank" rel="noopener noreferrer">{t.open}</a></p>}
      <p className="vop-visual-note">{t.note}</p>
    </div>
  );
}
