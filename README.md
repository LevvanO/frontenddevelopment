# Procesverslag

Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door _open_ toe te voegen aan een _details_ element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.

## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:

Lev van Oers

#### Je startniveau:

Blauw en misschien een klein stukje rood

#### Je focus:

surface plane

</details>






## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:

Spalding basketbal main: https://spalding-basketball.com/en-nl
spalding basketbal product: https://spalding-basketball.com/nl-nl/collections/all-basketball/products/the-beast-portable-basketball-hoop

#### Screenshot(s) van de eerste pagina (small screen):

index.html
<img src="readme-images/homepage.png" width="375px" alt="homepagina website spalding">

#### Screenshot(s) van de tweede pagina (small screen):

product.html
 <img src="readme-images/productpage.png" width="375px" alt="productpagina website spalding">

</details>

## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

### Bevindingen

Na het doorlopen van de WCAG checklist zijn dit de bevindingen die ik heb gedaan:

CONTENT:
Ik zie niet echt iets wat verkeert is bij spalding als het gaat om content. Ze gebruiken normale woorden en zinnen en alle buttons zijn unique en makkelijk te herkennen

GLOBAL CODE:
-Er zitten best wel veel errors in de validator van inspect. De meeste lijken te gaan over een cookies issue en een issue over een inappropiate value. Voor de rest geen errors
-ze hebben drie million divjes dus het klopt sws niet.
-elke titel heeft een unieke titel
-viewport is te gebruiken

KEYBOARD:
-Er is een visible focus style voor interatieve elementen, maar ik vond het wel lastig te gebruiken, want ik merkte dat ie soms sprong op elementen die ik niet kon zien en dus was ik het kwijt en moest ik soms opnieuw beginnen of veel te klikken om de onderlijning weer te zien. Maar je kan wel elke button bereiken met alleen je toetsenbord

MOBILE AND TOUCH
-als ik de telefoon draai is het nog steeds goed.
-heeft geen horizontale scrolling
-geen buttons die moeilijk te vinden of te klikken. Soms in de footer zitten dingen iets te veel op elkaar.
-Je activeert niks als je scrollt. werkt gwn goed.

HEADINGS
-Alles is h2. Nog goed te volgen
-h1 is het logo
-Het is niet helemaal want alles is een h2 en niet alles is even groot.
-de website skipt h1. Ze hebben van een img een h1 gemaakt. Kan wel maar wel een beetje raar lijkt mij

LISTS:
-er worden li's gebruikt

IMAGES:
-De images hebben geen alt tekst. heel slecht.

MEDIA:
-niet van toepassing

CONTROLS:
-a'tjes worden goed gebruikt voor links
-de footer linkjes zien er niet helemaal uit als een link. maarja hoe ziet een link er precies uit.
-Als ik op tab klik gebeurt er niks. dus het werkt niet goed.
-ze gebruiken buttons goed
-de website heeft geen skip links
-hebben dat niet


</details>

## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

### de hele pagina:

  <img src="readme-images/breakdownschets.png" width="375px" alt="breakdown van de hele pagina">

foto van allebei de paginas

</details>

## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

### Stand van zaken

Ik loop een klein beetje achter, maar dat ga ik dit weekend uiteraard fixen. Ik vind sommige dingen nog best lastig, bijvoorbeeld hoe ik aan bepaalde img's kom. maar dat kan ik vragen in de les.

### Agenda voor meeting

samen met je groepje opstellen
Lev van Oers:

vragen voor de feedback meeting:

1. Waarom is javascript gelinkt in de body?
2. Hoe kan ik producten laten zien door met een knopje naar rechts of links te klikken?
3. Hoe maak je een vakje waar je in kan typen
4. Hoe kan ik de foto van de site dowloaden.

### Verslag van meeting

hier na afloop snel de uitkomsten van de meeting vastleggen

-  dat is hoe is hoort. Want als ie dat als eerste zit kan het wel eens gaan vastlopen
-  Gebruik maken van een carousel. Zorg dat shrink op 0 staat. Maak een ul. en vraag een beetje chatgpt
-  Input tag
-  Download een image downloader.

</details>

## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

### Stand van zaken

ik loop aardig wat achter en struggle best veel met de css. ik heb weinig tijd gehad deze week, maar nog steeds alle tijd die ik had besteed. Helaas was dat niet genoeg. Maar het moet wel goedkomen. Ik probeerde deze week ook al een begin te maken met javascript maar toen kwam ik erachter dat het toch wat moeilijker was dan ik hoopte. Mijn doel is nu om zo snel mogelijk
mijn index.html af te krijgen. dus alle html en css af zodat ik snel kan gaan beginnen met mijn tweede pagina.

