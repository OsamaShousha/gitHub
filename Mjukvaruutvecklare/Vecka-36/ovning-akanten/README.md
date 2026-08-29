1- Arv i CSS betyder att vissa CSS-egenskaper automatiskt går från en förälder till dess barn.
 2- (color, font-family, ) some  ofta ärva
 men width, border, backgroung padding och margin inte ärva.
.hero {
    background-color: antiquewhite;
    color: black;
    padding: 2rem;
    margin: 1rem;
    font-family: sans-serif;
}
här är hero som (header section)  är föräldern, elementen inuti är barn som ärva color och font-family från föräldern

3- Problemet är att du får dubbel styling och måste ändra färgen på flera ställen.
.hero {
    color: white;
}

.hero p {
    color: black;
} Då vinner regeln för p, eftersom den är mer specifik.

4- För att hitta ett exempel på arv i CSS letade jag efter en egenskap som sätts på ett föräldraelement och sedan påverkar elementen inuti. Jag valde till exempel .hero, där color och font-family sätts på hela sektionen. Sedan kontrollerade jag att rubriker och stycken inuti .hero fick samma färg och typsnitt utan att jag behövde skriva samma CSS på varje element. Det visar att egenskaperna ärvs från föräldern till barnen.

5- En Hero är den stora första sektionen på en webbsida, ofta högst upp direkt efter header/nav. Den används för att fånga besökarens uppmärksamhet och det innhåller ofta(Stor rubrik, Kort text, knapp/link, bild och tydligt budskap)

6- <head> som är för osynlig meta data( information  till       webbläsaren) som inte visas på webbsidan.
<header> för synlig toppinnehåll på webbsidan

7- För att background ärvs inte normalt i CSS. Om du sätter: 
.hero {
    backdrounf: #0f0f0f;
}
då får själva Hero-lådan bakgrunden. barnet inute ligger ovanpå den bakgrunden, men de ärver inte background. och för att Hero är en sektion/låda. Bakgrunden ska täcka hela sektionen, inte varje barn-element separat.

8- för att jag har inte sitt flex position än.