Carosello Mono Array
===
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

## SVOLGIMENTO
1. creiamo il markup statico:
  - costruiamo il container e inseriamo un’immagine grande al centro

2. rimuoviamo tutto il markup statico:
  - inseriamo tutte le immagini dinamicamente servendoci dell’array
  - ciclo for che concatena il template literal delle img, tutte le immagini saranno display: none

  3. togliere la classe hide solo alla prima immagine
    - devo prendere tutti gli elementi
    - identificare il primo e togliere la classe hide