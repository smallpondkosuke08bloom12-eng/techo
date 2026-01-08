self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("techo").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    })
  );
});
