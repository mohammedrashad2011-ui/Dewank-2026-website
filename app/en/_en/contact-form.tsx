"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { COUNTRIES, SERVICES, TIMELINES, LIMITS, validateContact, type FieldErrors } from "@/app/en/_en/lib/contact-schema";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

const FIELD_ORDER = ["name", "email", "company", "country", "service", "timeline", "brief", "consent"] as const;

// Read the clock only from event handlers and effects, never during render.
function currentTime() {
  return Date.now();
}

export function ContactForm({ enabled }: { enabled: boolean }) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [briefLength, setBriefLength] = useState(0);
  const startedAt = useRef<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Timing starts when the visitor first sees the form, not on page load.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const disabled = !enabled || status.kind === "submitting" || status.kind === "sent";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled) return;

    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      country: form.get("country"),
      service: form.get("service"),
      timeline: form.get("timeline"),
      brief: form.get("brief"),
      consent: form.get("consent") === "on",
      website: form.get("website"),
      startedAt: startedAt.current ?? currentTime(),
    };

    // Same rules as the server, so obvious mistakes are caught before a round trip.
    const local = validateContact(payload, currentTime());
    if (!local.valid) {
      setErrors(local.errors);
      setStatus({ kind: "error", message: "Please check the highlighted fields." });
      focusFirstError(local.errors);
      return;
    }

    setErrors({});
    setStatus({ kind: "submitting" });

    try {
      const response = await fetch("/en/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        delivered?: boolean;
        message?: string;
        fields?: FieldErrors;
      };

      // Success is shown ONLY when the server says the brief was delivered.
      if (response.status === 201 && body.ok === true && body.delivered === true) {
        setStatus({ kind: "sent" });
        formRef.current?.reset();
        return;
      }

      if (body.fields) {
        setErrors(body.fields);
        focusFirstError(body.fields);
      }
      setStatus({
        kind: "error",
        message:
          body.message ||
          "We could not send your brief just now. Please email us or message us on WhatsApp.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Network problem. Your brief was not sent. Please try again, or email or WhatsApp us.",
      });
    }
  }

  function focusFirstError(found: FieldErrors) {
    const first = FIELD_ORDER.find((key) => found[key]);
    if (!first) return;
    const el = formRef.current?.elements.namedItem(first) as HTMLElement | null;
    el?.focus();
  }

  const describe = (key: keyof FieldErrors) => (errors[key] ? `${key}-error` : undefined);

  return (
    <div className="contact-form-wrap" id="brief-form">
      {!enabled && (
        <div className="notice form-closed" role="note">
          <strong>The form opens once our privacy notice is published.</strong> Until then, please send your brief by
          email or WhatsApp. Nothing you type here is collected while the form is closed.
        </div>
      )}

      {status.kind === "sent" && (
        <div className="form-success" role="status" tabIndex={-1}>
          <strong>Thank you. Your brief has been delivered to our team.</strong>
          <p>We reply after reviewing it, with the next step and a custom scope.</p>
        </div>
      )}

      <form
        ref={formRef}
        className="contact-form"
        onSubmit={onSubmit}
        noValidate
        aria-describedby="form-help"
      >
        <p id="form-help" className="form-help">
          Fields marked with * are required. We use your details only to reply to your enquiry.
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
            <input id="consent" name="consent" type="checkbox" disabled={disabled} aria-invalid={!!errors.consent} aria-describedby={describe("consent")} />
            <span>
              I agree that Dewank may reply to my enquiry. I have read the{" "}
              <a href="/en/privacy">privacy notice</a>.
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
            {status.kind === "submitting" ? "Sending…" : "Send my brief"}
          </button>
          <p className="form-status" role="alert" aria-live="assertive">
            {status.kind === "error" ? status.message : ""}
          </p>
        </div>
      </form>
    </div>
  );
}
