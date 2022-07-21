# 🎲 WÜRFELSPIEL 🎲

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/dices.jpeg)

_Dieses Projekt wurde von [Daniel Españadero](https://github.com/DanielEspanadero) von Grund auf neu entwickelt._

_Anwendung erstellt für die Klassifizierung des Hackathons der [IT-Akademie](https://cibernarium.barcelonactiva.cat/it-academy/inscripcio) - Backend organisiert von [Nuwe](https://nuwe.io)._

_Um alle Anforderungen (und einige zusätzliche) zu erfüllen, habe ich mich entschieden, eine der ersten von mir erstellten APIs zu remastern, die aus einem 🎲 Würfelspiel 🎲 besteht und viel fortschrittlichere Konzepte als damals verwendet, wie z. B. die Anwendung von SOLID-Prinzipien oder Abstraktionsschichten die verschiedenen Funktionalitäten der Anwendung._


## Übersetzungen 💬

_Diese README-Datei ist auch in anderen Sprachen verfügbar:_
- [Katalanisch](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-cat.md)
- [Französisch](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-fr.md)
- [Spanisch](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/README.md)
- [Italienisch](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-it.md)
- [Portugiesisch](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-pt.md)
- [Englisch](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-en.md)
- [Schwedisch](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-se.md)


## Ziele 🎯

_Um einen Platz im Finale zu erreichen, müssen wir folgende Ziele erreichen:_

_✅ Aufgabe 1 → Die API muss auf Port: 3000 verfügbar sein. - ABGESCHLOSSEN_

_✅ Aufgabe 2 → Für die in der Erklärung markierten Vorgänge werden Routen bereitgestellt. - ABGESCHLOSSEN_

_✅ Aufgabe 3 → Wird versucht, eine nicht vorhandene Route abzufragen, muss dies mit einem 404 Response Code beantwortet werden.

_✅ Aufgabe 4 → Die Routen zur Durchführung der Operationen jedes Modells müssen getrennt werden. - ABGESCHLOSSEN_

_✅ Aufgabe 5 → Die Modelle müssen in einer Datenbank (SQL, MongoDB usw.) gespeichert werden, jede Anfrage in der API muss eine Abfrage in der Datenbank machen, um die entsprechenden Informationen zurückzugeben. - ABGESCHLOSSEN_

_✅ Aufgabe 6 → Die Strecken müssen den in der Erklärung markierten Vorgaben entsprechen. - ABGESCHLOSSEN_

_✅ Aufgabe 7 → Folgen Sie der in der Anweisung vorgeschlagenen Struktur für das Dateisystem. - ABGESCHLOSSEN_

_✅ Aufgabe 8 → Test mit Postbote. - ABGESCHLOSSEN_


## Ab 🚀

_Mit diesen Anweisungen können Sie zu Entwicklungs- und Testzwecken eine Arbeitskopie des Projekts auf Ihrem lokalen Computer erstellen._


### Voraussetzungen 📋

_Damit das Projekt korrekt funktioniert, wird empfohlen, eine Reihe von Programmen installiert und richtig konfiguriert zu haben:_
- [Visual Studio-Code] (https://code.visualstudio.com/download)
- [Node.js und npm](https://nodejs.org/es/)
- [Postbote](https://www.postman.com/)


### Einbau 🔧

_Wenn Sie dieses Projekt in Ihr lokales Repository geklont haben, denken Sie daran, den folgenden Befehl im Terminal auszuführen, um die Abhängigkeiten zu installieren und dass alles korrekt funktioniert:_
```
npm installieren
```


### Umgebungsvariablen .env 🪛

_Damit das Projekt korrekt funktioniert, müssen Sie die Umgebungsvariablen aktivieren, dazu müssen Sie eine Datei mit dem Namen `.env` erstellen und die Daten, die Sie haben, in die Vorlage `.config.env` eingeben._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/01.png)

### Auszuführende Befehle ⌨️

_Sobald alle erforderlichen Programme und Abhängigkeiten installiert sind, führen Sie einfach den folgenden Befehl aus:_
```
npm-Init
```
_Oder Sie können auch den Befehl für die Entwicklungsversion eingeben:_
```
npm laufen dev
```

## Projektarchitektur 🛡

_Die richtige Organisation der Projektstruktur vermeidet Code-Duplizierung, verbessert die Stabilität und hilft bei der Skalierbarkeit._

### Struktur 🏢

_Hier sehen Sie die Struktur, die ich für das Projekt verwende:_

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/02.png)

### 3-Schichten-Architektur 🥪

_Die Idee ist, das **Prinzip der alleinigen Verantwortung** anzuwenden._

_Ich arbeite viel daran, die Geschäftslogik von den Controllern zu trennen, denn wenn ich sie nicht trenne, wird sie schnell zu Spaghetti-Code._

### Abhängigkeitsinjektion 💉

_Abhängigkeitsinjektion ist ein Muster, das sehr hilft, den Code zu organisieren, indem die Abhängigkeiten einer Klasse oder Funktion "injiziert" oder durch den Konstruktor geleitet werden._

### Einstellungen ⚙️

_Im Konfigurationsordner habe ich alle Umgebungsvariablen und Konfigurationen der Anwendung zentralisiert, um den Zugriff und die Änderung dieser zu erleichtern, falls die Anwendung skaliert._


## So funktioniert die App 🛠

_🎲 Die Idee zu diesem Projekt ist ein SpielWürfel mit verschiedenen Funktionalitäten wie:_

 - Benutzer Registration.
 - Anmeldung.
 - Würfeln.
 - Gesamtrangliste.
 - Holen Sie sich den besten Spieler.
 - Holen Sie sich den schlechtesten Spieler.
 - Löschen Sie die Spiele eines Spielers.
 - Namen und Nachnamen eines Spielers ändern.
 - Einen Benutzer löschen.
 - Holen Sie sich einen Spieler durch seine ID.

_Außer Anmeldung und Registrierung sind alle Routen geschützt und um darauf zugreifen zu können, muss in den Headern ein Json Web Token mit dem 'Autorisierungsschlüssel' bereitgestellt werden, der bei der korrekten Registrierung oder Anmeldung generiert wird._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/03.png)

### App-Pfade 🚏

_Registrierung - POST_
```
http://localhost:3000/auth/register
```
_Login - POST_
```
http://localhost:3000/auth/login
```
_Alle Spieler holen - GET_
```
http://localhost:3000/players/get-all-players
```
_Hol dir einen Spieler - GET_
```
http://localhost:3000/players/get-player/:id
```
_Name und Nachname eines Spielers aktualisieren - PUT_
```
http://localhost:3000/players/update-player/:id
```
_Spieler löschen - LÖSCHEN_
```
http://localhost:3000/players/delete-player/:id
```
_Spieler würfelt - POST_
```
http://localhost:3000/games/player/:id
```
_Gesamtranking - GET_
```
http://localhost:3000/games/ranking
```
_Bester Spieler - GET_
```
http://localhost:3000/games/better-player
```
_Schlechtester Spieler - GET_
```
http://localhost:3000/games/worst-player
```
_Spielzüge eines Spielers löschen - LÖSCHEN_
```
http://localhost:3000/games/delete/62d874b9d1bb66e79a9e23d9
```


## Gebaut mit 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Verwendete Programmiersprache.
* [Node.js](https://nodejs.org/es/docs/) – Umgebung zum Ausführen von JavaScript auf der Serverseite.
* [Express](https://www.npmjs.com/package/express) - node.js-Framework.
* [NPM](https://www.npmjs.com/) - Abhängigkeitsmanager.
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mechanismus, um die Identität eines bestimmten Benutzers, auch mit einer Reihe von Ansprüchen oder Privilegien, zwischen zwei Parteien und sicher verbreiten zu können.
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Modul zur Passwortverschlüsselung.
* [Cors](https://www.npmjs.com/package/cors) – Dies ist eine Browser-Sicherheitsfunktion, die Cross-Origin-HTTP-Anforderungen einschränkt, die von im Browser ausgeführten Skripten initiiert werden.


## Versioniert 📌

_Ich habe semantische Versionen [SemVer](http://semver.org/) für diese Anwendung verwendet._


## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Das ganze Projekt*


## Lizenz 📄

_Dieses Projekt ist unter der MIT-Lizenz lizenziert – weitere Einzelheiten finden Sie in der Datei [LICENSE](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/LICENSE)._