import { notFoundResponse } from "@/app/lib/not-found-document";

// Unknown English URLs under /en: HTTP 404 with the English document (lang="en" dir="ltr").
// Static English routes are matched first, so valid pages are unaffected.
export function GET() {
  return notFoundResponse("en");
}
