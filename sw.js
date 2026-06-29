// Bump this version string every time you deploy an update.
// Changing it forces old caches to be deleted and fresh files to be fetched.
const CACHE_VERSION = 'jsj-v2';
const ASSETS = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Lets the page force this worker to take over immediately instead of
// waiting for every tab/instance of the app to fully close first.
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Network-first for the app shell itself, so updates are picked up
  // immediately instead of being stuck on whatever was cached at install
  // time. Falls back to cache only if the network is unavailable (offline).
  if (e.request.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname === '/' ) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const resClone = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(e.request, resClone));
          return res;
        })
        .catch(() => caches.match(e.request).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for everything else (icons, manifest) — these rarely change
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
