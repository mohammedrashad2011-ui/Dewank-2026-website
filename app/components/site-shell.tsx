import Link from "next/link";
import { MobileNavigation } from "./mobile-navigation";
import { ServicesMenu } from "./services-menu";
import "./offers-nav-premium-preview.css";

const footerServices = [
  ["/branding", "البراند والهوية"],
  ["/services/social-media-content", "إدارة السوشيال والمحتوى"],
  ["/digital-marketing", "التسويق الرقمي"],
  ["/paid-ads", "إعلانات Meta وGoogle"],
  ["/seo-aeo", "تحسين SEO وAEO"],
  ["/website-design", "تصميم المواقع"],
  ["/whatsapp-automation", "أتمتة واتساب وCRM"],
  ["/ai-automation", "حلول الذكاء الاصطناعي"],
] as const;

function ContactIcon({ type }: { type: "email" | "instagram" | "whatsapp" }) {
  if (type === "email") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3z"/><path d="m4 7 8 6 8-6"/></svg>;
  if (type === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" className="fill"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"/><path d="M9 8.5c.4 2.8 2.1 4.6 5 5.4l1.2-1.2 2 .9c-.2 1.5-1.2 2.3-2.7 2.2-4.2-.4-7.5-3.8-7.8-8 0-1.3.7-2.2 2-2.5l1 2.1Z"/></svg>;
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand-logo" href="/" aria-label="ديوانك - الرئيسية"><span className="mark-frame" aria-hidden="true"/><strong>ديوانك</strong></Link>
        <nav aria-label="التنقل الرئيسي">
          <ServicesMenu />
          <Link className="offers-nav-link" href="/offers" aria-label="العروض">
            <span className="offers-nav-shimmer" aria-hidden="true" />
            <span className="offers-nav-confetti" aria-hidden="true" />
            <span className="offers-nav-label">العروض</span>
          </Link>
          <Link href="/work">أعمالنا</Link>
          <Link href="/guides">أدلة النمو</Link>
          <Link href="/about">عن ديوانك</Link>
          <Link href="/contact">تواصل</Link>
        </nav>
        <div className="nav-actions"><MobileNavigation /><Link className="nav-cta" href="/contact">ناقش مشروعك معنا <span>←</span></Link></div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer unified-footer">
      <div className="shell footer-grid unified-footer-grid">
        <div className="footer-intro"><Link className="brand-logo footer-brand" href="/"><span className="mark-frame" aria-hidden="true"/><strong>ديوانك</strong></Link><p>نصنع العلامة. نحرّك الطلب. ونؤتمت النمو.</p></div>
        <div className="footer-services"><b>الخدمات</b><div className="footer-service-links">{footerServices.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</div></div>
        <div><b>استكشف</b><Link href="/services">جميع الخدمات</Link><Link href="/offers">العروض</Link><Link href="/work">أعمالنا</Link><Link href="/guides">أدلة النمو</Link><Link href="/about">عن ديوانك</Link><Link href="/ats-cv">للأفراد · السيرة الذاتية ATS</Link><Link href="/contact">ابدأ مشروعًا</Link></div>
        <div className="footer-contact"><b>تواصل</b><div className="footer-social-icons"><a href="https://wa.me/97339066649" target="_blank" rel="noreferrer" aria-label="واتساب" title="واتساب"><ContactIcon type="whatsapp" /></a><a href="mailto:hello@dewank.com" aria-label="البريد الإلكتروني" title="البريد الإلكتروني"><ContactIcon type="email" /></a><a href="https://www.instagram.com/dewank_marketing" target="_blank" rel="noreferrer" aria-label="إنستجرام" title="إنستجرام"><ContactIcon type="instagram" /></a></div><span>البراندينج · التسويق · AI</span></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} DEWANK STUDIO</span><span>BRAND × GROWTH × AI</span></div>
      <style>{`.unified-footer-grid{grid-template-columns:1.55fr 1.45fr .8fr .7fr;gap:clamp(36px,5vw,78px)}.unified-footer-grid b{font-size:15px;line-height:1.4;letter-spacing:.06em;margin-bottom:16px}.footer-services{min-width:0}.footer-service-links{display:grid;grid-template-columns:1fr 1fr;gap:10px 24px}.footer-service-links a{line-height:1.55}.footer-social-icons{display:flex;gap:10px;margin:4px 0 12px}.footer-social-icons a{width:42px;height:42px;border:1px solid rgba(242,239,231,.38);border-radius:50%;display:grid;place-items:center;transition:.2s}.footer-social-icons a:hover{background:var(--acid);color:var(--ink);border-color:var(--acid);transform:translateY(-3px)}.footer-social-icons svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.footer-social-icons svg .fill{fill:currentColor;stroke:none}@media(max-width:1050px){.unified-footer-grid{grid-template-columns:1fr 1fr}.footer-intro{grid-column:1/-1}.footer-service-links{grid-template-columns:1fr 1fr}}@media(max-width:620px){.unified-footer-grid{grid-template-columns:1fr}.footer-intro{grid-column:auto}.footer-service-links{grid-template-columns:1fr 1fr}.footer-social-icons a{width:48px;height:48px}.unified-footer-grid b{font-size:16px}}@media(max-width:380px){.footer-service-links{grid-template-columns:1fr}}`}</style>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) {
  return <section className="page-hero shell"><span className="eyebrow">[ {eyebrow} ]</span><h1>{title}</h1><p>{text}</p></section>;
}
