const CACHE_NAME='v20'
const CACHE_FILES=['./','./manifest.json','./index.html','./js/bundle.min.js','./images/icon-1x.png','./images/eggens.png','./images/ic_arrow_back_white_24dp_1x.png']
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(cache=>{return cache.addAll(CACHE_FILES)}))})
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(cacheNames=>{return Promise.all(cacheNames.map(thisCacheName=>{if(thisCacheName!==CACHE_NAME){return caches.delete(thisCacheName)}}))}))})
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(response=>{if(response){return response}var fetchRequest=e.request.clone();return fetch(fetchRequest).then(response=>{if(!response){return response}
var responseToCache=response.clone();caches.open(CACHE_NAME).then(cache=>{cache.put(e.request,responseToCache)});return response})}).catch(err=>{}))})
