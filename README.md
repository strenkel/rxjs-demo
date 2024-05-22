# RxJS-Demo

[Reactive Extensions for JavaScript (RxJS)](https://rxjs.dev/) ist eine Bibliothek für reaktive Programmierung. Um diese Bibliothek näher zu bringen, habe ich hier einige einfache Codebeispiele versammelt.

### Warum RxJS

Events sind in der JavaScript-Welt allgegenwärtig. User-Einagben per Mouse und Tastatur lösen Events aus, die Antwort eines Http-Requests ist ein Event, WebSockets liefern einen Stream von Events, ebenso wie die Geolocation-API.
Die Stärke von RxJS besteht darin, für die im Kern unterschiedlichen Events, ein einheitliches Framework bereitzustellen. Gerade wenn mehrere Events zusammengeführt werden müssen, oder wenn Events weitere Events auslösen, bietet RxJS mit seinen über hundert Operatoren die Basis für übersichtlichen und leistungsstarken Code.

### Callback - Hölle

Klassisch werden Events mit Callback-Funktionen gehandelt. Dies ist eine der großen Stärken von JavaScript. Muss man jedoch auf viele Events reagieren, kann es schwer sein, das übersichtlich zu programmieren. Man landet in der sogenannten Callback-Hölle.

### Promises and async/await

Mit Promises (ES2015) und async/await (ES2017) gibt es wohletablierte Lösungen für die Callback-Hölle. Doch auch diese Lösung stößt an ihrer Grenzen. Müssen mehrere Events zusammen geführt werden, bieten Promises und async/await keine weitere Unterstützung an.

RxJS scheint mir hier der nächste Schritt zu sein.

## Getting started

Um die Codebeispiele auszufüfren, muss man lediglich [Node](https://nodejs.org) installiert haben. Das Projekt installiert man mit:  

    npm install

Die einzelnen Code-Beispiele führt man dann im Ordner `src` mit node aus:  

    node i01.mjs