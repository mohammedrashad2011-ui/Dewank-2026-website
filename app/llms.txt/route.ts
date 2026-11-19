import { llmsTxt } from "../lib/agent-markdown";

// llms.txt (llmstxt.org): a Markdown summary of the site and its key pages for AI agents.
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
