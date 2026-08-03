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

1. Host `index.html`, `manifest.json`, `sw.js`, `prices.json`, `_headers`,
   `icon-192.png`, and `icon-512.png` on any static web host (GitHub Pages,
   Netlify, your own server, etc.) over **HTTPS** — this is required for PWA
   install and offline support to work. (`_headers` is Netlify-specific: it
   adds the CORS header that lets the pricing calculator on its own domain
   read `prices.json`.)
2. Open the hosted URL on a phone. Use "Add to Home Screen" (iOS Safari)
   or the install prompt (Android Chrome) to install it like a native app.

`landing.html` is an optional install/download landing page you can host
alongside the app and link to from anywhere — it explains how to install
the app on iOS and Android.

## Prices — `prices.json` is the single source of truth

All default prices (labour rate, gutter-clean rate, admin cost, harness
cost, per-item repair prices, and the pricing calculator's rubbish cost)
live in **`prices.json`** in this repo. Both this app and the pricing
calculator at jsjpricing.netlify.app read it.

**Monthly price update:**

1. Edit `prices.json` on GitHub (or use the **Export prices.json** button
   in this app's Admin hub, which builds the complete file from your
   device's current prices and copies it to the clipboard).
2. Commit to `main`. Netlify deploys automatically.
3. Done — both apps pick up the new prices the next time they're opened
   online. **No `CACHE_VERSION` bump is needed for price-only changes**
   (the service worker always fetches `prices.json` network-first).

Price precedence on each device: admin-panel override (localStorage) →
`prices.json` → hardcoded fallback baked into `index.html`.

**Automatic migration.** Phones that were in use before `prices.json`
existed carry their own prices in localStorage, which would otherwise
keep beating the central file forever. When a device opens the app online
and the central prices have changed, it clears its own copies
automatically and follows the central file — nothing to do on each phone.

The safety rule is per value: a device copy is only cleared when the
central file can actually supply that value. Rates always converge (the
central file always has them). An item price is only cleared when the
central file prices that item — an item left `null` centrally keeps its
device price rather than silently dropping out of quotes. So an all-null
`item_prices` list is harmless: rates still converge, item prices are
left alone, and if items are priced centrally later, devices pick that up
on the next publish.

Between publishes a deliberate admin override wins as usual; the next
change to `prices.json` brings the device back onto the central prices.
Change detection uses a content signature, so it still works if the
`updated` date is forgotten. The **Use central prices on this device**
button in the Admin hub forces it immediately and clears everything,
including item prices the central file leaves `null`.

Note that
clearing a per-item price in the admin panel now means "use the shared
`prices.json` price" rather than "unpriced" — to force $0, enter 0
explicitly. Items that are `null` in `prices.json` and have no device
override remain unpriced and are omitted from quotes, as before.

## Updating the app after deployment

The app uses a service worker (`sw.js`) for offline support. **Whenever
you deploy a code change, bump the `CACHE_VERSION` string at the top of
`sw.js`** (e.g. `jsj-v2` → `jsj-v3`). (Price-only edits to `prices.json`
don't need this — see above.) This forces installed copies of the
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
