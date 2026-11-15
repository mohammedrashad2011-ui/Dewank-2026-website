import Link from "next/link";
import type { ReactNode } from "react";
import OffersDecisionPanel, { type OfferChoice } from "../../components/offers-decision-panel";
import VideoOfferFromPrice from "./ai-video-production/video-offer-from-price";
import { HubPrice } from "./offers-hub-price";
import { hubCopy, hubFilterIds, hubOffers, hubVideo, type HubLocale } from "./offers-hub-data";
import "../../components/offers-decision-panel.css";
import "./offers-hub.css";

/**
 * The offers hub body for Arabic and English: hero, goal filter, featured video offer,
 * offer cards, the "help me choose" panel and the FAQ. Each page passes its own FAQ
 * markup so the visible answers keep matching that page's FAQ schema.
 */
export default function OffersHub({ locale, faq }: { locale: HubLocale; faq: ReactNode }) {
  const ar = locale === "ar";
  const t = hubCopy[locale];
  const video = hubVideo[locale];
  const prefix = ar ? "" : "/en";
  const arrow = ar ? "←" : "→";
  const whatsapp = "https://wa.me/97339066649?text=" + encodeURIComponent(t.recommendMessage);
  const choices: OfferChoice[] = [
    ...hubOffers.map((offer) => ({ id: offer.slug, title: offer[locale].title, filter: offer.filter })),
    { id: "ai-video-production", title: video.title, filter: hubVideo.filter },
  ];

  return (
    <div className="oh" dir={ar ? "rtl" : "ltr"}>
      <section className="oh-hero" aria-labelledby="oh-h1">
        <div className="shell oh-hero-grid">
          <div className="oh-hero-copy">
            <span className="oh-eyebrow">{t.eyebrow}</span>
            <h1 id="oh-h1">{t.title}<em>{t.titleAccent}</em></h1>
            <p>{t.lead}</p>
            <div className="oh-hero-actions">
              <a className="oh-button oh-button-primary" href="#offers-explore">{t.browse}<span aria-hidden="true">↓</span></a>
              <a className="oh-button oh-button-ghost" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.recommend}<span aria-hidden="true">↗</span></a>
            </div>
            <ul className="oh-facts">{t.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
          </div>

          <article className="oh-feature offer-card" data-filter={hubVideo.filter} data-category={video.category}>
            <Link className="offer-card-hit" href={prefix + hubVideo.path} aria-label={video.aria} />
            <div className="oh-feature-media">
              <img src="/videos/dewank-showreel-2026-poster-540.webp" width={540} height={960} alt={video.posterAlt} fetchPriority="high" decoding="async" />
            </div>
            <div className="oh-feature-body">
              <span className="oh-feature-tag"><b>{t.featured}</b>{video.category}</span>
              <h2>{video.title}</h2>
              <ol>{video.steps.map((step) => <li key={step}>{step}</li>)}</ol>
              <div className="oh-feature-price"><small>{video.label}</small><VideoOfferFromPrice locale={locale} /></div>
              <span className="oh-feature-cta">{video.cta}<span aria-hidden="true">{arrow}</span></span>
            </div>
          </article>
        </div>
      </section>

      <section id="offers-explore" className="oh-explore" aria-label={t.filterLabel}>
        {hubFilterIds.map((id, index) => <input key={id} defaultChecked={index === 0} type="radio" name="offers-filter" id={`offers-${id}`} />)}

        <div className="shell oh-filter">
          <strong>{t.filterTitle}</strong>
          <div className="oh-filter-chips" role="group" aria-label={t.filterGroup}>
            {hubFilterIds.map((id, index) => <label key={id} htmlFor={`offers-${id}`}>{t.filters[index]}</label>)}
          </div>
        </div>

        <div className="shell oh-grid" aria-label={t.gridLabel}>
          {hubOffers.map((offer) => {
            const text = offer[locale];
            return (
              <article key={offer.slug} className="oh-card offer-card" data-filter={offer.filter} data-category={text.category}>
                <Link className="offer-card-hit" href={prefix + offer.path} aria-label={text.aria} />
                <div className="oh-card-top"><span>{text.category}</span><small>{text.time}</small></div>
                <h2>{text.title}<em>{text.hook}</em></h2>
                <p>{text.text}</p>
                <div className="oh-card-foot">
                  <div><small>{text.label}</small><HubPrice offerKey={offer.priceKey} locale={locale} /></div>
                  <span className="oh-card-cta">{text.cta}<span aria-hidden="true">{arrow}</span></span>
                </div>
              </article>
            );
          })}
          <aside className="oh-note">
            <div><small>{t.noteEyebrow}</small><h2>{t.noteTitle}</h2><p>{t.noteText}</p></div>
            <a className="oh-button oh-button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.noteCta}<span aria-hidden="true">↗</span></a>
          </aside>
        </div>

        <OffersDecisionPanel locale={locale} offers={choices} />
      </section>

      <section className="shell oh-faq" id="offers-faq" aria-labelledby="offers-faq-title">
        <div className="oh-faq-head"><span className="oh-eyebrow">{t.faqEyebrow}</span><h2 id="offers-faq-title">{t.faqTitle}</h2><p>{t.faqIntro}</p></div>
        <div className="oh-faq-list">{faq}</div>
      </section>
    </div>
  );
}
