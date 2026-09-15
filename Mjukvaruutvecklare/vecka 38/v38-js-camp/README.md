const
const isMember = true;

Jag använder const eftersom värdet på isMember inte ska ändras senare i programmet.

let
let shipping = 79;

Jag använder let eftersom värdet på shipping kan ändras senare:

shipping = 0;

Om kunden är medlem blir frakten alltså 0.

2. Peka på ett anrop med () – vad returneras?

Ett exempel är:

console.log(cities.length);

Här anropas funktionen console.log() med ().

console.log() returnerar normalt undefined, men den skriver ut värdet som skickas till den i konsolen.

Ett annat exempel är:

console.log(cities[0]);

Det skriver ut det första elementet i arrayen:

Malmö
3. Peka på ett === – vad jämförs?

I koden finns:

if (isMember === true)

Här jämförs värdet i isMember med det booleska värdet true.

=== jämför både värde och datatyp.

I detta fall:

isMember → true
true     → true

Båda är av typen boolean, så villkoret blir true.

Kodförståelse
A- Vad är skillnaden mellan deklaration och anrop av en function?

En deklaration skapar och beskriver funktionen:

function hello() {
  console.log("Hej");
}

Ett anrop kör funktionen:

hello();

Kort sagt:

Deklaration = vi skapar funktionen.
Anrop = vi kör funktionen.
B- Varför börjar array-index på 0?

Array-index börjar på 0 eftersom det första elementet ligger på position 0, alltså med ett avstånd på noll positioner från början av arrayen.

Exempel:

const cities = ["Malmö", "Göteborg", "Umeå"];

Index:

0 → Malmö
1 → Göteborg
2 → Umeå

Därför ger:

cities[0]

resultatet:

Malmö
C- Vad betyder undefined när du läser cities[99]?

Arrayen innehåller bara tre element:

const cities = ["Malmö", "Göteborg", "Umeå"];

De giltiga indexen är:

0
1
2

Om jag skriver:

console.log(cities[99]);

finns inget element på index 99.

Därför returneras:

undefined

undefined betyder här att det inte finns något värde på den positionen.