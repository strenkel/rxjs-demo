import { Observable, map, switchMap } from 'rxjs';

// ------------------------ //
// HIGHER-ORDER OBSERVABLES //
// ------------------------ //

// RxJS mit seinen Operatoren spielt seine Stärke aus, wenn mehrere Observables zusammen spielen.
// Beispiel: Type-Ahead-Suche.
// Die Eingabe eines INPUT-Element wird in ein Observable gespeist.
// Dieses Observable emitiert die Such-Eingabe des Users: "r", "rx", "rxj", ...
// Diese Werte sollen per HTTP-Request an einen Server geschickt werden, der das Suchergebnis zurückschickt.
// Die Antwort des HTTP-Request soll ein Observable sein, das genau einen Wert, das Suchergebnis, emitiert:

// Simulation der Sucheingabe.
let input = new Observable(subscriber => {
  setTimeout(() => subscriber.next("r"), 0);
  setTimeout(() => subscriber.next("rx"), 10);
  setTimeout(() => subscriber.next("rxj"), 40);
  setTimeout(() => subscriber.next("rxjs"), 50);
});

// Simulation des Http-Requests.
let search = function(searchString) {
  return new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next(searchString + "-result");
      subscriber.complete();
    }, 20);
  });
};

// Nun kann man die Suchstrings mit dem Map-Operator elegant der Suche übergeben:
// Damit erhält man einen Observable, das Observables emmitiert, ein sogenanntes Higher-Order Observable:

const higherOrderInputSearch = input.pipe(
  map(searchString => search(searchString))
);

// Wir sind jedoch an dem Suchergebnis und nicht an einem Observable, dass das Suchergebnis emitiert, interessiert.
// Wir müssen die beiden Datenströme wieder zusammengeführt. Dazu gibt es verschiedene Merge-Strategien.
// Zunächst mappen alle Merger den Suchstring direkt auf das Suchergebnis.
// Die entscheidende Frage ist, was passieren soll, wenn man den nächsten Suchstring erhält, bevor man das letzte
// Suchergebnis erhalten hat. Man könnte die Suchergebnisse in ihrem zeitlichen Eintreffen zurückgegen (mergeMap)
// oder in der Reihenfolge, die durch die Sucheingaben vorgegeben ist (concatMap). Beides ist in unseren Use-Case
// nicht sinnvoll. Sobald ein neuer Suchstring emitiert wird, interessiert uns das alte Suchergebnis nicht mehr.
// Die alte Subscription sollte beendet werden und das veraltete Suchergebnis erst garnicht im Ergebnis-Stream
// auftauchen. Das macht switchMap:

let inputSearch = input.pipe(
  switchMap(searchString => search(searchString))
);

// Mit dieser simplen Verknüpfung haben wir eine Suche implementiert, die veraltete Suchergebnisse nicht anzeigt
// (Race-Problem gelöst) und die die Möglichkeit bietet, veraltete Requests abzubrechen.
// Hier sieht man die Eleganz und Stärke von RxJS.
//
// Nun können wir die Suchergebnisse ausgeben:

inputSearch.subscribe(x => console.log(`Next item: ${x}`));

// -- Ausgabe --
// Next item: rx-result
// Next item: rxjs-result