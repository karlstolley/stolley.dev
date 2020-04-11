var VERSION;
const version = VERSION ? VERSION : mockTenMinuteVersion();

// Update with all essential and supporting assets
// (supporting assets might be things URLs to externally hosted web fonts)
// There can be NO errors here, or nothing will be cached
const site_offline_path = '/offline/';
const site_preloaded_assets = {
  essential: [
    '/assets/css/screen.css',
    '/assets/js/site.js',
    '/',
    site_offline_path
  ],
  supporting: []
};

const site_cache_of = {
  assets: `assets.${version}`,
  pages: `pages`,
  requests: `requests`
};


// For convenience in the activation event, programmatically build a simple array
// of the names of all the caches listed in the site_caches object literal
const site_cache_list = [];
for (let c in site_cache_of) {
  site_cache_list.push(site_cache_of[c]);
}


// The first step in a ServiceWorker's life cycle is to install it...
addEventListener('install', function(e) {
  console.log('Preparing to install the service worker...');
  // shorthand for ServiceWorkerGlobalScope.self
  // see https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self
  // documentation for skipWaiting() at
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting
  self.skipWaiting();
  e.waitUntil(
    caches.open(site_cache_of.assets)
    .then(function(c) {
      // non-essential/nice-to-have assets are added asynchronously
      c.addAll(site_preloaded_assets.supporting);
      // *synchronously* add only for essential assets and fallbacks
      return c.addAll(site_preloaded_assets.essential);
    })
    .catch(function(e) {
      console.error('Caches error:', e);
    })
  );
// end install event listener
});

// Once the ServiceWorker has been installed, it must be activated. Ordinarily, that will only
// happen if all tabs and windows open to your site on a user's computer are closed. But the
// call to skipWaiting() above is more aggressive, and activates the ServiceWorker immediately.
// The primary tasks of the activate event function is to check all existing caches and delete
// any that aren't listed in the site_cache_list created above
addEventListener('activate', function(e) {
  console.log('The service worker is activated!');
  e.waitUntil(
    caches.keys()
    .then(function(existing_caches) {
      return Promise.all(
        existing_caches.map(function(existing_cache) {
          if (!site_cache_list.includes(existing_cache)) {
            return caches.delete(existing_cache);
          }
        })
      );
    })
    .then(function(){
      // see https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
      return clients.claim();
    })
  // end waitUntil
  );
// end activate event listener
});

// Now we get to the main monkey business: intercepting fetch events and instructing the browser
// whether to read from a cache, try the network, and so on.

addEventListener('fetch', function(fe) {
  // hold onto a copy of the original request
  const request = fe.request;
  // Pages: Try the network first; if it's available, cache and return the page; otherwise, serve
  // from the cache if it exists, or respond with the offline HTML
  if (request.headers.get('Accept').includes('text/html')) {
    fe.respondWith(
      fetch(request)
      .then(function(fetch_response) {
        const copy = fetch_response.clone();
        fe.waitUntil(
          caches.open(site_cache_of.pages)
          .then(function(this_cache) {
            this_cache.put(request,copy);
          })
        );
        return fetch_response;
      })
      .catch(function(error) {
        return caches.match(request)
        .then(function(cached_response) {
          if (cached_response) {
            return cached_response;
          }
          return caches.match(site_offline_path);
        });

      })
    // end respondWith
    );
    return;
  }

  // External requests: Try the cache first; update the cache from the network
  if (!request.url.includes(location.hostname)) {
    fe.respondWith(
      caches.match(request)
      .then(function(cached_response) {
        if (cached_response) {
          fe.waitUntil(
            fetch(request)
            .then(function(fetch_response){
              caches.open(site_cache_of.requests)
              .then(function(this_cache){
                return this_cache.put(request, fetch_response);
              });
            })
          );
          return cached_response;
        }
        return fetch(request)
        .then(function(fetch_response) {
          const copy = fetch_response.clone();
          fe.waitUntil(
            caches.open(site_cache_of.requests)
            .then(function(this_cache) {
              this_cache.put(request, copy);
            })
          );
          return fetch_response;
        });
      })
    // end respondWith
    );
    return;
  }

  // Everything else: try the cache first, then the network; if the network fails, respond with the
  // offline site path
  fe.respondWith(
    caches.match(request)
      .then(function(cached_response) {
        if (cached_response) {
          return cached_response;
        }
        return fetch(request)
        .catch(function(error) {
          return caches.match(site_offline_path);
        })
      }
    )
  );

// end fetch event listener
});


// Helper and utility functions

function mockTenMinuteVersion() {
  var d = new Date();
  var year = d.getFullYear().toString();
  var month = (d.getMonth() + 1).toString();
  var date = d.getDate().toString();
  var mins = new Date().getMinutes();
  mins = Math.floor(mins/10).toString();
  return year + '.' + zeroPad(month) + '.' + zeroPad(date) + '-' + zeroPad(mins);
  function zeroPad(num,n = 2) {
    num = num.toString();
    while (num.length < n) {
      num = '0' + num;
    }
    return num;
  }
}
