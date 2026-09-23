import Link from "next/link";
import styles from "./bithan-proof-card.module.css";

type BithanProofCardProps = {
  variant?: "naming" | "branding";
};

const copy = {
  naming: {
    eyebrow: "دراسة حالة فعلية · قطر · 2026",
    title: "من تحدي التسمية إلى اسم اختاره العميل.",
    text: "بدأ BITHAN كمشروع تسمية لدار مجوهرات راقية: استراتيجية، اتجاهات تسمية، تصفية وفحص مبدئي، ثم جولات تطوير انتهت بالاسم المختار قبل الانتقال إلى الهوية.",
    cta: "شاهد رحلة BITHAN كاملة",
  },
  branding: {
    eyebrow: "دراسة حالة فعلية · Naming → Identity",
    title: "BITHAN: حين يصبح الاسم بداية نظام علامة كامل.",
    text: "من استراتيجية التسمية والاختيار إلى تطوير توقيع بصري ثنائي اللغة، نظام شعار، لوحة ألوان وتطبيقات لعلامة Fine Jewelry في قطر.",
    cta: "شاهد دراسة الحالة",
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
          <div className={styles.journey} aria-label="مراحل المشروع">
            <span>Strategy</span><i>→</i><span>Naming</span><i>→</i><span>Selection</span><i>→</i><span>Identity</span>
          </div>
          <strong>{item.cta} <span>↗</span></strong>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.glow} />
          <img src="/work/bithan-logo.svg" alt="" />
          <small>FINE JEWELRY · QATAR</small>
        </div>
      </Link>
    </section>
  );
}
