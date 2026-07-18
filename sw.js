self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Deja pasar todas las peticiones (No cacheamos para evitar conflictos con Google Script)
});