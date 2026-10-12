"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import {
  COUNTRIES,
  SERVICES,
  TIMELINES,
  LIMITS,
  cleanBrief,
  cleanLine,
  validateContact,
  type FieldErrors,
} from "@/app/(en)/en/_en/lib/contact-schema";
import { WHATSAPP_NUMBER } from "@/app/(en)/en/_en/lib/site";

// The form does not send anything to a Dewank server. It writes the enquiry out and opens WhatsApp with it. The visitor
// completes the enquiry by pressing Send inside WhatsApp, so the page never reports the enquiry as delivered.
type Status =
  | { kind: "idle" }
  | { kind: "opened"; url: string }
  | { kind: "blocked"; url: string; text: string }
  | { kind: "error"; message: string };

const FIELD_ORDER = ["name", "email", "company", "country", "service", "timeline", "brief", "consent"] as const;
const countryLabel = Object.fromEntries(COUNTRIES.map((c) => [c.value, c.label]));
const serviceLabel = Object.fromEntries(SERVICES.map((s) => [s.value, s.label]));
const timelineLabel = Object.fromEntries(TIMELINES.map((t) => [t.value, t.label]));

// Read the clock from event handlers only, never during render.
function currentTime() {
  return Date.now();
}

// Same event name and parameters as the Arabic contact form. It carries the service and the page, never the brief or
// any contact detail.
function trackEnquiry(service: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "contact_whatsapp_submit",
    lead_intent: service,
    source_path: "/en/contact",
    cta_location: "english_contact_form",
  });
}

// Opens WhatsApp in a new window and reports whether the browser allowed it. Clearing opener stops the new page from
// reaching this one.
function openWhatsApp(url: string): boolean {
  const opened = window.open(url, "_blank");
  if (!opened) return false;
  try {
    opened.opener = null;
  } catch {
    // Some browsers block access to the new window; it is still open.
  }
  return true;
}

