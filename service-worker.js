const CACHE_NAME = 'agatkowe-fiszki-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './program_nauka.html',
  './quiz.html',
  './style_gallery.css',
  './style_learning.css',
  './style_quiz.css',
  './data.js',
  './manifest.json'
];

// Instalacja Service Workera i cache'owanie plików
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Otwieranie cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Aktywacja i usuwanie starych cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Pobieranie zasobów
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Zwróć z cache jeśli jest, w przeciwnym razie pobierz z sieci
      return response || fetch(event.request).then((fetchResponse) => {
          // Opcjonalnie: Dodawaj dynamicznie nowe pliki do cache (np. obrazki)
          if(event.request.url.indexOf('http') !== 0) return fetchResponse; // Skip non-http
          
          return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, fetchResponse.clone());
              return fetchResponse;
          });
      });
    })
  );
});