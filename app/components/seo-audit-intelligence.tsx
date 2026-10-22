"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import "./seo-audit-intelligence.css";

const copy = {
  ar: {
    eyebrow: "SEO INTELLIGENCE / DEWANK",
    caption: "تصوّر توضيحي لخطوات الفحص · بلا نتائج لموقع فعلي",
    crawl: "الزحف",
    crawlTitle: "نقرأ الموقع كما تراه محركات البحث",
    crawlDetail: "صفحات · روابط · فهرسة",
    sampleSite: "موقعك",
    inspect: "رصد العوائق",
    inspectTitle: "نراجع ما قد يعيق الظهور",
    inspectDetail: "محاور الفحص، وليست مشكلات مكتشفة",
    checks: ["الفهرسة والزحف", "المحتوى والبنية", "أداء الجوال"],
    review: "قيد المراجعة",
    priority: "ترتيب الأولويات",
    priorityTitle: "نحوّل التشخيص إلى قرار",
    priorityDetail: "حسب الأثر والجهد",
    levels: ["عاجل", "مهم", "تحسين"],
    report: "التسليم",
    reportTitle: "تقرير واضح وخطوة تالية",
    reportDetail: "PDF + خطة تحسين لمدة 30 يومًا",
    reportRows: ["ملخص مفهوم", "أولويات الإصلاح", "خطة عمل"],
    path: "من الموقع إلى خطة واضحة",
    sr: "تصوّر توضيحي لمسار فحص SEO: زحف الموقع، مراجعة محاور الفهرسة والمحتوى وأداء الجوال، ترتيب الأولويات حسب الأثر والجهد، ثم تقرير PDF وخطة تحسين لمدة 30 يومًا. لا يعرض نتائج موقع فعلي.",
  },
  en: {
    eyebrow: "SEO INTELLIGENCE / DEWANK",
    caption: "Illustrative audit workflow · no real site results",
    crawl: "Crawl scan",
    crawlTitle: "Read the site as search engines do",
    crawlDetail: "Pages · links · indexing",
    sampleSite: "Your website",
    inspect: "Find issues",
    inspectTitle: "Review what may block visibility",
    inspectDetail: "Audit areas, not detected issues",
    checks: ["Indexing and crawl", "Content and structure", "Mobile performance"],
    review: "To review",
    priority: "Prioritise",
    priorityTitle: "Turn diagnosis into decisions",
    priorityDetail: "By impact and effort",
    levels: ["Urgent", "Important", "Improve"],
    report: "Deliver",
    reportTitle: "A report with a next step",
    reportDetail: "PDF + 30-day improvement plan",
    reportRows: ["Clear summary", "Fix priorities", "Action plan"],
    path: "From website to a clear plan",
    sr: "Illustrative SEO audit workflow: crawl the website, review indexing, content and mobile performance, prioritise by impact and effort, then deliver a PDF report and a 30-day improvement plan. No real site results are shown.",
  },
} as const;

export function SeoAuditIntelligence({ locale }: { locale: "ar" | "en" }) {
  const c = copy[locale];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "100px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="seo-intelligence" data-visible={visible} dir={locale === "ar" ? "rtl" : "ltr"}>
      <p className="sr-only">{c.sr}</p>
      <div className="seo-intelligence-top" aria-hidden="true">
        <div className="seo-intelligence-brand"><span className="seo-intelligence-symbol">✳</span><span>{c.eyebrow}</span></div>
        <span className="seo-intelligence-caption">{c.caption}</span>
      </div>

      <div className="seo-intelligence-track" aria-hidden="true">
        <div className="seo-intelligence-card seo-intelligence-crawl">
          <div className="seo-intelligence-card-top"><span>01 / {c.crawl}</span><i /></div>
          <div className="seo-intelligence-browser">
            <div className="seo-intelligence-browser-top"><span className="seo-intelligence-dots"><i /><i /><i /></span><span>{c.sampleSite}</span></div>
            <div className="seo-intelligence-browser-body">
              <div className="seo-intelligence-skeleton"><i /><i /><i /></div>
              <div className="seo-intelligence-page-grid"><i /><i /><i /><i /><i /><i /></div>
              <span className="seo-intelligence-scan" />
            </div>
          </div>
          <div className="seo-intelligence-card-copy"><h3>{c.crawlTitle}</h3><p>{c.crawlDetail}</p></div>
        </div>

        <div className="seo-intelligence-card seo-intelligence-inspect">
          <div className="seo-intelligence-card-top"><span>02 / {c.inspect}</span><i /></div>
          <div className="seo-intelligence-checks">
            {c.checks.map((check, index) => <div key={check} style={{ "--item": index } as CSSProperties}><span className="seo-intelligence-check-icon">⌁</span><span>{check}</span><small>{c.review}</small></div>)}
          </div>
          <div className="seo-intelligence-card-copy"><h3>{c.inspectTitle}</h3><p>{c.inspectDetail}</p></div>
        </div>

        <div className="seo-intelligence-card seo-intelligence-priority">
          <div className="seo-intelligence-card-top"><span>03 / {c.priority}</span><i /></div>
          <div className="seo-intelligence-priority-stack">
            {c.levels.map((level, index) => <div key={level} style={{ "--item": index } as CSSProperties}><span className="seo-intelligence-priority-dot" /><span>{level}</span></div>)}
          </div>
          <div className="seo-intelligence-card-copy"><h3>{c.priorityTitle}</h3><p>{c.priorityDetail}</p></div>
        </div>

        <div className="seo-intelligence-card seo-intelligence-report">
          <div className="seo-intelligence-card-top"><span>04 / {c.report}</span><i /></div>
          <div className="seo-intelligence-paper"><span className="seo-intelligence-pdf">PDF</span><div>{c.reportRows.map((row) => <span key={row}><i />{row}</span>)}</div></div>
          <div className="seo-intelligence-card-copy"><h3>{c.reportTitle}</h3><p>{c.reportDetail}</p></div>
        </div>
      </div>
      <div className="seo-intelligence-footer" aria-hidden="true"><span>{c.path}</span><i /><span>CRAWL → PLAN</span></div>
    </div>
  );
}
