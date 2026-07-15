"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "97339066649";

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("idle");
    setMessage("");

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

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setState("success");
    form.reset();
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
          <option>البراندينج الاستراتيجي</option>
          <option>تصميم وبناء المواقع</option>
          <option>التسويق وصناعة المحتوى</option>
          <option>أتمتة الذكاء الاصطناعي</option>
          <option>منظومة متكاملة</option>
        </select>
      </label>

      <label>
        نبذة عن المشروع
        <textarea name="brief" required minLength={20} rows={5} placeholder="ما الهدف، وما التحدي الحالي؟" />
      </label>

      <button className="button primary submit" type="submit">
        إرسال الطلب عبر واتساب <span>↙</span>
      </button>

      {state === "success" && (
        <p className="form-status success" role="status">
          تم تجهيز رسالتك على واتساب. اضغط إرسال داخل واتساب لإكمال الطلب.
        </p>
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
