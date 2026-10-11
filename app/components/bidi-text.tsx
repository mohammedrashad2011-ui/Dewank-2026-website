// Arabic sentences with English words inside (Google, Meta, SEO & AEO, CRM). Each Latin run is wrapped in <bdi>, so the
// browser keeps it intact and in its own direction instead of reordering it with the Arabic around it. The Arabic
// wording and reading order do not change. Use this only for Arabic copy; English copy does not need it.
import type { ReactNode } from "react";

const latinRun = /[A-Za-z0-9][A-Za-z0-9&+.\-]*(?:\s+(?:&\s+)?[A-Za-z0-9][A-Za-z0-9&+.\-]*)*/g;

export function BidiText({ text: source }: { text: string }) {
  // An Arabic letter written straight against a Latin word (وMeta) reads as one glued word. A space separates them.
  const text = source.replace(/([؀-ۿ])(?=[A-Za-z0-9])/g, "$1 ");
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(latinRun)) {
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(<bdi key={start}>{match[0]}</bdi>);
    last = start + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
