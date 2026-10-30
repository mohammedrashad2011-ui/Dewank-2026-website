"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "97339066649";

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "opened" | "blocked" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fallback, setFallback] = useState<{ url: string; text: string } | null>(null);
  const [copied, setCopied] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("idle");
    setMessage("");
    setFallback(null);
    setCopied(false);

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = clean(data.get("name"));
    const email = clean(data.get("email"));
    const phone = clean(data.get("phone"));
    const company = clean(data.get("company"));
    const service = clean(data.get("service"));
    const brief = clean(data.get("brief"));

    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || phone.length < 7 || !service || brief.length < 20) {
      setState("error");
      setMessage("يرجى إكمال البيانات المطلوبة بشكل صحيح.");
      return;
    }

    const text = [
      "طلب جديد من موقع ديوانك",
      "",
      `الاسم: ${name}`,
      `البريد الإلكتروني: ${email}`,
      `رقم الواتساب: ${phone}`,
      `الشركة / المشروع: ${company || "غير مذكور"}`,
      `الخدمة المطلوبة: ${service}`,
      "",
      "نبذة عن المشروع:",
      brief,
    ].join("\n");

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "contact_whatsapp_submit",
      lead_intent: service,
      source_path: "/contact",
      cta_location: "qualified_contact_form",
    });

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // A blocked popup must not be reported as success, and we never clear the visitor's form.
    // Calling window.open with "noopener" can return null even when the window opens, so use
    // the same open-then-clear-opener approach as the English contact form.
    let opened: Window | null = null;
    try {
      opened = window.open(url, "_blank");
    } catch {
      // An unavailable or blocked window is handled by the fallback below.
    }

    if (opened) {
      try {
        opened.opener = null;
      } catch {
        // Cross-origin restrictions may prevent access, but the new tab still opened.
      }
      setState("opened");
    } else {
      setFallback({ url, text });
      setState("blocked");
    }
  }

  async function copyMessage() {
    if (!fallback) return;
    try {
      await navigator.clipboard.writeText(fallback.text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          الاسم
          <input name="name" required minLength={2} placeholder="اسمك" />
        </label>
        <label>
          البريد الإلكتروني
          <input name="email" required type="email" placeholder="name@company.com" dir="ltr" />
        </label>
      </div>

      <label>
        رقم الواتساب
        <input name="phone" required inputMode="tel" placeholder="مثال: 0097339066649" dir="ltr" />
      </label>

      <label>
        اسم الشركة أو المشروع
        <input name="company" placeholder="اختياري" />
      </label>

      <label>
        ما الخدمة الأقرب لاحتياجك؟
        <select name="service" required defaultValue="">
          <option value="" disabled>
            اختر الخدمة
          </option>
          <option>البراندينج الاستراتيجي والهوية</option>
          <option>التسويق الرقمي وصناعة المحتوى</option>
          <option>إدارة إعلانات Meta وGoogle</option>
          <option>تصميم وتطوير المواقع</option>
          <option>SEO وAEO</option>
          <option>أتمتة واتساب وCRM</option>
          <option>أتمتة الذكاء الاصطناعي</option>
          <option>ATS CV وتهيئة LinkedIn</option>
          <option>منظومة متكاملة</option>
          <option>غير متأكد — أحتاج ترشيح</option>
        </select>
      </label>

      <label>
        نبذة عن المشروع
        <textarea name="brief" required minLength={20} rows={5} placeholder="ما الهدف، وما التحدي الحالي؟" />
      </label>

      <button className="button primary submit" type="submit">
        إرسال الطلب عبر واتساب <span>↙</span>
      </button>

      {state === "opened" && (
        <p className="form-status success" role="status">
          تم فتح واتساب برسالتك الجاهزة. طلبك لن يصلنا إلا بعد الضغط على «إرسال» داخل واتساب.
          احتفظنا ببيانات النموذج هنا لو احتجت تعدّلها.
        </p>
      )}
      {state === "blocked" && fallback && (
        <div className="form-status error" role="alert">
          <p>واتساب ما اتفتحش تلقائيًا، وطلبك لسه ما اتبعتش. بياناتك ما زالت موجودة في النموذج.</p>
          <p>
            <a href={fallback.url} target="_blank" rel="noopener noreferrer">
              افتح واتساب بالرسالة الجاهزة
            </a>
          </p>
          <label htmlFor="ar-contact-whatsapp-draft">
            أو انسخ الرسالة وابعتها بنفسك إلى +973 3906 6649
          </label>
          <textarea id="ar-contact-whatsapp-draft" readOnly rows={8} value={fallback.text} />
          <button className="button" type="button" onClick={copyMessage}>
            نسخ الرسالة
          </button>
          {copied && <span role="status"> تم نسخ الرسالة.</span>}
        </div>
      )}
      {state === "error" && (
        <p className="form-status error" role="alert">
          {message}
        </p>
      )}

      <small className="privacy-note">نستخدم بياناتك فقط للرد على طلبك.</small>
    </form>
  );
}
