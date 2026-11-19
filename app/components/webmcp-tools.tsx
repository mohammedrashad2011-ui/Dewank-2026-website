"use client";

import { useEffect } from "react";

// WebMCP: read-only tools for in-browser AI agents (navigator.modelContext, feature-detected, so other browsers ignore
// it). The tools only return information and links. They never send a message, submit a form or fire tracking.
type ToolResult = { content: Array<{ type: "text"; text: string }> };
type Tool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: { readOnlyHint?: boolean };
  execute: (input: Record<string, unknown>) => Promise<ToolResult>;
};
type ModelContext = { registerTool?: (tool: Tool) => unknown; unregisterTool?: (name: string) => unknown };

const text = (value: string): ToolResult => ({ content: [{ type: "text", text: value }] });
const isEnglish = (input: Record<string, unknown>) =>
  input.language === "en" || (input.language !== "ar" && window.location.pathname.startsWith("/en"));

const tools: Tool[] = [
  {
    name: "dewank_services_and_packages",
    description:
      "Returns Dewank's services and fixed-scope marketing packages (what each includes, timing and page link) as Markdown. Starting prices are on each package page in the visitor's local currency.",
    inputSchema: {
      type: "object",
      properties: { language: { type: "string", enum: ["ar", "en"], description: "ar for Arabic, en for English. Defaults to the page language." } },
    },
    annotations: { readOnlyHint: true },
    async execute(input) {
      const response = await fetch(isEnglish(input) ? "/en/index.md" : "/index.md", { headers: { Accept: "text/markdown" } });
      return text(await response.text());
    },
  },
  {
    name: "dewank_contact_options",
    description:
      "Returns ways to contact Dewank: a WhatsApp link (optionally with a prefilled message the user can review before sending), the email address and the contact page. Nothing is sent.",
    inputSchema: {
      type: "object",
      properties: {
        message: { type: "string", description: "Optional message to prefill in WhatsApp, for example the business type and goal." },
        language: { type: "string", enum: ["ar", "en"] },
      },
    },
    annotations: { readOnlyHint: true },
    async execute(input) {
      const message = typeof input.message === "string" ? input.message.slice(0, 500) : "";
      const whatsapp = "https://wa.me/97339066649" + (message ? `?text=${encodeURIComponent(message)}` : "");
      const contactPage = isEnglish(input) ? "https://dewank.com/en/contact" : "https://dewank.com/contact";
      return text(`WhatsApp: ${whatsapp}\nEmail: hello@dewank.com\nContact page: ${contactPage}`);
    },
  },
];

export default function WebMcpTools() {
  useEffect(() => {
    const modelContext = (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
    if (!modelContext?.registerTool) return;
    const registered: string[] = [];
    for (const tool of tools) {
      try {
        modelContext.registerTool(tool);
        registered.push(tool.name);
      } catch {
        // Already registered (for example after a client-side navigation) or not supported.
      }
    }
    return () => {
      for (const name of registered) {
        try {
          modelContext.unregisterTool?.(name);
        } catch {}
      }
    };
  }, []);

  return null;
}
