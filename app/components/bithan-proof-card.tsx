import Link from "next/link";
import styles from "./bithan-proof-card.module.css";

export function BithanProofCard() {
  return (
    <section className={`shell ${styles.section}`} aria-labelledby="bithan-proof-branding">
      <Link className={styles.card} href="/work/bithan">
        <div className={styles.copy}>
          <span className={styles.eyebrow}>دراسة حالة فعلية · Fine Jewelry · 2026</span>
          <h2 id="bithan-proof-branding">BITHAN: من Original Sketch إلى هوية بصرية نهائية.</h2>
          <p>تطوير توقيع عربي مميز إلى Final Logo Suite، لوحة ألوان معتمدة، نسخ للاستخدام على الخلفيات الداكنة والفاتحة، وتطبيقات Premium متسقة.</p>
          <div className={styles.journey} aria-label="مراحل الهوية">
            <span>Original Sketch</span><i>→</i><span>Logo Suite</span><i>→</i><span>Palette</span><i>→</i><span>Applications</span>
          </div>
          <strong>شاهد دراسة الحالة <span>↗</span></strong>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.glow} />
          <img src="/work/bithan-logo.svg" alt="" />
          <small>FINAL APPROVED DIRECTION</small>
        </div>
      </Link>
    </section>
  );
}
