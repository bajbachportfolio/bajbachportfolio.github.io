const staticCacheName = 'static_cache_v1';



// self.addEventListener('install', async event => { 
//   console.log("SW installed");
// });
  
// self.addEventListener('activate', async event => {
//     const cacheNames = await caches.keys();

//     await Promise.all(
//       cacheNames
//         .filter(cacheName => cacheName !== staticCacheName)
//         .map(cacheName => caches.delete(cacheName))
//     )
//   });

// self.addEventListener('fetch', event => {
//     event.respondWith(
//       fetch(event.request)
//         .then(res => {
//           const resClone = res.clone();
//           caches
//             .open(staticCacheName)
//             .then(cache => {
//               cache.put(event.request, resClone)
//             })
//           return res
//         }).catch(err => caches.match(event.request).then(res => res))
//     )
//   })

self.addEventListener('install', (event) => {
  // Пропуск установки, если есть предыдущая версия кэша
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Очистка старого кэша при активации нового Service Worker
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== staticCacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // Если ресурс есть в кэше, возвращаем его
        return response;
      }
      // Если ресурса нет в кэше, запрашиваем его из сети и кэшируем
      return fetch(event.request).then((networkResponse) => {
        return caches.open(staticCacheName).then((cache) => {
          // Кэшируем только успешные ответы
          if (networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
      });
    }).catch(() => {
      // Здесь можно вернуть резервный офлайн-ресурс, если запрос не удался
    })
  );
});

