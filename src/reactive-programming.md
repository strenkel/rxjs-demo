---
marp: true
theme: gaia
---

## Reactive Programmierung

- Was ist das?
- Ist es sinnvoll?

---

## Ausgangspunkt

- Quarkus
- Vereinigt imperative und reaktive Programmierung

---

## Das Java-Thread-Problem

- Jeder Request benötigt einen Thread
- Threads sind teuer
- Threads sind begrenzt (< 2000?)

---

## Lösung 1

- Reactive Programmierung
- Threads werden freigegeben, sobald sie blockieren (z.B. DB-Abfrage)
- Event-Loops (Vert.x)
- Viele Requests teilen sich einen Thread

---

## Lösung 2

- Projekt Loom
- Virtuelle Threads
- 1.000.0000 virtuelle Threads problemlos möglich

---

## Fazit 1

- "Mit Reactive Programming werden Performanceprobleme gelöst, die durch die Verwendung von Native Threads und das Paradigma 'Ein Thread pro Request' entstehen."

- "Man erkauft sich diese Lösung allerdings mit höherer Entwicklungs- und Wartungskomplexität, da unter anderem Testing und Debugging komplizierter werden."

---

## Fazit 2

- "Man darf gespannt sein, welche Auswirkungen Project Loom auf die Verbreitung von Reactive Programming haben wird. Aus Performancesicht würde es dadurch vermutlich überflüssig."

[Arne Limburg 2019](https://entwickler.de/programmierung/kolumne-enterprisetales-050)

---

## Reactive Streams

- Standard (API) für asynchrone Stream-Processing
- 2013 von Netflix, Pivital und Lightbend entwickelt
- www.reactive-streams.org

---

## Reactive Stream API

**Vier Interfaces**

- Publisher
- Subscriber
- Subscription
- Processor

---

## 

