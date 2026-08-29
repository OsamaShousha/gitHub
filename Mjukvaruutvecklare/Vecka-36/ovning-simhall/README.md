# Flex vs Grid

Grid används när jag vill bygga en yta med både kolumner och rader, som en tavla eller ett schema.

Den här simhallstavlan är Grid eftersom banor och tider behöver ligga i ett rutnät där man kan jämföra platser bredvid och under varandra.

Flex skulle jag välja om saker mest ska ligga i en rad eller kö, till exempel kort bredvid varandra eller knappar i en grupp.




# Prompt till AI

Gör en enkel öppettider-tavla för ett bibliotek med HTML och CSS. 
Använd CSS Grid för själva tavlan med minst fyra celler. 
Lägg CSS i en separat style.css-fil. 
Använd inte inline style, ingen nav-meny och inga media queries. 
Jag vill kunna förklara varför Grid sitter på föräldern.

# Feedback på AI-förslaget

FEEDBACK: AI har inline style direkt i HTML, till exempel style="display: grid;" → jag flyttar all styling till style.css så HTML bara beskriver innehållet. för att blir bättre läsbarhet och återanvadbarhet

FEEDBACK: AI sätter display: grid på flera barn-divar → jag vill ha Grid på föräldern som håller i alla celler, annars blir varje ruta ett eget mini-grid.

FEEDBACK: grid-template-columns: 1fr eller 200px ger bara en tydlig kolumn → jag ändrar till minst två kolumner, till exempel 1fr 1fr.

FEEDBACK: div { display: grid; } påverkar alla div-element på sidan → jag använder en tydlig klass, till exempel .tavla, så bara rätt behållare blir Grid.

FEEDBACK: .card med display: flex blandas in utan att det behövs för öppettiderna → jag tar bort kort-layouten eftersom uppgiften handlar om en tavla med rader och kolumner.



# Grid-val

AI-förslaget var svagt eftersom det blandade inline style i HTML och satte display: grid på flera barn i stället för på den gemensamma föräldern.

Jag flyttade layouten till style.css, satte display: grid på .tavla och gjorde en tydlig kolumnmall med 1fr 1fr 1fr.

Valet Flex vs Grid spelar roll i Examination 1 eftersom jag måste kunna välja rätt verktyg: Grid för en tavla med rader och kolumner, Flex för en kö eller rad med liknande kort.