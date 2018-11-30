const CACHE_VERSION = 'v1.1';

// Remove old cache versions
this.addEventListener('activate', function(event) {
  //start removing old cached versions
  var cacheWhitelist = [CACHE_VERSION];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

//on page request, cache the list of files
this.addEventListener('install', function (event) {
  //start caching files
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {

      return cache.addAll([
        '/themes/custom/baby/js/bundle.min.js',
        '/themes/custom/baby/js/sw.js',
        '/modules/custom/parallax_configurator/js/Parallax.js',
        '/themes/custom/baby/img/logo.jpg'
      ]);
    })
  );
});

// if the url is in cache, then use the file from cache and dont make another call
this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        caches.open(CACHE_VERSION).then(function(cache) {
          cache.put(event.request, response);
        });
        return response.clone();
      });
    })
  );
});