Semantisk HTML (Rensat onödiga div-element): 
Skifte till Flexbox (display: flex):
Flexbox gap i stället för margin:
Centrering med justify-content: center
Eftersom varje Highlight-kort har samma struktur (bild + text) och bara ska visas i en enkel rad (som bryter naturligt på mindre skärmar), behöver du inte CSS Grids tunga tvådimensionella ramverk. Du motiverar att Flexbox ger rätt verktyg för uppgiften: det hanterar innehållets fördelning i en axel åt gången, håller koden ren och låter gap och justify-content: center sköta den responsiva anpassningen automatiskt.