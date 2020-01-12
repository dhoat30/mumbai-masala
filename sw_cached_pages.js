const cacheName = 'v1';

const cacheAssets = [
  'photos/about-us-600px.png',
	'photos/hero-section-bowl.png',
	'photos/bar.jpg', 
	'photos/chef-holding-naan.jpg', 
	'photos/family-combo.jpg', 
	'photos/celebrate-section-photo800px.jpg', 
	'photos/chicken-in-tandoor-600.jpg', 
	'photos/reserve-table-600.jpg', 
	'photos/lunch-menu.svg', 
	'photos/dine-in-menu.svg', 
	'photos/takeaway-menu.svg', 
	'photos/tandoori-chicken-600.jpg',
	'photos/customer-dine-photo-600.jpg', 
	'photos/catering600px.jpg',
	'photos/naan-in-a-plate-600.jpg', 
	'photos/background-design.svg'
];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
