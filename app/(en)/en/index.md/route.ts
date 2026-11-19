import { homeMarkdownEn, markdownHeaders } from "../../../lib/agent-markdown";

// Markdown version of the English homepage. Also served at /en when an agent asks for Accept: text/markdown (see proxy.ts).
// Dynamic so Next.js never attaches its long shared-cache header to it.
export const dynamic = "force-dynamic";

export function GET() {
  return new Response(homeMarkdownEn(), { headers: markdownHeaders });
}
