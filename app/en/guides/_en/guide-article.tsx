import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "../../_en/parity/footer";
import { Header } from "../../_en/parity/header";
// The Arabic guides' article layout and styles, reused unchanged. English-only direction and type overrides follow.
import "../../../guides/guides.css";
import "../../_en/parity/service-pages.en.css";
import "../../_en/styles/hide-arabic-widgets.css";

export type GuideFaq = [question: string, answer: string];
export type GuideToc = [id: string, label: string];

export const GUIDE_UPDATED = "11 October 2026";

type GuideArticleProps = {
  slug: string;
  title: string;
  description: string;
  crumb: string;
  intro: string;
  readTime: string;
  focus: string;
  answer: ReactNode;
  toc: GuideToc[];
  faqs: GuideFaq[];
  ctaHeading: string;
  ctaText: string;
  ctaHref: string;
  ctaLabel: string;
  children: ReactNode;
};

// Structured data: Article, FAQPage and BreadcrumbList for each guide. Preview pages are noindex via enMetadata.
export function guideSchema({ slug, title, description, faqs }: Pick<GuideArticleProps, "slug" | "title" | "description" | "faqs">) {
  const url = `https://dewank.com/en/guides/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description,
        inLanguage: "en",
        dateModified: "2026-10-11",
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: "Dewank", url: "https://dewank.com/en" },
        publisher: { "@type": "Organization", name: "Dewank", url: "https://dewank.com/en" },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dewank.com/en" },
          { "@type": "ListItem", position: 2, name: "Guides", item: "https://dewank.com/en/guides" },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
    ],
  };
}

export function GuideArticle({ slug, title, description, crumb, intro, readTime, focus, answer, toc, faqs, ctaHeading, ctaText, ctaHref, ctaLabel, children }: GuideArticleProps) {
  const schema = guideSchema({ slug, title, description, faqs });
  return (
    <main className="guides-page en-service" lang="en" dir="ltr">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className="article-hero shell">
          <nav className="article-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/en">Home</Link><span>/</span><Link href="/en/guides">Guides</Link><span>/</span><span>{crumb}</span>
          </nav>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="article-meta"><span>Last updated: {GUIDE_UPDATED}</span><span>Reading time: {readTime}</span><span>Focus: {focus}</span></div>
        </header>
        <div className="article-layout shell">
          <div className="article-body">
            <h2 id="short-answer">The short answer</h2>
            <div className="article-answer">{answer}</div>
            {children}
            <section className="article-faq" id="faq">
              <h2>Frequently asked questions</h2>
              {faqs.map(([question, reply]) => <details key={question}><summary>{question}</summary><p>{reply}</p></details>)}
            </section>
            <section className="article-cta">
              <h2>{ctaHeading}</h2>
              <p>{ctaText}</p>
              <Link className="button primary" href={ctaHref}>{ctaLabel} <span>→</span></Link>
            </section>
          </div>
          <aside className="article-side" aria-label="In this guide">
            <b>In this guide</b>
            {toc.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
            <Link className="button primary" href={ctaHref}>{ctaLabel}</Link>
          </aside>
        </div>
      </article>
      <Footer />
    </main>
  );
}
