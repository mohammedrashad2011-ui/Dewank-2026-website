import test from "node:test";
import assert from "node:assert/strict";
import { buildPrioritySitemap } from "../app/lib/priority-sitemap.ts";

test("only eligible canonical URLs; reviewed dates stay stable; new pages appear automatically", () => {
  const entries = [
    {url:"https://dewank.com/offers",lastModified:"2026-11-27"},
    {url:"https://dewank.com/work",lastModified:"2026-11-27"},
    {url:"https://dewank.com/new-page",lastModified:"2026-11-28"},
    {url:"https://dewank.com/new-page",lastModified:"2026-11-28"},
    {url:"https://dewank.com/undated"},
    {url:"https://other.example/new-page"},
    {url:"https://dewank.com/new-page?utm_source=x"},
    {url:"https://dewank.com/new-page#section"},
  ];
  const registry = {baselinePaths:["/offers","/work"],reviewedUpdates:{"/offers":"2026-11-24","/removed":"2026-11-24"}};
  const xml = buildPrioritySitemap(entries, registry, "https://dewank.com");
  assert.match(xml, /<loc>https:\/\/dewank\.com\/offers<\/loc><lastmod>2026-11-24<\/lastmod>/);
  assert.match(xml, /<loc>https:\/\/dewank\.com\/new-page<\/loc><lastmod>2026-11-28<\/lastmod>/);
  assert.match(xml, /<loc>https:\/\/dewank\.com\/undated<\/loc><\/url>/);
  assert.equal((xml.match(/<url>/g) ?? []).length, 3);
  assert.doesNotMatch(xml, /\/work|\/removed|other\.example|utm_source|#section|2026-11-27/);
});
test("missing or invalid dates are omitted", () => {
  const xml = buildPrioritySitemap([{url:"https://dewank.com/a",lastModified:"invalid"},{url:"https://dewank.com/b"}], {baselinePaths:[],reviewedUpdates:{"/b":"2026-02-31"}}, "https://dewank.com");
  assert.equal((xml.match(/<url>/g) ?? []).length, 2);
  assert.doesNotMatch(xml, /lastmod/);
});
