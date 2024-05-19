import { Observable } from 'rxjs';

// --------------------- //
// OBSERVABLE's erzeugen //
// --------------------- //

// Die flexibelste Art, Observables zu erzeugen, ist der Konstruktor.
// Das folgende Observable ist identisch mit of(1, 2, 3).
let observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

observable.subscribe({
  next: x => console.log("Observer got next item: " + x),
  error: err => console.log("Observer got an error: " + err),
  complete: () => console.log("Observer got a complete notification")
});

// Der Observer, also das Objekt mit den Methoden next, error und complete, wird innerhalb des Observables in einen
// Subscriber umgewandelt und entsprechend der Funktion, die dem Konstruktor übergeben wurde, aufgerufen.

// -- Ausgabe --
// Observer got next item: 1
// Observer got next item: 2
// Observer got next item: 3
// Observer got a complete notification