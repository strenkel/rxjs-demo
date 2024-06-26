import { Observable } from 'rxjs';

// -------------------------------------- //
// KALT und HEISS | UNICAST und MULTICAST //
// -------------------------------------- //

// Man unterscheidet zwischen kalten und heißen, sowie unicast und multicast Observables.
//
// Kalte Observables emitieren nur Werte, wenn sie subscribed werden.
// Der Producer innerhalb des Observables wird erst aufgerufen, wenn man subscribed.
// Kalte Observables verhalten sich also nicht wie Event Emitter, sondern wie verallgemeinerte Funktionen.
// Erst wenn das Observables subscribed wird, wird es 'aufgerufen' und gibt seine Items zurück.
// Es ist eine verallgemeinerte Funktion, weil es nicht nur ein Item, sondern mehrere Items zurückgeben kann.
//
// Heiße Observables produzieren unabhängig von einer Subscription Items. Subscribed ein Observer auf ein heißes
// Observable erhält er diese Items. Heiße Observables funktionieren wie Event-Emitter.
//
// Bei unicast Observables erhält jeder Observer seine eigenen Werte.
// Der Producer wird jedesmal neu aufgerufen.
// 
// Bei multicast Observables erhalten alle Observer dieselben Items.
//
// Http-Requests sind i.d.R. kalt und unicast; Click-Events sind heiß und multicast.
//
// Die bisher vorgestellten Observables sind kalt und unicast.

console.log("Create a cold, unicast observable.");
const observable = new Observable(subscriber => {
  console.log("Producer is called.");
  subscriber.next(Math.random());
  subscriber.complete();
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

console.log("End of code.");

// -- Ausgabe --
// Create a cold, unicast observable.
// First subscription.
// Producer is called.
// First observer got next item: 0.994675180133572
// First observer got a complete notification
// Second subscription.
// Producer is called.
// Second observer got next item: 0.4573076639295828
// Second observer got a complete notification
// End of code.