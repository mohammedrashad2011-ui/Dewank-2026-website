import { NextResponse, type NextRequest } from "next/server";

// Content negotiation for AI agents on the two homepages only. A request that prefers Markdown
// (Accept lists text/markdown before text/html, or without it) gets the Markdown version. Browsers never send
// text/markdown, so their requests pass straight through to the normal page. The Markdown route sends
// Cache-Control: private, no-store, so the CDN never stores it under the homepage URL.
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  const markdownAt = accept.indexOf("text/markdown");
  if (markdownAt === -1) return NextResponse.next();
  const htmlAt = accept.indexOf("text/html");
  if (htmlAt !== -1 && htmlAt < markdownAt) return NextResponse.next();

  const target = request.nextUrl.clone();
  target.pathname = request.nextUrl.pathname === "/en" ? "/en/index.md" : "/index.md";
  return NextResponse.rewrite(target);
}

export const config = {
  matcher: ["/", "/en"],
};
