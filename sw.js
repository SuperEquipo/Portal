self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).catch(() => {
        return new Response('Sin conexión a internet.');
    }));
});