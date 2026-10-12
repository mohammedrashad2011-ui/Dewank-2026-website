# Production deployment runbook (dewank.com)

Status: **not deployed.** Recorded from read-only checks on 12 October 2026. Nothing here changes DNS, hosting, environment
variables, GTM, GA4, Meta or Google Ads. Each item is marked **Verified** (checked from outside, or in the owner's account
through a read-only session), **Documented** (from Hostinger's documentation, not tested on this account), or **Owner**
(needs the hPanel account, which this session could not reach).

## 1. Current production (what the outside check shows)

| Item | Result | Status |
|---|---|---|
| Hosting | Response headers `platform: hostinger`, `panel: hpanel`, `Server: hcdn` (Hostinger CDN), `X-Powered-By: Next.js` | Verified |
| Content | The live homepage renders the same text as `main` at `b4edc70` (Arabic only; no English pages, no privacy pages) | Verified |
| Exact deployed Git SHA | Not confirmed. The live JavaScript chunk names do not match a local build of any commit tested: `b4edc70`, `e80752e`, `b32733c`, `99a866a`, `397d124`, `67c2c12`, `9b168b9`. The rendered output matches `b4edc70` | **Owner**: read the deployed commit in the hPanel deployment record |
| HTTP to HTTPS | `http://dewank.com` returns 301 to `https://dewank.com/` | Verified |
| www | `https://www.dewank.com` returns 301 to `https://dewank.com/` | Verified |
| TLS certificate | Let's Encrypt, `CN=dewank.com`, **expires 29 November 2026** | Verified. Renewal method: **Owner** |
| HSTS and security headers | `Strict-Transport-Security` (1 year, includeSubDomains, preload), `nosniff`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, `Content-Security-Policy: upgrade-insecure-requests` | Verified |
| CDN caching | `Cache-Control: s-maxage=31536000`, and the homepage was served from cache with `Age: 386978` seconds (about 4.5 days) | Verified. **A deployment is not visible to visitors until the CDN cache is purged or expires. The purge method must be confirmed in hPanel.** |
| Measurement tags on the live site | A first visit with no choice sends requests to `googletagmanager.com` (GTM and gtag), `analytics.google.com/g/collect` (GA4), `googleads.g.doubleclick.net` and `google.com` conversion endpoints for ID `768813020`, and `connect.facebook.net` (Meta Pixel). No consent banner is shown. The live HTML also contains a `noscript` Meta `PageView` beacon | **Verified. This is a current compliance issue on production, not only a launch item.** The release branch removes it (see section 6) |

**Immediate consequence.** The current production site measures visitors before any choice. The bilingual release fixes this:
no vendor request before consent, and the banner is shown. Launch is the fix, so it should not be delayed without a reason.

## 2. Hostinger requirements (documented, not yet tested on this account)

| Requirement | Hostinger documentation | This project | Status |
|---|---|---|---|
| Plan | Node.js web apps need Business Web Hosting or a Cloud plan. VPS plans need manual setup | Owner's account serves dewank.com with `hpanel`. Plan unknown | **Owner** |
| Node.js version | 18, 20, 22, 24. Hostinger auto-detects from `engines` if no version is chosen. Changing the version can change the build | `package.json` declares `22.x` | **Owner**: select 22 explicitly. Local verification on 22.23.3 passed |
| Build command | `npm run build` is supported. Next.js is auto-detected | `npm run build` runs `next build --webpack` | Verified locally on Node 22.23.3 |
| Start command | No default is documented for Next.js. The app should listen on port 3000 | `npm start` runs `next start -p 3000` | Verified locally: all launch routes return 200 |
| Package manager | npm, yarn or pnpm. `node_modules` should not be uploaded | npm with `package-lock.json`; `npm ci` passes | Verified locally |
| Environment variables | None needed for the build | Leave `DEWANK_SITE_ENV`, `DEWANK_ANALYTICS_MODE` and `VERCEL_ENV` **unset** | **Owner** |
| Deployment trigger | A push to the connected branch triggers a rebuild. Redeploy rebuilds the latest code on the connected branch. Only one build runs at a time | The owner's connection to `main` (or to an upload) is unknown | **Owner** |
| Application root | Not documented here | Repository root | **Owner** |
| Process manager | Hostinger runs the Node.js app and restarts it after a crash; the manager is not documented here | Next.js `next start` | Documented only |
| Rollback | No per-commit rollback for Git-connected apps. Revert the commit in Git and push, or redeploy an older archive | See section 5 | Documented; the Git revert was tested locally (section 5) |

## 3. Deployment mechanism (to confirm in hPanel)

Two mechanisms are possible. The owner must confirm which one is in use before the merge:

- **A. Git integration.** Hostinger builds the connected branch on each push. The merge of PR #157 into `main` would then
  trigger a build of `main`. This is the mechanism assumed in section 4.
- **B. Upload.** The owner builds locally and uploads an archive. A merge then has no effect until the owner uploads.

Do not assume a merge deploys the site. Check the connection on the Node.js app first.

## 4. Deployment steps (after the owner's approval)

Do not start until the launch blockers in `docs/release-candidate-report.md` are closed and PR #157 is approved.

1. **Record the rollback point.** The live commit is `b4edc70` unless the hPanel deployment record says otherwise.
   Record the deployed SHA from the hPanel deployment history. Create a tag for it (owner, local or remote):
   ```bash
   git tag -a prod-before-launch-b4edc70 b4edc70 -m "Live production before the bilingual launch"
   ```
2. **Confirm the Hostinger settings** (section 2): Node.js 22, `npm run build`, `npm start`, no `DEWANK_*` or `VERCEL_ENV`
   variables, and the connection to the branch that will receive the merge.
3. **Merge PR #157** into `main` with a normal merge commit (not squash, so that `git revert -m 1` works). Owner decision.
   ```bash
   git switch main
   git pull --ff-only origin main
   git merge --no-ff release/bilingual-production-20261012
   git push origin main
   ```
4. **Trigger the build.** Under mechanism A, the push starts it. Under mechanism B, the owner uploads the archive built with
   `npm ci && npm run build`. Only one build runs at a time; wait for it to finish.
5. **Check the deployment log and the runtime log.** The runtime log should show `next start` listening on port 3000.
6. **Purge the CDN cache** if hPanel offers the purge. Then run the checks in section 7.

## 5. Rollback

Verified locally on 12 October 2026: a merge of the release branch into `b4edc70` followed by `git revert -m 1 <merge>`
produces a tree identical to `b4edc70` (checked with `git diff --quiet b4edc70 HEAD`).

```bash
git switch main
git revert -m 1 <launch-merge-commit> --no-edit
git push origin main
```

Hostinger then rebuilds `main` from the revert commit (mechanism A). The rebuilt output is expected to match the pre-launch
homepage text. Chunk names may differ from the earlier build. Check the runtime log and the CDN cache afterwards (section 7).

Notes:
- Revert the revert before re-launching. Otherwise a later merge of the same branch does not bring the changes back.
- The English launch can be turned off in a new commit instead: set `ENGLISH_LAUNCH_ENABLED = false` in
  `app/(en)/en/_en/lib/seo-launch.ts`, and push.
- Under mechanism B, keep the previous archive and upload it again.

## 6. What the release changes on production

- **Consent:** no measurement request before the visitor chooses; the banner is shown; Accept, Reject and Manage are the same size.
- **Analytics:** the same IDs as before (GTM `GTM-PG525ZFN`, GA4 `G-5SKKT1NBHB`, Meta `2274266710087331`), loaded only after consent.
  The noscript fallbacks that sent requests without JavaScript are removed.
- **English site:** added at `/en`, indexable as configured (see the release report).
- **Privacy pages:** `/privacy` and `/en/privacy`, public from the footer and the consent banner, `noindex` until the owner decides.
- **Headers:** `X-Powered-By` is removed.

## 7. Post-deploy checks (run after the CDN cache has been purged)

```bash
# Served build, redirects, TLS
curl -sI https://dewank.com/ | grep -i "^HTTP\|age:\|cache-control"
curl -sI http://dewank.com/ | grep -i "^HTTP\|location"
curl -sI https://www.dewank.com/ | grep -i "^HTTP\|location"

# Launch routes: 200, lang and dir, canonical equal to the URL
for p in / /en /services /en/services /contact /en/contact /privacy /en/privacy; do
  curl -s -o /dev/null -w "%{http_code} $p\n" "https://dewank.com$p"
done

# Indexing: English pages index, privacy pages noindex
curl -s https://dewank.com/en | grep -o '<meta name="robots"[^>]*>' || echo "robots default (indexable)"
curl -s https://dewank.com/en/privacy | grep -o '<meta name="robots"[^>]*>'

# Sitemap: 83 URLs, no privacy URLs
curl -s https://dewank.com/sitemap.xml | grep -o "<loc>" | wc -l

# X-Powered-By is absent
curl -sI https://dewank.com/ | grep -i x-powered-by || echo "X-Powered-By absent"
```

Browser checks (owner, in a fresh private window):

- A first visit with no choice makes **no** request to `googletagmanager.com`, `analytics.google.com`,
  `googleads.g.doubleclick.net` or `connect.facebook.net`. The banner is shown.
- Accept all: the measurement tags load. The GA4 real-time report shows one `page_view` for the visit (property
  `a139422952p536531439`, stream `G-5SKKT1NBHB`).
- Meta Events Manager (pixel `2274266710087331`): `PageView` is received after a consent. Confirm in Test events.

## 8. Backups and rollback readiness

| Backup | How | Status |
|---|---|---|
| Git: the pre-launch commit | The tag in section 4, step 1, or `b4edc70` on `main` | Verified: `b4edc70` exists on `origin/main` |
| Git: the release commit | `0d79958` on `release/bilingual-production-20261012` | Verified: pushed |
| Git revert path | Section 5 | Verified locally |
| Hostinger deployment history | hPanel, Deployments | **Owner**: note the current deployed SHA and the builds available |
| Hostinger files and database | hPanel backups, if the plan provides them | **Owner**: confirm that a backup exists before the merge |
| Live HTML and assets | Downloadable from the live site as a record (not a restore path) | Available; not a substitute for the Git revert |

## 9. Owner items for the hosting and provider accounts

1. The plan and the Node.js application on the account that serves dewank.com.
2. The deployed commit currently live, from the deployment history.
3. The deployment mechanism: Git integration (which branch) or upload.
4. Node.js 22; application root; build and start commands; port 3000.
5. That `DEWANK_SITE_ENV`, `DEWANK_ANALYTICS_MODE` and `VERCEL_ENV` are unset.
6. How the CDN cache is purged, and that a purge is possible after a deploy.
7. The TLS certificate renewal (current expiry 29 November 2026).
8. The hosting provider's server-log retention period (the privacy notice must state it).
9. Server location (international transfers).

## 10. Not done in this task

- No deployment, no merge into `main`, no DNS, hosting, SSL, environment, GTM, GA4, Meta or Google Ads change.
- No hPanel access (sign-in required; not entered).
