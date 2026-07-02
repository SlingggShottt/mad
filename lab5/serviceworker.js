const mycache = "v1_cache";
const assets = [
    "/",
    "index.html",
    "sw.js",
    "serviceworker.js",
    "manifest.json",
    "pwa_432.jpeg",
    "rvce_108.jpeg",
    "rvce_432.jpeg"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(mycache).then(cache => {
            console.log('Service Worker: Caching Files');
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
