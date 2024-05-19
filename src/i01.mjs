import { of } from 'rxjs';

// -------------------------//
// OBSERVABLE und OBSERVER  //
// -------------------------//

// Observable und Observer sind die zentralen Objekte in rxjs.
// Ein Observable emitiert über Callbacks eine Reihe von Werten, ggf. einen Fehler und ein Complete-Signal.
// Observer empfangen diese Werte mithilfe von Callbacks.
// Ein Observable kann keinen, einen, hundert oder unendliche viele Werte emitieren.

// Mit 'of' kann ein Observable erzeugt werden. Es emitiert die übergebenen Werte synchron.
// 'of' ist eine von mehreren creation functions.
console.log("Create an observable.");
let observable = of(1, 2, 3);

// Ein Observer implementiert die drei Callback-Funktionen 'next', 'error' und 'complete'.
// Er kann auch nur eine oder zwei dieser Callbacks implementieren.
console.log("Create an observer.");
let observer = {
  next: x => console.log("Observer got next item: " + x),
  error: err => console.log("Observer got an error: " + err),
  complete: () => console.log("Observer got a complete notification")
}

console.log("Subscribe the observer to the observable.");
observable.subscribe(observer);

console.log("End of code.");

// -- Ausgabe --
// Create an observable.
// Create an observer.
// Subscribe the observer to the observable.
// Observer got next item: 1
// Observer got next item: 2
// Observer got next item: 3
// Observer got a complete notification
// End of code.