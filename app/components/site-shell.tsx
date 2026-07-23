import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand-logo" href="/" aria-label="ديوانك - الرئيسية"><span className="mark-frame" aria-hidden="true"/><strong>ديوانك</strong></Link>
        <nav aria-label="التنقل الرئيسي">
          <Link href="/services">الخدمات</Link><Link href="/work">أعمالنا</Link><Link href="/about">عن ديوانك</Link><Link href="/whatsapp-automation">أتمتة واتساب</Link><Link href="/contact">تواصل</Link>
        </nav>
        <Link className="nav-cta" href="/contact">ابدأ مشروعك <span>←</span></Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><Link className="brand-logo footer-brand" href="/"><span className="mark-frame" aria-hidden="true"/><strong>ديوانك</strong></Link><p>نصنع العلامة. نحرّك الطلب. ونؤتمت النمو.</p></div>
        <div><b>استكشف</b><Link href="/services">الخدمات</Link><Link href="/work">أعمالنا</Link><Link href="/about">عن ديوانك</Link><Link href="/whatsapp-automation">أتمتة واتساب</Link><Link href="/contact">ابدأ مشروعًا</Link></div>
        <div><b>تواصل</b><a href="mailto:hello@dewank.com">hello@dewank.com</a><a href="https://www.instagram.com/dewank_marketing" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://wa.me/97339066649" target="_blank" rel="noreferrer">واتساب ↗</a><span>البراندينج · التسويق · AI</span></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} DEWANK STUDIO</span><span>BRAND × GROWTH × AI</span></div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) {
  return <section className="page-hero shell"><span className="eyebrow">[ {eyebrow} ]</span><h1>{title}</h1><p>{text}</p></section>;
}
