# JSJ Roofing — Field App

A standalone Progressive Web App (PWA) for JSJ Roofing field staff. Single
HTML/JS/CSS file, installable on iOS and Android with no app store, and
works offline once installed.

## What's in this app

- **Leak Report** — guided inspection report + repair quote builder
- **Gutter Clean / Roof Report Quote** — quoting tool for gutter cleans,
  roof reports, or both combined
- **Gutter Clean / Roof Report** — completion report for after the work is
  done
- **Roof Inspection Report** — full inspection tool with separate Tile and
  Metal (mud map) workflows
- **Admin** — passcode-protected (2265) hub for managing pricing, checklist
  items, and labour rates across every section

## Deployment

This is a static site — no build step, no server required for the app
itself.

1. Host `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, and
   `icon-512.png` on any static web host (GitHub Pages, Netlify, your own
   server, etc.) over **HTTPS** — this is required for PWA install and
   offline support to work.
2. Open the hosted URL on a phone. Use "Add to Home Screen" (iOS Safari)
   or the install prompt (Android Chrome) to install it like a native app.

`landing.html` is an optional install/download landing page you can host
alongside the app and link to from anywhere — it explains how to install
the app on iOS and Android.

## Updating the app after deployment

The app uses a service worker (`sw.js`) for offline support. **Whenever
you deploy a change, bump the `CACHE_VERSION` string at the top of
`sw.js`** (e.g. `jsj-v2` → `jsj-v3`). This forces installed copies of the
app to fetch the new version instead of continuing to serve an old cached
copy. The app will detect the new version and reload automatically the
next time someone opens it with an internet connection.

## AI Polish feature (optional)

The "Polish with AI" button on report screens needs a small proxy server
to work, since the app cannot safely hold an API key itself. See
`ai-polish-proxy/README.md` for full setup instructions — this is optional
and the button stays hidden until configured in Admin.

## Admin passcode

The Admin section (pricing, checklist items, labour rates) is protected by
a 4-digit passcode: **2265**. This is hardcoded in `index.html` — change
the `PASSCODE` constant there if you need to update it.
