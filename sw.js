// Offline-Speicher für RD Doku. Bei jedem Update die Versionsnummer erhöhen.
const CACHE="rd-doku-1.2.0";
const FILES=["./","index.html","manifest.webmanifest","apple-touch-icon.png","icon-192.png","icon-512.png","icon-maskable-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"];
// PDFs im selben Ordner (falls vorhanden) gleich mit für offline speichern
const PDFS=["kompendium.pdf","GemKompRD2026.pdf","Kompendium.pdf","begleitheft.pdf","Begleitheft-Medikamente 2026.pdf","Begleitheft-Medikamente-2026.pdf","Begleitheft.pdf"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all([...FILES,...PDFS].map(f=>c.add(f).catch(()=>{})))));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))));self.clients.claim()});
// Erst Netz (für Updates), bei fehlendem Netz aus dem Speicher
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok||r.type==="opaque"){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match("index.html"))));
});
