# RD Doku – Version 1.0 auf das iPhone bringen

Die App besteht aus diesen Dateien. Alle müssen zusammen hochgeladen werden:

- `index.html` – die App
- `manifest.webmanifest` – Name, Farben und Icon für den Home-Bildschirm
- `sw.js` – Offline-Speicher, damit die App ohne Netz läuft
- `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` – App-Icons

## 1. GitHub-Account anlegen (einmalig)

1. Auf **github.com** gehen und auf **Sign up** tippen.
2. E-Mail, Passwort und Benutzername eingeben. Der Benutzername steht später in der Adresse der App, z. B. `cedric-rd`.

## 2. Ablage (Repository) anlegen

1. Oben rechts auf **+** und dann **New repository**.
2. Name: `rd-doku`
3. **Public** auswählen (GitHub Pages ist für öffentliche Ablagen kostenlos).
4. **Create repository** antippen.

## 3. Dateien hochladen

Am einfachsten am Computer, geht aber auch am iPhone in Safari.

1. In der neuen Ablage auf **uploading an existing file** tippen.
2. Die ZIP-Datei vorher entpacken und **alle 7 Dateien** (nicht den Ordner) hineinziehen bzw. auswählen.
3. Unten auf **Commit changes** tippen.

## 4. GitHub Pages einschalten

1. In der Ablage auf **Settings** und links auf **Pages**.
2. Bei **Source**: **Deploy from a branch** wählen.
3. Bei **Branch**: `main` und Ordner `/ (root)` wählen, dann **Save**.
4. Nach 1–2 Minuten steht dort die Adresse, z. B. `https://cedric-rd.github.io/rd-doku/`

## 5. Auf dem iPhone installieren

1. Die Adresse in **Safari** öffnen (nicht in Chrome oder einer anderen App).
2. Unten auf **Teilen** (Quadrat mit Pfeil) und dann **Zum Home-Bildschirm**.
3. Name bestätigen und **Hinzufügen** antippen.
4. Die App einmal über das neue Icon öffnen, solange du Netz hast. Danach funktioniert sie auch offline.

## Updates einspielen

1. Neue `index.html` in der Ablage hochladen und die alte ersetzen.
2. In `sw.js` die Zeile `const CACHE="rd-doku-v1.0";` hochzählen, z. B. auf `v1.1`, und ebenfalls hochladen.
3. Die App auf dem iPhone einmal mit Netz öffnen, schließen und erneut öffnen. Dann ist die neue Version aktiv.

## Hinweise

- Die Adresse ist öffentlich, die App enthält aber keine Patientendaten. Alles, was du eintippst, bleibt nur auf deinem iPhone gespeichert.
- Keine Namen, Geburtsdaten oder andere identifizierende Angaben in das Ergänzungsfeld schreiben.
- Ob private Geräte zur Vorbereitung der Dokumentation genutzt werden dürfen, vorher mit dem Arbeitgeber klären.