### Agenda voor meeting

samen met je groepje opstellen
-   Pls help mij met mijn footer. Ik weet niet hoe ik de list items onder elkaar kan krijgen
-   Hoe maak een slide systeempje
-   waarom zijn met .section2 niet goed responsive


### Verslag van meeting

hier na afloop snel de uitkomsten van de meeting vastleggen

-   Gebruik display:flex en probeer dan flex direction: column om het onder elkaar te krijgen
-   probeer hetzelfde te doen als je deed bij de carousel
-   Je hebt niet goed display: flex gebruikt waardoor het op 1 plek blijft en niet kleiner word als de website kleiner word. probeer display: flex toe te voegen en kloot een beetje met de opties.



</details>

## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

### Bevindingen
CONTENT:
-Normale website. alles ziet er duidelijk uit en je ziet goed wat buttons zijn. Ik gebruik gewoon de zinnen van de website en die waren goed dus zijn ze op mijn website ook goed.

GLOBAL CODE:
-Ik heb er voor gezorgt dat er geen errors zijn in de validator. Dat is dus al beter dan de spalding website zelf. Ook heb ik by far niet zoveel divjes gebruikt als bij de spalding website. Alleen wanneer ze nodig waren volgensmij. Alle sections hebben titels. en elke titel is uniek.
-ik weet niet zo goed wat een viewport is dus ik weet ook niet of het werkt.

KEYBOARD:
-Je kan met tab langs alle buttons en hij switcht niet opeens naar iets randoms zoals gebeurde bij de andere website. Toen ik het teste werkte het wel goed. Hij ging alle buttons langs en a'tjes.
Ook de onderlijning is duidelijk

MOBILE AND TOUCH:
-Als ik de telefoon omdraai ziet de website er helaas zeker niet zo goed uit als het zou moeten. Hij is wel nog soort van bruikbaar en alles staat nog soort van op zijn plek, maar het kan zeker beter. Ik kwam er iets te laat achter dat dit moest dus ik het niet meer echt fixen.
-alle buttons kunnen makkelijk op geklikt worden
-Je activeert niks als je scrollt

HEADINGS:
-Allebei de pagina's beginnen met een h1 en hebben voor de rest gewoon h2'tjes. Allebei de paginas hebben maar 1 h1.
-de headings zijn wel logisch neergezet volgensmij
-ik heb eerst h1 en daarna h2 dus de volgorde klopt.

LISTS:
-ik maak gebruik van li's

IMAGES:
-alle images hebben een alt tekst. opzich allemaal duidelijk

MEDIA:
-niet van toepassing denk ik

CONTROLS:
-Ik gebruik a'tjes voor links
-Je kan de meeste links wel duidelijk zien. In de footer misschien niet helemaal, maar dat is hoe spalding het ook deed en ik zelf had wel meteen door dat het linkjes waren dus heb ik het niet aangepast.
-Er zit een randje om items als je op tab klikt als het goed is. dus dat werkt.
-buttons zijn ook echt gedaan met de button tag op de goeie manier. dus als het niet naar een andere pagina wijst.
-Ik heb geen skip link







</details>

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

### Stand van zaken

Deze week ben ik zwaar aan het grinden. Ik probeer er voor te zorgen dat ik zo snel mogelijk index.html en product.html af heb met css en html zodat ik daarna de puntjes op de i kan zetten. Het duurt veel langer dan ik hoopte maar we blijven gaan. Ik heb veel errors met javascript. Ik ben nu bijna klaar met de index.html.

### Agenda voor meeting

-Hoe zorg je ervoor op een makkelijke manier dat niet alle css overgaat op secttions in de nieuwe pagina? Ik ben bang dat alles gaat overlappen.
- Moet ik alles helemaal uitwerken zoals bijvoorbeeld het hamburger menu


### Verslag van meeting

hier na afloop snel de uitkomsten van de meeting vastleggen

-   Gebruik een id op je main.
-   Nee het hoeft niet perse. stel je hebt nog tijd over op het einde kan je het nog doen.

</details>

## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

### Je uitkomst - karakteristiek screenshots:

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">

### Dit ging goed/Heb ik geleerd:

