'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f40900985311d94cfc2f0ffcf377ee97",
"assets/AssetManifest.bin.json": "bcb4c3116191729970c334d7565d37ef",
"assets/AssetManifest.json": "ce29404f3df1f5ea3cf352db1fbdd68c",
"assets/assets/images/badminton.png": "133a460c5d3030da837d60a4c435c282",
"assets/assets/images/balls-snooker.png": "6cc1ae5924d2c8b8e2656391198bd054",
"assets/assets/images/bridge.png": "070d314171143ab2e939d3a779deea91",
"assets/assets/images/calendar-search.png": "c328f2779e56eb4fa992000ba287a905",
"assets/assets/images/calendar_clock.png": "2c97c9e71fe2a0462c1abefc5fc0761c",
"assets/assets/images/clubpicture.png": "d06ea530cc9373e511e2a8a2b4f73cd7",
"assets/assets/images/darts.png": "0990a5d6eaaca6830a471324585080cb",
"assets/assets/images/demmosponsorlogo.png": "c860c145d39c71c487a7610d75c2bb68",
"assets/assets/images/demo-logo.png": "a238e676fe276e920faf3034bd8ef134",
"assets/assets/images/demologo.png": "e9c0da8868429040506d4821ccfbdb41",
"assets/assets/images/directory.png": "f93077097c6f7ccd12ff535022c7631f",
"assets/assets/images/edit_profile.png": "a5119a7c6572783242a53f667e2a69a4",
"assets/assets/images/event1.png": "55e2532289e222f789279d4b15e7b3f8",
"assets/assets/images/eventdetails.png": "e61fc96087c251a95dbe71bb8ef8f41e",
"assets/assets/images/facebook.png": "a7c311575f8b24e3e2d9377a0568d6be",
"assets/assets/images/forward_icon.png": "29a2fcf35d6bf05db65c669dfada2179",
"assets/assets/images/Frame.png": "26c5eebae72ee291cac58e7c2df3ebd6",
"assets/assets/images/gallery.png": "64a7970264cecd1332e9921abd3442cf",
"assets/assets/images/golf-ball%25201.png": "200c955b0292711b1ac47ebf44913fb3",
"assets/assets/images/gy.png": "fd77be6c3cdcb83b1b0ceed1caaa93c3",
"assets/assets/images/helpdesk.png": "4b3647d0a5fc5057c317f93713cd1af0",
"assets/assets/images/home.png": "bd9dd25244e15f5a34bbd950223250dc",
"assets/assets/images/insta.png": "f370825d7bd556f51c4cda6fa2c87c1d",
"assets/assets/images/itcdemo.png": "03a0578591ba2415da4c17b4b09a22a5",
"assets/assets/images/jacuzzi.png": "1aa7800d9fc8a4dc99789e0938f371a6",
"assets/assets/images/kidscorner.png": "c09bac6e657a12148f41612ae99e4d3e",
"assets/assets/images/logomain.jpg": "b5c861a7faee02450df05b99ae0a8674",
"assets/assets/images/madhuwan.jpg": "eb5de4d57d34ec247860c97f2854cb34",
"assets/assets/images/madhuwan_demo.png": "dcc0c50de28781a3d245cc0367fdedb0",
"assets/assets/images/mybooking.png": "e6c1ec1ce2de6bdb4ec3858d2f35ed45",
"assets/assets/images/otherbooking.jpg": "691aeb557a576fb45b18e35d31373bd1",
"assets/assets/images/parkhotel.jpg": "48386098f7642c1e9d3261b515856ad3",
"assets/assets/images/profile.jpg": "176cd5741b33d6c4d4b3471a51e9789c",
"assets/assets/images/profileimg.png": "57be857d2b49779c0def47b109b1c197",
"assets/assets/images/profilelogo.png": "604ff8dbfef649d3f4ea8a101024aa33",
"assets/assets/images/profile_img.jpg": "aaf11b996d082f3bf569f0fe260d5059",
"assets/assets/images/profile_imgfull.jpg": "176cd5741b33d6c4d4b3471a51e9789c",
"assets/assets/images/reciprocal_clubs_demo.png": "7ad81ddfda58ae8ebf619ddd375a119f",
"assets/assets/images/rowingbooking.jpg": "a0f7323d22632636b201b99a3972202a",
"assets/assets/images/rowingimg.png": "e22730d95931ab62b01b0cf51a5981bc",
"assets/assets/images/sponsordemo1.png": "135ccb7dd8043966fe5af06fa382e3af",
"assets/assets/images/sportsbooking.jpg": "1347846a773803f8004f0b13a8e57331",
"assets/assets/images/squash.png": "b60176a7351778bf1b2b23e3a073c0a8",
"assets/assets/images/swimming.png": "445f36b7237ae800d4cf10382913f9d6",
"assets/assets/images/tablebooking.jpg": "b39c04721f4945cb031c84acc97d34ec",
"assets/assets/images/tabletennis.png": "0373483f8de6dcd7b1e55eeaf28fe3cc",
"assets/assets/images/Time%2520Icon%25201.png": "6dfb47f1b0fdc2cef3ce4f7c7488af62",
"assets/assets/images/Vector.png": "78b19979175bad6d76322568a136695c",
"assets/assets/images/website.png": "79d10578ac9b1f160dedd2e6e2538125",
"assets/assets/images/whatsapp_icon.png": "9630a5d395b7585ce62ca9c4eb33bc33",
"assets/assets/images/youtube.png": "8bf602eeec629831f753a519fb76a7f7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bea9077533a651935849f39b626826b7",
"assets/NOTICES": "3d079a852909592b76eda4b0799cf79c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d1a18106df3b709792831a7c8a6c3225",
"/": "d1a18106df3b709792831a7c8a6c3225",
"main.dart.js": "8f9bca22d01fa26088b7ae82821af21d",
"manifest.json": "903ec8c00dc62735ee893bc14f2e1331",
"version.json": "2899709f133d150d2f7128b4ce6a8fab"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
