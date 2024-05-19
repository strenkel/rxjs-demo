import { of, map, filter, tap } from 'rxjs';

// -----------//
// Operatoren //
// -----------//

// Das Herzstück von RxJS sind seine (pipeable) Operatoren.
// Mit Operatoren kann komplexer asynchroner Code mit mehreren Observables übersichtlich gehändelt werden.
// Sie sind vielleicht die aktuell beste Lösung für die Callback-Hölle.
//
// Zunächst muss man zwischen Pipeable und Creation Operatoren unterscheiden.
// Creation Operatoren erzeugen Observables. Hier haben wir schon 'of' kennen gerlernt.
// Es erzeugt ein Observable, dass die übergebenen Werte emitiert. Aktuell gibt es 15 dieser Creation Operatoren.
//
// Wichtiger sind die sogenannten Pipeable Operatoren. Das sind Funktionen, die ein Observable entgegennehmen und
// ein neues Observable zurückgeben. Eine Subscription auf das zurückgegebene Observable ist gleichzeitig eine Subscription
// auf das entgegengenomme Observable. Das ursprüngliche Observable wird nicht verändert.
//
// Häufig treten Pipeable Operatoren in Form von Pipeable Operator Factory's auf. Das sind Funktionen, die noch Parameter
// entgegen nehmen und daraus dann den eigentlichen Operator erzeugen. Operatoren und Operator Factory's werden meist
// nicht unterschieden. Beide werden als Operatoren bezeichnet.
//
// Operatoren werden meist hintereinander geschachtet: Observable_1 => Operator_1 => Observable_2 => Operator_2 => ...
// Das geschiet mit Hilte der pipe() - Methode.
//
// RxJS kennt mehr als hundert Operatoren.

// Zwei einfache Operatoren sind map() und filter(). Sie funktionieren analog den gleichnamigen Array-Methoden.
// tap() ist Operator, der das Observable unverändert zurückgibt. Er dient nur dazu, Zwischenergebnisse für Seiteneffekt zu nutzen.
// Er sollte sparsam verwendet werden.
of(1, 2, 3, 4).pipe(
  tap(x => console.log(`Original item: ${x}`)),
  filter(x => x % 2 === 0),
  map(x => x * x),
).subscribe(x => console.log(`Subscribed item: ${x}`));

// -- Ausgabe --
// Original item: 1
// Original item: 2
// Subscribed item: 4
// Original item: 3
// Original item: 4
// Subscribed item: 16