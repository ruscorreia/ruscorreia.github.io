// service-worker.ts

// Install event: Triggered when the service worker is first installed.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js',
        // Add other assets (images, fonts, etc.) here
      ]);
    })
  );
});

// Fetch event: Intercept network requests and serve cached responses.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

