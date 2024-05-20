import { Observable, map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

// -------------------- //
// Operatoren in Action //
// -------------------- //

// Mit weiteren Operatoren läßt sich die Typ-Ahead-Suche aus dem letzten Beispiel leicht ausbauen:

let input = new Observable(subscriber => {
  setTimeout(() => subscriber.next("r"), 0);
  setTimeout(() => subscriber.next("rx"), 50);
  setTimeout(() => subscriber.next("rxj"), 100);
  setTimeout(() => subscriber.next("rxjs"), 300);
  setTimeout(() => subscriber.next("rxjs "), 500);
  setTimeout(() => subscriber.next("rxjs t"), 700);
  setTimeout(() => subscriber.next("rxjs to"), 850);
  setTimeout(() => subscriber.next("rxjs t"), 900);
  setTimeout(() => subscriber.next("rxjs tu"), 1200);
  setTimeout(() => subscriber.next("rxjs tut"), 1300);
  setTimeout(() => subscriber.next("rxjs tuto"), 1400);
  setTimeout(() => subscriber.next("rxjs tutor"), 1550);
  setTimeout(() => subscriber.next("rxjs tutori"), 1600);
  setTimeout(() => subscriber.next("rxjs tutoria"), 1700);
  setTimeout(() => subscriber.next("rxjs tutorial"), 1800);
});

let search = function(searchString) {
  return new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next(searchString + " - result");
      subscriber.complete();
    }, 50);  
  });
};

// Mit map() wird der Suchstring getrimmt und filter startet die Suche erst, wenn mindeststens 3 
// Zeichen eingegeben wurden. Interessant ist debounceTime(). Hier werden die Items nur weiterleitet,
// wenn zum vorherigem Item eine gewisse Zeit vergangen ist. distinctUntilChanged() filtert
// aufeinanderfolgende Doubletten heraus. Zusammen haben wir mit wenigen Codezeilen eine
// leistungsfähige und gut verständliche Suche implementiert:

input.pipe(
  map(searchString => searchString.trim()),
  filter(searchString => searchString.length >= 3),
  debounceTime(100),
  distinctUntilChanged(),
  switchMap(searchString => search(searchString))
).subscribe(x => console.log(`Next item: ${x}`));

// -- Ausgabe --
// Next item: rxj - result
// Next item: rxjs - result
// Next item: rxjs t - result
// Next item: rxjs tuto - result
// Next item: rxjs tutorial - result