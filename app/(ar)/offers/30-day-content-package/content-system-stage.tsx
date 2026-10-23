import Image from "next/image";
import type { CSSProperties } from "react";
import ContentSystemMotion from "./content-system-motion";

type Locale = "ar" | "en";

// The hero stage: scattered content pieces settle into one ordered system (a profile grid, a story, a reel and a
// 30-day plan). Server-rendered and CSS-only; every word is taken from the page's existing copy. Real Dewank work
// from /showcase/content is used for the tiles. The showcase section below keeps the described versions of the same
// images, so here they are decorative and the stage carries one accessible label.
const copy = {
  ar: {
    label: "تصور: أفكار متفرقة تتحول إلى نظام محتوى من 16 قطعة على خطة 30 يومًا",
    steps: ["أفكار", "تصميم", "كابشنات", "خطة 30 يومًا"],
    plan: "16 قطعة محتوى خلال 30 يومًا",
  },
  en: {
    label: "Illustration: scattered ideas becoming a 16-piece content system on a 30-day plan",
    steps: ["Ideas", "Design", "Captions", "30-day plan"],
    plan: "16 pieces across 30 days",
  },
} as const;

type Tile = {
  kind: "post" | "reel" | "story";
  image: string;
  desktopOnly?: boolean;
  sx: number;
  sy: number;
  sz: number;
  sr: number;
};

// Every tile is genuine Dewank work at its native 4:5 ratio, so nothing is cropped. Six sit in the profile grid (the
// reel carries the grid's reel mark); the story is the large card beside them. On phones the two desktopOnly posts
// step out to keep the rest legible. Scatter vectors (px, deg) describe where each piece starts before it settles.
const tiles: Tile[] = [
  { kind: "post", image: "/showcase/content/bunnah.webp", sx: -90, sy: -60, sz: 60, sr: -12 },
  { kind: "post", image: "/showcase/content/rihla.webp", sx: 40, sy: -110, sz: 20, sr: 9 },
  { kind: "post", image: "/showcase/content/qrmsha.webp", desktopOnly: true, sx: 120, sy: -40, sz: 80, sr: 14 },
  { kind: "post", image: "/showcase/content/buno.webp", sx: -130, sy: 50, sz: 40, sr: 8 },
  { kind: "reel", image: "/showcase/content/nova-play.webp", sx: 10, sy: 90, sz: 100, sr: -6 },
  { kind: "post", image: "/showcase/content/madar.webp", desktopOnly: true, sx: 100, sy: 70, sz: 30, sr: -14 },
  { kind: "story", image: "/showcase/content/calm-root.webp", sx: 160, sy: -10, sz: 70, sr: 9 },
];

// Sixteen publishing days spread across thirty (zero-based). dayOrder gives each publishing day its place in the
// lighting sequence, or -1 for a rest day.
const publishingDays = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 18, 19, 21, 23, 25, 27];
const dayOrder = Array.from({ length: 30 }, (_, day) => publishingDays.indexOf(day));

const vars = (values: Record<string, string | number>) => values as CSSProperties;

export default function ContentSystemStage({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <ContentSystemMotion label={text.label}>
      <div className="csys-light" aria-hidden="true" />

      <div className="csys-story-line" aria-hidden="true">
        <div className="csys-steps">
          {text.steps.map((step, index) => (
            <span className="csys-step" key={step} style={vars({ "--s": index })}>{step}</span>
          ))}
        </div>

        <div className="csys-plan">
          <div className="csys-days">
            {dayOrder.map((order, day) => (
              <i key={day} className={order >= 0 ? "on" : undefined} style={order >= 0 ? vars({ "--n": order }) : undefined} />
            ))}
          </div>
          <span className="csys-plan-label">{text.plan}</span>
        </div>
      </div>

      <div className="csys-plane" aria-hidden="true">
        {tiles.map((tile, index) => (
          <div
            key={`${tile.kind}-${index}`}
            className={`csys-tile csys-${tile.kind}${tile.desktopOnly ? " csys-desktop-only" : ""}`}
            style={vars({ "--i": index, "--sx": `${tile.sx}px`, "--sy": `${tile.sy}px`, "--sz": `${tile.sz}px`, "--sr": `${tile.sr}deg` })}
          >
            <Image
              src={tile.image}
              alt=""
              width={1122}
              height={1402}
              quality={70}
              sizes={tile.kind === "story" ? "(max-width: 760px) 40vw, 320px" : "(max-width: 760px) 20vw, 160px"}
            />
            {tile.kind === "story" ? (
              <span className="csys-segments"><i /><i /><i /></span>
            ) : null}
            {tile.kind === "reel" ? <span className="csys-play" /> : null}
          </div>
        ))}
      </div>
    </ContentSystemMotion>
  );
}
