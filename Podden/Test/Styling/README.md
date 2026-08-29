1- Arv i CSS betyder att vissa egenskaper kan förs vidare från förälderaelement till dess barn.till example om man sätta color eller font-family på bådy , då kan textenelement inuti sidan ärva samma stil.

2- color, font-family. den som inte ärva margin, padding, width.

3- Hero innehålla sidan tydliga toppbudskap
  huvudrubrik (h1), kort introduction text, ibland en knapp eller link.

  4- <h1 id="title">Arv och Hero</h1>
 #title {
    color: blue;
}

`#title` pekar på elementet med `id="title"` och ändrar rubrikens färg.
  
  Hitta elementet, välj rätt selektor och förklara vad CSS-regeln gör i din egen kod.


  Föräldern är `.hero`, barnen är `h1` och `p`, och den ärvda egenskapen är `color`.