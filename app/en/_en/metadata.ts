import type { Metadata } from "next";

// English pages are internal preview pages: noindex in metadata, never submitted to search engines.
export function enMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: `${title} | Dewank` },
    description,
    alternates: { canonical: path },
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  };
}
