// Single source of truth for the English site's operational contact channels.
// Official WhatsApp number as approved for this project.
export const WHATSAPP_NUMBER = "97339066649";
export const CONTACT_EMAIL = "hello@dewank.com";
export const SITE_NAME = "Dewank";

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// The brief is sent by the visitor's own email client, so no server or
// third-party form backend is involved (and nothing is stored by this site).
export function briefMailto(subject = "Project brief") {
  const body = [
    "Name:",
    "Company:",
    "Website (optional):",
    "Market (country):",
    "Service needed (naming / strategy & identity / website / paid acquisition / automation / not sure):",
    "Timeline:",
    "Your goal in one or two sentences:",
    "",
    "Anything else we should know:",
  ].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const NAV = [
  { href: "/en/services", label: "Services" },
  { href: "/en/brand-naming", label: "Brand naming" },
  { href: "/en/work", label: "Work" },
  { href: "/en/contact", label: "Contact" },
] as const;
