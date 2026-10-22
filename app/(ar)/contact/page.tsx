import type { Metadata } from "next";
import { createMetadata } from "../../lib/seo";
import { Footer, Header } from "../../components/site-shell";
import ContactForm from "./contact-form";
// Visual concept adapted from the approved English Contact page: hero, form with an aside, two contact channels, notice.
// Scoped to .contact-polish. Form behaviour lives in contact-form.tsx and is unchanged.
import "./contact-polish.css";

export const metadata: Metadata = createMetadata({
  title: "تواصل مع ديوانك | ابدأ مشروعك الرقمي",
  description: "تواصل مع ديوانك لمناقشة مشروع البراندينج أو التسويق الرقمي أو تصميم المواقع أو أتمتة واتساب والذكاء الاصطناعي للشركات.",
  path: "/contact",
  keywords: ["تواصل مع ديوانك", "شركة تسويق في السعودية", "طلب تصميم موقع", "استشارة تسويق", "أتمتة واتساب"],
});

const brief = [
  "اسمك، واسم شركتك أو موقعها إن وجد",
  "السوق الذي تستهدفه",
  "الخدمة التي تحتاجها، أو أخبرنا أنك غير متأكد",
  "توقيتك المتوقع",
  "هدفك في جملة أو جملتين",
];

const steps = [
  ["مراجعة أولية", "نفهم السياق والهدف ونقطة التعطّل."],
  ["توصية واضحة", "نقترح النطاق والخطوة التالية بلا تعقيد."],
  ["خطة تنفيذ", "مخرجات، توقيت، ومسؤوليات محددة."],
];

const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد مناقشة مشروع. هدفي: ");
const emailHref = "mailto:hello@dewank.com?subject=" + encodeURIComponent("طلب موجز مشروع");

export default function ContactPage() {
  return (
    <main className="contact-polish">
      <Header />

      <section className="cp-hero shell">
        <span className="cp-eyebrow">ابدأ من هنا</span>
        <h1>
          أخبرنا أين تريد أن تصل
          <br />
          <em>ونبدأ</em>
        </h1>
        <p className="cp-lead">شاركنا نبذة مختصرة عن المشروع. كلما كان الهدف أوضح، كانت توصيتنا أدق.</p>
      </section>

      <section className="cp-brief shell" aria-labelledby="cp-brief-title">
        <div className="cp-brief-head">
          <h2 id="cp-brief-title">أرسل موجزك</h2>
          <p>نحتاج دقيقتين تقريبًا. الأسعار في صفحات العروض نقطة بداية، ويُحدد السعر النهائي بعد فهم النطاق.</p>
        </div>

        <div className="cp-form-layout">
          <div className="cp-form-card">
            <ContactForm />
          </div>

          <aside className="cp-aside" aria-label="ما الذي تحتاجه، وما الذي يحدث بعد ذلك">
            <h3>يكفي موجز من خمسة أسطر</h3>
            <ul className="cp-checklist">
              {brief.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="cp-aside-next">ماذا يحدث بعد ذلك؟</h3>
            <ol className="cp-steps">
              {steps.map(([title, text]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="cp-channels shell" aria-labelledby="cp-channels-title">
        <span className="cp-eyebrow">طرق أخرى للتواصل</span>
        <h2 id="cp-channels-title">بريد أو واتساب</h2>
        <div className="cp-channel-grid">
          <article className="cp-card">
            <span className="cp-tag">البريد الإلكتروني</span>
            <h3 dir="ltr">hello@dewank.com</h3>
            <p>يفتح رسالة جديدة في بريدك الإلكتروني، ويمكنك كتابة موجزك فيها مباشرة.</p>
            <a className="cp-button cp-button-secondary" href={emailHref}>
              أرسل لنا بريدًا
            </a>
          </article>
          <article className="cp-card">
            <span className="cp-tag">واتساب</span>
            <h3 dir="ltr">+97339066649</h3>
            <p>الأسرع للسؤال السريع. تفتح الرسالة بمقدمة قصيرة جاهزة للتعديل.</p>
            <a className="cp-button cp-button-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              راسلنا على واتساب
            </a>
          </article>
        </div>
      </section>

      <section className="cp-notice-wrap shell">
        <div className="cp-notice">
          <p>
            <strong>كيف نستخدم بياناتك:</strong> نستخدمها فقط للرد على طلبك.
          </p>
          <p>لا نعرض سعرًا نهائيًا لكل مشروع. كل عرض يُكتب بعد فهم النطاق والهدف.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
