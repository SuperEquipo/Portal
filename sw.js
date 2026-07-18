self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Service Worker pasivo para aprobar el requisito de Android sin causar fallos.
});
