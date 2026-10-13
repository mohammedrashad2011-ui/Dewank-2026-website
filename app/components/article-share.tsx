"use client";

import { useState, useSyncExternalStore } from "react";
import "./article-share.css";

// Public origin for shared links. Kept local so this client component does not import the server-side SEO module.
const SITE_ORIGIN = "https://dewank.com";

const labels = {
  ar: {
    heading: "وجدت المقال مفيدًا؟ شاركه مع غيرك.",
    linkedin: "لينكدإن",
    linkedinAria: "شارك المقال على لينكدإن، يفتح في نافذة جديدة",
    whatsapp: "واتساب",
    whatsappAria: "شارك المقال عبر واتساب، يفتح في نافذة جديدة",
    copy: "نسخ الرابط",
    copyAria: "انسخ رابط المقال",
    copied: "تم نسخ الرابط.",
    copyFailed: "تعذّر النسخ. انسخ الرابط من شريط العنوان.",
    native: "مشاركة",
    nativeAria: "شارك المقال",
  },
  en: {
    heading: "Found this useful? Share it.",
    linkedin: "LinkedIn",
    linkedinAria: "Share this article on LinkedIn, opens in a new tab",
    whatsapp: "WhatsApp",
    whatsappAria: "Share this article on WhatsApp, opens in a new tab",
    copy: "Copy link",
    copyAria: "Copy the link to this article",
    copied: "Link copied.",
    copyFailed: "Could not copy. Copy the link from the address bar.",
    native: "Share",
    nativeAria: "Share this article",
  },
} as const;

type ArticleShareProps = {
  lang: "ar" | "en";
  title: string;
  // Path of the article's canonical URL, for example /guides/slug (Arabic) or /en/guides/slug (English).
  path: string;
};

// Fallback for browsers without the asynchronous clipboard API (or outside a secure context).
function copyWithSelection(text: string): boolean {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  document.body.removeChild(field);
  return copied;
}

// Sends one dataLayer event per share action. It carries the method and the article path only, no personal data.
// No GTM tag listens to it yet, so it has no effect on reporting until one is approved.
function trackShare(method: string, path: string) {
  const layer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(layer)) layer.push({ event: "article_share", share_method: method, page_path: path });
}

// Native share is offered only on touch devices whose browser has it. Desktop keeps the LinkedIn, WhatsApp and copy controls.
// The server snapshot is false, so the first client render matches it.
const subscribeToNothing = () => () => {};
const hasNativeShare = () =>
  typeof navigator !== "undefined" &&
  typeof navigator.share === "function" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(hover: none) and (pointer: coarse)").matches;
const noNativeShare = () => false;

export function ArticleShare({ lang, title, path }: ArticleShareProps) {
  const t = labels[lang];
  const url = `${SITE_ORIGIN}${path}`;
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const canNativeShare = useSyncExternalStore(subscribeToNothing, hasNativeShare, noNativeShare);

  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  // wa.me without a number: opens WhatsApp's share chooser. It is not the business number, so it is not a WhatsApp enquiry.
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`;

  async function copyLink() {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        copied = true;
      }
    } catch {
      copied = false;
    }
    if (!copied) copied = copyWithSelection(url);
    setStatus(copied ? "copied" : "failed");
    trackShare("copy_link", path);
  }

  async function nativeShare() {
    try {
      await navigator.share({ title, url });
      trackShare("native", path);
    } catch {
      // The visitor cancelled the share sheet. Nothing to report.
    }
  }

  return (
    <div className="article-share" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <p className="article-share-heading">{t.heading}</p>
      <div className="article-share-actions">
        {canNativeShare && (
          <button type="button" className="article-share-btn" onClick={nativeShare} aria-label={t.nativeAria}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V3.5" /><path d="m7.5 8 4.5-4.5L16.5 8" /><path d="M5 12.5V19a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-6.5" /></svg>
            <span>{t.native}</span>
          </button>
        )}
        <a className="article-share-btn" href={linkedinHref} target="_blank" rel="noopener noreferrer" aria-label={t.linkedinAria} onClick={() => trackShare("linkedin", path)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M8 10.5v5.5" /><path d="M8 7.6v.1" /><path d="M11.5 16v-5.5" /><path d="M11.5 12.5c0-1.4 1-2.3 2.2-2.3s2.3.9 2.3 2.3V16" /></svg>
          <span>{t.linkedin}</span>
        </a>
        <a className="article-share-btn" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={t.whatsappAria} onClick={() => trackShare("whatsapp", path)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z" /><path d="M9 8.5c.4 2.8 2.1 4.6 5 5.4l1.2-1.2 2 .9c-.2 1.5-1.2 2.3-2.7 2.2-4.2-.4-7.5-3.8-7.8-8 0-1.3.7-2.2 2-2.5l1 2.1Z" /></svg>
          <span>{t.whatsapp}</span>
        </a>
        <button type="button" className="article-share-btn" onClick={copyLink} aria-label={t.copyAria}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8.5" y="8.5" width="11" height="11" rx="2.5" /><path d="M15.5 8.5V6a2.5 2.5 0 0 0-2.5-2.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5" /></svg>
          <span>{t.copy}</span>
        </button>
      </div>
      <p className="article-share-status" role="status" aria-live="polite">
        {status === "copied" ? t.copied : status === "failed" ? t.copyFailed : ""}
      </p>
    </div>
  );
}
