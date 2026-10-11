// Shared contact-form rules. Imported by the client form AND the route handler,
// so the browser and the server always agree on what a valid brief is.

export const COUNTRIES = [
  { value: "saudi-arabia", label: "Saudi Arabia" },
  { value: "united-arab-emirates", label: "United Arab Emirates" },
  { value: "bahrain", label: "Bahrain" },
  { value: "qatar", label: "Qatar" },
  { value: "kuwait", label: "Kuwait" },
  { value: "oman", label: "Oman" },
  { value: "united-states", label: "United States" },
  { value: "united-kingdom", label: "United Kingdom" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "other", label: "Other country" },
] as const;

export const SERVICES = [
  { value: "brand-naming", label: "Brand naming and preliminary checks" },
  { value: "strategy-identity", label: "Strategy and identity" },
  { value: "website-conversion", label: "Website and conversion" },
  { value: "paid-tracking", label: "Paid acquisition and tracking" },
  { value: "follow-up-automation", label: "Follow-up automation" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const TIMELINES = [
  { value: "within-1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1 to 3 months" },
  { value: "3-6-months", label: "3 to 6 months" },
  { value: "exploring", label: "Just exploring" },
] as const;

export type ContactInput = {
  name: string;
  email: string;
  company: string;
  country: string;
  service: string;
  timeline: string;
  brief: string;
  consent: boolean;
  // Honeypot: real users never see or fill this field.
  website: string;
  // Client-side timestamp (ms) when the form was first shown. Used only for a timing check.
  startedAt: number;
};

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

export const LIMITS = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 160,
  companyMax: 120,
  briefMin: 40,
  briefMax: 3000,
  // A human needs at least a few seconds to fill in even a short form.
  minFillMs: 3000,
  // Older than this is treated as a stale or replayed form.
  maxFillMs: 2 * 60 * 60 * 1000,
  maxBodyBytes: 16 * 1024,
} as const;

// Strip control characters (including newlines and tabs) so no value can break
// email headers or log lines. Collapse runs of spaces and trim.
export function cleanLine(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

// Brief keeps line breaks (people write in paragraphs) but drops other control characters.
export function cleanBrief(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_RE = /^[\p{L}\p{M}' .-]+$/u;

export function validateContact(raw: Partial<Record<keyof ContactInput, unknown>>, now = Date.now()) {
  const errors: FieldErrors = {};

  const name = cleanLine(raw.name, LIMITS.nameMax);
  const email = cleanLine(raw.email, LIMITS.emailMax).toLowerCase();
  const company = cleanLine(raw.company, LIMITS.companyMax);
  const country = typeof raw.country === "string" ? raw.country : "";
  const service = typeof raw.service === "string" ? raw.service : "";
  const timeline = typeof raw.timeline === "string" ? raw.timeline : "";
  const brief = cleanBrief(raw.brief, LIMITS.briefMax);
  const consent = raw.consent === true;
  const honeypot = typeof raw.website === "string" ? raw.website.trim() : "";
  const startedAt = typeof raw.startedAt === "number" ? raw.startedAt : NaN;

  if (name.length < LIMITS.nameMin) errors.name = "Please enter your name.";
  else if (!NAME_RE.test(name)) errors.name = "Please use letters only in your name.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";

  if (company && !NAME_RE.test(company.replace(/[&()\/]/g, " ")))
    errors.company = "Please check the company name.";

  if (!COUNTRIES.some((c) => c.value === country)) errors.country = "Please choose a country.";
  if (!SERVICES.some((s) => s.value === service)) errors.service = "Please choose a service.";
  if (!TIMELINES.some((t) => t.value === timeline)) errors.timeline = "Please choose a timeline.";

  if (brief.length < LIMITS.briefMin)
    errors.brief = `Please describe your project in at least ${LIMITS.briefMin} characters.`;

  if (!consent) errors.consent = "Please confirm that we may reply to you about your enquiry.";

  // Timing check: rejects instant submissions and stale forms.
  const elapsed = now - startedAt;
  const timingOk = Number.isFinite(elapsed) && elapsed >= LIMITS.minFillMs && elapsed <= LIMITS.maxFillMs;

  const isBot = honeypot.length > 0 || !timingOk;

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    isBot,
    data: { name, email, company, country, service, timeline, brief, consent },
  };
}

export function labelFor<T extends readonly { value: string; label: string }[]>(list: T, value: string) {
  return list.find((item) => item.value === value)?.label ?? value;
}
