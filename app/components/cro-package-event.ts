// Dedicated dataLayer event for a CRO package WhatsApp click. It carries the package, language, displayed amount, currency
// and page path only. No personal data, no query string, no message text.
// It is separate from sitewide_whatsapp_click and from the GTM WhatsApp click tags, which are left unchanged.
export type CroPackageSelect = {
  package_id: "cro-snapshot" | "cro-audit" | "cro-growth-diagnostic";
  language: "ar" | "en";
  displayed_amount: number;
  currency: string;
  page_path: string;
};

export function pushCroPackageSelect(payload: CroPackageSelect) {
  const win = window as Window & { dataLayer?: Record<string, unknown>[] };
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({ event: "cro_package_select", ...payload });
}
