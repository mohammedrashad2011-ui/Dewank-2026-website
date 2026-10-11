import { notFoundResponse } from "@/app/lib/not-found-document";

// Unknown Arabic URLs: HTTP 404 with the Arabic document. Static routes are matched first, so valid pages are unaffected.
export function GET() {
  return notFoundResponse("ar");
}