// The English enquiry that WhatsApp opens with. Values must already be cleaned by the shared schema.
export function buildEnquiryMessage(v: {
  name: string;
  email: string;
  company: string;
  country: string;
  service: string;
  timeline: string;
  brief: string;
}): string {
  return [
    "New enquiry from the Dewank website (English)",
    "",
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Company: ${v.company || "Not given"}`,
    `Country: ${countryLabel[v.country] ?? v.country}`,
    `Service: ${serviceLabel[v.service] ?? v.service}`,
    `Timeline: ${timelineLabel[v.timeline] ?? v.timeline}`,
    "",
    "Project brief:",
    v.brief,
  ].join("\n");
}

export function ContactForm({ enabled }: { enabled: boolean }) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [briefLength, setBriefLength] = useState(0);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const disabled = !enabled;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled) return;

    const form = new FormData(event.currentTarget);
    const raw = {
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      country: form.get("country"),
      service: form.get("service"),
      timeline: form.get("timeline"),
      brief: form.get("brief"),
      consent: form.get("consent") === "on",
      website: form.get("website"),
    };

    // Honeypot: a hidden field that people never fill in. If a script filled it, do nothing.
    if (typeof raw.website === "string" && raw.website.trim()) return;

    // Only the field rules decide here. The timing check is not applied, because nothing is sent to a server to protect.
    const check = validateContact({ ...raw, startedAt: currentTime() }, currentTime());
    if (!check.valid) {
      setErrors(check.errors);
      setStatus({ kind: "error", message: "Please check the highlighted fields." });
      focusFirstError(check.errors);
      return;
    }

    setErrors({});
    setCopied(false);
    const values = {
      name: cleanLine(raw.name, LIMITS.nameMax),
      email: cleanLine(raw.email, LIMITS.emailMax).toLowerCase(),
      company: cleanLine(raw.company, LIMITS.companyMax),
      country: String(raw.country),
      service: String(raw.service),
      timeline: String(raw.timeline),
      brief: cleanBrief(raw.brief, LIMITS.briefMax),
    };
    const text = buildEnquiryMessage(values);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    trackEnquiry(values.service);

    if (openWhatsApp(url)) {
      setStatus({ kind: "opened", url });
    } else {
      // A pop-up blocker, or no WhatsApp handler, stops the window. The visitor gets the link and the text instead.
      setStatus({ kind: "blocked", url, text });
    }
  }

  function focusFirstError(found: FieldErrors) {
    const first = FIELD_ORDER.find((key) => found[key]);
    if (!first) return;
    const el = formRef.current?.elements.namedItem(first) as HTMLElement | null;
    el?.focus();
  }

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const describe = (key: keyof FieldErrors) => (errors[key] ? `${key}-error` : undefined);

  return (
    <div className="contact-form-wrap" id="brief-form">
      {!enabled && (
        <div className="notice form-closed" role="note">
          <strong>The form is not available at the moment.</strong> Please email us or message us on WhatsApp.
        </div>
      )}

      {status.kind === "opened" && (
        <div className="form-success" role="status" tabIndex={-1}>
          <strong>WhatsApp has opened with your enquiry.</strong>
          <p>
            Your enquiry is not complete yet. Press Send in WhatsApp to deliver it to our team. Nothing has been sent until you
            do.
          </p>
          <p>
            <a href={status.url} target="_blank" rel="noopener noreferrer">
              Open WhatsApp again
            </a>
          </p>
        </div>
      )}

      {status.kind === "blocked" && (
        <div className="notice" role="alert" tabIndex={-1}>
          <strong>WhatsApp did not open.</strong>
          <p>
            Your browser may have blocked the window, or WhatsApp may not be installed. Open WhatsApp with this link, or copy the
            message below and send it to +973 3906 6649 in WhatsApp. Your enquiry is complete only when you send it.
          </p>
          <p>
            <a href={status.url} target="_blank" rel="noopener noreferrer">
              Open WhatsApp with this enquiry
            </a>
          </p>
          <label htmlFor="enquiry-text">Your enquiry</label>
          <textarea id="enquiry-text" className="enquiry-text" readOnly rows={8} value={status.text} />
          <p>
            <button type="button" className="button" onClick={() => copyText(status.text)}>
              Copy message
            </button>
            {copied && <span role="status"> Copied.</span>}
          </p>
        </div>
      )}

      <form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate aria-describedby="form-help">
        <p id="form-help" className="form-help">
          Fields marked with * are required. This form opens WhatsApp with your details written out. Nothing you type here is
          stored on this website, and your enquiry is complete only when you press Send in WhatsApp.
        </p>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="name">Full name *</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={LIMITS.nameMax}
              required
              disabled={disabled}
              aria-invalid={!!errors.name}
              aria-describedby={describe("name")}
            />
            {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
          </div>

          <div className="field">
            <label htmlFor="email">Work email *</label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={LIMITS.emailMax}
              required
              disabled={disabled}
              aria-invalid={!!errors.email}
              aria-describedby={describe("email")}
            />
            {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
          </div>

          <div className="field">
            <label htmlFor="company">Company (optional)</label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={LIMITS.companyMax}
              disabled={disabled}
              aria-invalid={!!errors.company}
              aria-describedby={describe("company")}
            />
            {errors.company && <p className="field-error" id="company-error">{errors.company}</p>}
          </div>

          <div className="field">
            <label htmlFor="country">Target country *</label>
            <select
              id="country"
              name="country"
              required
              defaultValue=""
              disabled={disabled}
              aria-invalid={!!errors.country}
              aria-describedby={describe("country")}
            >
              <option value="" disabled>
                Choose a country
              </option>
              {COUNTRIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            {errors.country && <p className="field-error" id="country-error">{errors.country}</p>}
          </div>

          <div className="field">
            <label htmlFor="service">Service *</label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              disabled={disabled}
              aria-invalid={!!errors.service}
              aria-describedby={describe("service")}
            >
              <option value="" disabled>
                Choose a service
              </option>
              {SERVICES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {errors.service && <p className="field-error" id="service-error">{errors.service}</p>}
          </div>

          <div className="field">
            <label htmlFor="timeline">Timeline *</label>
            <select
              id="timeline"
              name="timeline"
              required
              defaultValue=""
              disabled={disabled}
              aria-invalid={!!errors.timeline}
              aria-describedby={describe("timeline")}
            >
              <option value="" disabled>
                Choose a timeline
              </option>
              {TIMELINES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            {errors.timeline && <p className="field-error" id="timeline-error">{errors.timeline}</p>}
          </div>
        </div>

        <div className="field">
          <label htmlFor="brief">Project brief *</label>
          <textarea
            id="brief"
            name="brief"
            rows={6}
            maxLength={LIMITS.briefMax}
            required
            disabled={disabled}
            aria-invalid={!!errors.brief}
            aria-describedby={describe("brief") ? "brief-hint brief-error" : "brief-hint"}
            onChange={(e) => setBriefLength(e.currentTarget.value.length)}
          />
          <p className="field-hint" id="brief-hint">
            Your goal, your market and what you have today. At least {LIMITS.briefMin} characters.{" "}
            <span aria-live="off">
              {briefLength}/{LIMITS.briefMax}
            </span>
          </p>
          {errors.brief && <p className="field-error" id="brief-error">{errors.brief}</p>}
        </div>

        <div className="field consent">
          <label htmlFor="consent">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              disabled={disabled}
              aria-invalid={!!errors.consent}
              aria-describedby={describe("consent")}
            />
            <span>
              I agree that Dewank may reply to my enquiry. I have read the <Link href="/en/privacy">privacy notice</Link>.
            </span>
          </label>
          {errors.consent && <p className="field-error" id="consent-error">{errors.consent}</p>}
        </div>

        {/* Honeypot: visually hidden, out of the tab order, ignored by screen readers. */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="form-actions">
          <button className="button primary" type="submit" disabled={disabled}>
            Continue on WhatsApp
          </button>
          <p className="form-status" role="alert" aria-live="assertive">
            {status.kind === "error" ? status.message : ""}
          </p>
        </div>
      </form>
    </div>
  );
}
