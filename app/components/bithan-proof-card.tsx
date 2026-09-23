import Link from "next/link";
import styles from "./bithan-proof-card.module.css";

type BithanProofCardProps = {
  variant?: "naming" | "branding";
};

const copy = {
  naming: {
    eyebrow: "دراسة حالة فعلية · Fine Jewelry · قطر",
    title: "BITHAN: من استراتيجية التسمية إلى الاسم الذي اختاره العميل.",
    text: "تموضع أولًا، أربع مساحات تسمية، قوائم منتقاة، فحص مبدئي، جولات refinement ثم اختيار BITHAN قبل الانتقال إلى الهوية.",
    journey: ["Positioning", "Naming", "Screening", "Selection"],
  },
  branding: {
    eyebrow: "دراسة حالة فعلية · Naming → Identity · 2026",
    title: "BITHAN: من الاسم إلى نظام هوية Fine Jewelry متكامل.",
    text: "اسم اختاره العميل بعد process منظم، ثم Original Sketch، Final Logo Suite، Palette، Variants وتطبيقات Premium جاهزة للاستخدام.",
    journey: ["Naming", "Sketch", "Identity", "Applications"],
  },
};

export function BithanProofCard({ variant = "branding" }: BithanProofCardProps) {
  const item = copy[variant];

  return (
    <section className={`shell ${styles.section}`} aria-labelledby={`bithan-proof-${variant}`}>
      <Link className={styles.card} href="/work/bithan">
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{item.eyebrow}</span>
          <h2 id={`bithan-proof-${variant}`}>{item.title}</h2>
          <p>{item.text}</p>
          <div className={styles.journey} aria-label="مراحل دراسة الحالة">
            {item.journey.map((step, index) => (
              <span key={step} className={styles.stepWrap}>
                <span>{step}</span>{index < item.journey.length - 1 ? <i>→</i> : null}
              </span>
            ))}
          </div>
          <strong>شاهد دراسة الحالة كاملة <span>↗</span></strong>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <img src="/work/bithan/hero.svg" alt="" />
          <small>FINAL APPROVED DIRECTION</small>
        </div>
      </Link>
    </section>
  );
}
