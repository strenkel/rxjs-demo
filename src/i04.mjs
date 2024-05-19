import { Observable } from 'rxjs';

// -----------------------//
// Asynchrone Observables //
// -----------------------//

// Observables sind i.d.R asynchron:
// Click-Events, Tastatureingaben, Ajax-Requests, Websocket-Streams usw.

console.log("Create a cold, unicast, async observable.");
let observable = new Observable(subscriber => {
  console.log("Subscriber is called.");
  setTimeout(() => subscriber.next(Math.random()), 0);
  setTimeout(() => subscriber.next(Math.random()), 10);
  setTimeout(() => subscriber.complete(), 20);
});

console.log("First subscription.");
observable.subscribe({
  next: x => console.log("First observer got next item: " + x),
  error: err => console.log("First observer got an error: " + err),
  complete: () => console.log("First observer got a complete notification.")
});

console.log("Second subscription.");
observable.subscribe({
  next: x => console.log("Second observer got next item: " + x),
  error: err => console.log("Second observer got an error: " + err),
  complete: () => console.log("Second observer got a complete notification.")
});

console.log("End of code. Async output starts here.");

// -- Ausgabe --
// Create a cold, unicast, async observable.
// First subscription.
// Subscriber is called.
// Second subscription.
// Subscriber is called.
// End of code. Async output starts here.
// First observer got next item: 0.6118109035695127
// Second observer got next item: 0.49202779272414543
// First observer got next item: 0.47923596006409297
// Second observer got next item: 0.34944729422544674
// First observer got a complete notification.
// Second observer got a complete notification.