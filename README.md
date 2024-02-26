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

4. Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente
  - creare un contatore (counter) partendo dalla prima img cioè 0
  - devo incrementare e decrementare questo counter quando clicco le frecce
    - creare in HTML gli elementi con freccia, btn top e bottom, richiamarli in js