const staticCacheName = 'static_cache_v2';

const assetsUrls = [
  '/iqclinic_PS_opt/index.html',
  '/iqclinic_PS_opt/style.css',
  '/iqclinic_PS_opt/style-critical.css',
  '/iqclinic_PS_opt/assets/js/custom.js'
]

self.addEventListener('install', async event => { 
  const cache = await caches.open(staticCacheName);
  await cache.addAll(assetsUrls);
});
  
self.addEventListener('activate', async event => {
    const cacheNames = await caches.keys();

    await Promise.all(
      cacheNames
        .filter(cacheName => cacheName !== staticCacheName)
        .map(cacheName => caches.delete(cacheName))
    )
  });

self.addEventListener('fetch', event => {
    // event.respondWith(cacheFirst(event.request))
    const {request} = event
  
    const url = new URL(request.url)
    if (url.origin === location.origin) {
      event.respondWith(cacheFirst(request))
    } else {
      event.respondWith(networkFirst(request))
    }
  })

  async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
  }

  async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName)
    try {
      const response = await fetch(request)
      await cache.put(request, response.clone())
      return response
    } catch (e) {
      const cached = await cache.match(request)
      return cached ?? await caches.match('/offline.html')
    }
  }