Ik heb echt vet veel geleerd dit blok. Ik heb veel geleerd van css. Want als je 800 lijnen aan css hebt dan moet het steeds beter gaan uiteindelijk. Ik heb veel nieuwe dingen geleerd zoals: z-index, tranform, :root met kleuren, nth-of-type, Input menus, border bottom en top en nog veel meer. Ook heb ik veel gewerkt met display flex en ben ik daar ook beter mee geworden. dingen zoals flex-direction hebben mij goed geholpen dit project. Ook heb ik geleerd hoe je makkelijk img's kan  pakken van websites met bepaalde downloaders. Ook heb ik geleerd hoe ik chatgpt efficient kan gebruiken ookal vinden docenten dat misschien niet fijn. Het kan heel handig zijn als ik iets niet weet. Ook heb ik geleerd wat een carousel is en ik heb nog werkent gekregen ook. Ik vond het op sommige momenten een heel lastig en vaag project, maar ik heb uiteindelijk wel veel geleerd ookal heb ik het misschien nog niet helemaal af. Ik had wel nog iets meer tijd gewilt.

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">

### Dit was lastig/Is niet gelukt:

Er waren heel veel dingen die ik lastig vond. Met elk stukje code had ik bijna wel moeite. ik heb heel veel moeite gehad met javascript. Daarom ik heb daar ook heel veel hulp gevraagd aan chatgpt omdat ik het echt moeilijk vond en niks lukte zelf. Ook lukte het niet om de javascript ook werkent te krijgen op mijn andere pagina. Om een of andere manier werkt het niet. Ik heb heel veel dingen geprobeerd om het werkent te krijgen, maar uiteindelijk moest ik het laat liggen omdat ik gewoon geen tijd meer had anders voor andere dingen. Ik vind het wel jammer maarja. Je kan niet altijd zes gooien. Ook vond ik het best lastig om de dark modus mooi te maken en vind het nu nog steeds niet heel mooi, maar het werkt wel. Ook de website een beetje responsive maken was wel lastig en koste aardig wat tijd en ben nog steeds niet helemaal blij met het eindresultaat.

Overal wel blij met het eindresultaat.

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>

## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).
Nb. ChatGpT en andere AI horen er ook bij.
Nb. Vermeld de bronnen ook in je code.

 https://chatgpt.com/c/66f697d4-c2dc-800d-81a3-1fa0a0dc081d
 https://www.w3schools.com/

CHAT GPT PROMPTS: 

 -Hamburger menu prompt chatgpt: Hoe zorg ik ervoor dat de list items van .hamburger-menu netjes onder elkaar staan en dat als je het hamburger menu opent dat het bijna het hele scherm bedekt. Alleen een beetje ruimte aan de rechterkant van het scherm.  
  link hele gesprek:
 -https://chatgpt.com/share/66fbff74-108c-800d-b14a-141e4e47115f

 -chatgpt prompt voor het klikken op hamburger menu: Hoe zorg ik ervoor dat als ik op de image hamburger menu klik dat er dan een hamburger menu word geopend

 -vraagje aan chatgpt: hoe zorg ik ervoor dat mijn navbar blijft staan ookal scroll ik naar beneden?

 -chat gpt prompt: hoe zorg ik ervoor bij section2 ul Dat als ik klik op de section2 ul li  content knopje klik dat ik dan links en rechts kan sliden naar de andere list items. (dit was voor de carousel)


 -CHat gpt prompt lang: Hoe zorg ik ervoor dat je in de ul van de .section2 de list items in het midden van de pagina staan en dat links en rechts een beetje kan zien van de list items. En hoe zorg ik ervoor dat de Carousel Smooth doorloopt als ie weer komt bij de eerste list item in plaats van een soort glitch wat ie nu doet?
 
  link hele gesprek
 https://chatgpt.com/share/66fbffb3-91e4-800d-92a2-14abe5e21870

 -chat gpt prompt: Kan je al die section types mooi responsive maken met een beetje ruimte aan de zijkanten van de pagina's. dat de image duss niet de hele pagina overneemt. En dat er een beetje ruimte zit tussen elke nieuwe section.



 Websites waar ik de foto's vandaan heb:
 -  https://spalding-basketball.com/nl-nl
 -  https://spalding-basketball.com/nl-nl/collections/all-basketball/products/the-beast-portable-basketball-hoop

 
images downloader: https://chromewebstore.google.com/detail/image-downloader-imageye/agionbommeaifngbhincahgmoflcikhm?hl=nl
 -  



</details>
