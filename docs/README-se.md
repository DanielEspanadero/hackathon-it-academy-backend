# 🎲 TÄRNINGSSPEL 🎲

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/dices.jpeg)

_Detta projekt har utvecklats från grunden av [Daniel Españadero](https://github.com/DanielEspanadero)._

_Ansökan skapad för klassificeringen av [IT Academy](https://cibernarium.barcelonactiva.cat/it-academy/inscripcio) hackathon - Backend organiserad av [Nuwe](https://nuwe.io)._

_För att möta alla krav (och lite extra) bestämde jag mig för att remastera en av de första API:erna jag gjorde, som består av ett 🎲 tärningsspel 🎲 med mycket mer avancerade koncept än då, såsom tillämpningen av SOLID-principer eller abstraktionslager i de olika funktionerna i applikationen._


## Översättningar 💬

_Denna README-fil är även tillgänglig på andra språk:_
- [katalanska](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-cat.md)
- [franska](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-fr.md)
- [tyska](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-de.md)
- [italienska](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-it.md)
- [Portugisiska](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-pt.md)
- [engelska](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-en.md)
- [spanska](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/README.md)


## Mål 🎯

_För att få en plats i finalen ombeds vi att uppfylla följande mål:_

_✅ Uppgift 1 → API:n måste vara tillgänglig på port: 3000. - COMPLETED_

_✅ Uppgift 2 → Rutter kommer att tillhandahållas för de operationer som är markerade i uttalandet. - COMPLETED_

_✅ Uppgift 3 → Om ett försök görs att fråga en obefintlig rutt måste den besvaras med en 404-svarskod. - COMPLETED_

_✅ Uppgift 4 → Rutterna för att utföra operationerna för varje modell måste separeras. - COMPLETED_

_✅ Uppgift 5 → Modellerna måste lagras i en databas (SQL, MongoDB, etc.), varje begäran som görs i API:t måste göra en fråga i databasen för att kunna returnera lämplig information. - COMPLETED_

_✅ Uppgift 6 → Rutterna måste uppfylla de specifikationer som anges i uttalandet. - COMPLETED_

_✅ Uppgift 7 → Följ strukturen som föreslagits för filsystemet i uttalandet. - COMPLETED_

_✅ Uppgift 8 → Testa med Postman. - COMPLETED_


## Börjar 🚀

_De här instruktionerna låter dig få en arbetskopia av projektet på din lokala dator för utvecklings- och testsyften._


### Förutsättningar 📋

_För att projektet ska fungera korrekt rekommenderas det att ha en serie program installerade och korrekt konfigurerade:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js och npm](https://nodejs.org/es/)
- [Postman](https://www.postman.com/)


### Installation 🔧

_När du har klonat detta projekt i ditt lokala arkiv kom ihåg att köra följande kommando i terminalen för att installera beroenden och att allt fungerar korrekt:_
```
npm installera
```


### Miljövariabler .env 🪛

_För att projektet ska fungera korrekt måste du aktivera miljövariablerna, för detta måste du skapa en fil med namnet `.env` och ange den data du har i mallen `.config.env`._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/01.png)

### Kommandon att köra ⌨️

_När alla nödvändiga program och beroenden är installerade, kör helt enkelt kommandot:_
```
npm init
```
_Eller så kan du också ange kommandot för utvecklingsversionen:_
```
npm kör dev
```

## Projektarkitektur 🛡

_Rätt organisation av projektstrukturen kommer att undvika kodduplicering, förbättra stabiliteten och underlätta skalbarhet._

### Struktur 🏢

_Här kan du se strukturen jag använder för projektet:_

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/02.png)

### 3 lager arkitektur 🥪

_Tanken är att använda **enansvarsprincipen**._

_Jag jobbar mycket med att försöka separera affärslogiken från kontrollerna för om jag inte separerar den kommer den snabbt att förvandlas till spagettikod._

### Beroendeinjektion 💉

_Beroendeinjektion är ett mönster som hjälper mycket att organisera koden genom att "injicera" eller passera genom konstruktorn beroenden för en klass eller funktion._

### Inställningar ⚙️

_I config-mappen har jag centraliserat alla miljövariabler och konfigurationer av applikationen för att underlätta åtkomst och modifiering av dessa i händelse av att applikationen skalas._


## Så fungerar appen 🛠

_🎲 Idén med det här projektet är ett spel avtärningar med olika funktioner som:_

 - Användarregistrering.
 - Logga in.
 - Kasta tärning.
 - Övergripande ranking.
 - Skaffa den bästa spelaren.
 - Få den sämsta spelaren.
 - Ta bort en spelares spel.
 - Ändra namn och efternamn på en spelare.
 - Ta bort en användare.
 - Få en spelare genom hans ID.

_Förutom för inloggning och registrering är alla rutter skyddade och för att komma åt dem måste en Json Web Token tillhandahållas i rubrikerna med 'auktoriseringsnyckeln' som genereras vid korrekt registrering eller inloggning._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/03.png)

### Appsökvägar 🚏

_Registrering - POST_
```
http://localhost:3000/auth/register
```
_Logga in - POST_
```
http://localhost:3000/auth/login
```
_Hämta alla spelare - GET_
```
http://localhost:3000/players/get-all-players
```
_Få en spelare - GET_
```
http://localhost:3000/players/get-player/:id
```
_Uppdatera namn och efternamn på en spelare - PUT_
```
http://localhost:3000/players/update-player/:id
```
_Ta bort spelare - DELETE_
```
http://localhost:3000/players/delete-player/:id
```
_Spelaren kastar tärningen - POST_
```
http://localhost:3000/games/player/:id
```
_Total ranking - GET_
```
http://localhost:3000/games/ranking
```
_Bästa spelare - GET_
```
http://localhost:3000/games/better-player
```
_Sämsta spelare - GET_
```
http://localhost:3000/games/worst-player
```
_Ta bort en spelares drag - DELETE_
```
http://localhost:3000/games/delete/62d874b9d1bb66e79a9e23d9
```


## Byggd med 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programmeringsspråk som används.
* [Node.js](https://nodejs.org/es/docs/) - Miljö för att köra JavaScript på serversidan.
* [Express](https://www.npmjs.com/package/express) - node.js ramverk.
* [NPM](https://www.npmjs.com/) – Beroendehanterare.
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mekanism för att kunna sprida mellan två parter, och säkert, identiteten för en viss användare, även med en rad anspråk eller privilegier.
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Modul för lösenordskryptering.
* [Cors](https://www.npmjs.com/package/cors) - Är en webbläsarsäkerhetsfunktion som begränsar HTTP-förfrågningar som initieras från skript som körs i webbläsaren.


## Versionerad 📌

_Jag har använt semantiska versioner [SemVer](http://semver.org/) för denna applikation._


## Författare ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Hela projektet*


## Licens 📄

_Detta projekt är licensierat under MIT-licensen - se filen [LICENSE](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/LICENSE) för mer information._