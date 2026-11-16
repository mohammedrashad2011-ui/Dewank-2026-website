// Checks the shared consent bootstrap: production vendors load only on the production hosts, and only when the visitor's
// consent allows them. The bootstrap is bundled from its TypeScript source and run against stubbed browser globals.
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import test from "node:test";
import { build } from "esbuild";

const sourceEntry = fileURLToPath(new URL("../app/components/consent-bootstrap.ts", import.meta.url));

// Bundle the module once. Its relative imports (tracking IDs, banner styles) are resolved by esbuild.
const outDir = mkdtempSync(join(tmpdir(), "dewank-consent-"));
const outFile = join(outDir, "consent-bootstrap.mjs");
await build({
  entryPoints: [sourceEntry],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: outFile,
  logLevel: "silent",
});
const { consentBootstrapScript, PRODUCTION_VENDOR_HOSTS } = await import(pathToFileURL(outFile).href);

// Runs the rendered bootstrap in a stubbed browser and reports the vendor scripts it asked the page to add.
function runBootstrap({ host, vendorsAllowed, stored }) {
  const scriptSources = [];
  const storage = new Map();
  if (stored !== undefined) storage.set("dewank-consent-v1", JSON.stringify(stored));
  const element = () => ({
    setAttribute() {},
    appendChild() {},
    addEventListener() {},
    style: {},
    set src(value) {
      scriptSources.push(value);
    },
    get src() {
      return "";
    },
  });
  const location = { hostname: host, pathname: "/offers/brand-naming", search: "", href: `https://${host}/offers/brand-naming` };
  const document = {
    documentElement: { lang: "ar" },
    head: { appendChild: (node) => node },
    body: { appendChild() {}, children: [] },
    createElement: element,
    addEventListener() {},
    removeEventListener() {},
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementsByTagName: () => [{ parentNode: { insertBefore() {} } }],
    cookie: "",
  };
  const window = {
    location,
    document,
    localStorage: {
      getItem: (key) => (storage.has(key) ? storage.get(key) : null),
      setItem: (key, value) => storage.set(key, String(value)),
      removeItem: (key) => storage.delete(key),
    },
    dataLayer: [],
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {},
    setInterval() {},
  };
  const context = { window, document, location, console };
  const script = consentBootstrapScript(vendorsAllowed);
  // The bootstrap is an inline script; run it with the stubs as its globals.
  const run = new Function(...Object.keys(context), script);
  run(...Object.values(context));
  return { gtmRequested: scriptSources.some((s) => s.includes("googletagmanager.com/gtm.js")) };
}

const allowedHosts = ["dewank.com", "www.dewank.com"];
const blockedHosts = ["localhost", "127.0.0.1", "[::1]", "dewank-2026-website-git-feat.vercel.app", "evil.dewank.com.example"];

test("the allowed production hosts are the apex and www only", () => {
  assert.deepEqual([...PRODUCTION_VENDOR_HOSTS].sort(), ["dewank.com", "www.dewank.com"]);
});

test("production build on an allowed host: GTM loads with no choice, and when advertising is accepted", () => {
  for (const host of allowedHosts) {
    assert.equal(runBootstrap({ host, vendorsAllowed: true }).gtmRequested, true, `no choice on ${host}`);
    assert.equal(
      runBootstrap({ host, vendorsAllowed: true, stored: { v: 1, analytics: true, advertising: true } }).gtmRequested,
      true,
      `accepted on ${host}`,
    );
  }
});

test("any other host loads no production vendor, in every consent state", () => {
  const states = [undefined, { v: 1, analytics: true, advertising: true }, { v: 1, analytics: false, advertising: false }];
  for (const host of blockedHosts) {
    for (const stored of states) {
      assert.equal(
        runBootstrap({ host, vendorsAllowed: true, stored }).gtmRequested,
        false,
        `GTM requested on ${host} with ${JSON.stringify(stored)}`,
      );
    }
  }
});

test("a rejected choice blocks vendors on an allowed host", () => {
  assert.equal(
    runBootstrap({ host: "dewank.com", vendorsAllowed: true, stored: { v: 1, analytics: false, advertising: false } })
      .gtmRequested,
    false,
  );
});

test("a development or preview build (vendorsAllowed false) loads nothing, even on an allowed host", () => {
  assert.equal(runBootstrap({ host: "dewank.com", vendorsAllowed: false }).gtmRequested, false);
});
