import { homeMarkdownAr, markdownHeaders } from "../lib/agent-markdown";

// Markdown version of the Arabic homepage. Also served at / when an agent asks for Accept: text/markdown (see proxy.ts).
// Dynamic so Next.js never attaches its long shared-cache header to it.
export const dynamic = "force-dynamic";

export function GET() {
  return new Response(homeMarkdownAr(), { headers: markdownHeaders });
}
