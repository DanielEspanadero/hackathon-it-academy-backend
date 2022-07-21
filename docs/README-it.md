# 🎲 GIOCO DEI DADI 🎲

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/dices.jpeg)

_Questo progetto è stato sviluppato da zero da [Daniel Españadero](https://github.com/DanielEspanadero)._

_Applicazione creata per la classificazione dell'hackathon [IT Academy](https://cibernarium.barcelonactiva.cat/it-academy/inscripcio) - Backend organizzato da [Nuwe](https://nuwe.io)._

_Per soddisfare tutti i requisiti (e alcuni extra) ho deciso di rimasterizzare una delle prime API che ho realizzato, che consiste in un 🎲 gioco di dadi 🎲 utilizzando concetti molto più avanzati rispetto a allora, come l'applicazione di principi SOLID o livelli di astrazione in le diverse funzionalità dell'applicazione._


## Traduzioni 💬

_Questo file README è disponibile anche in altre lingue:_
- [Catalano](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-cat.md)
- [Francese](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-fr.md)
- [Tedesco](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-de.md)
- [spagnolo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/README.md)
- [Portoghese](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-pt.md)
- [Inglese](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-en.md)
- [svedese](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-se.md)


## Obiettivi 🎯

_Per ottenere un posto in finale ci viene chiesto di raggiungere i seguenti obiettivi:_

_✅ Task 1 → L'api deve essere disponibile sulla porta: 3000. - COMPLETED_

_✅ Compito 2 → Verranno forniti percorsi per le operazioni segnate nella dichiarazione. - COMPLETATO_

_✅ Compito 3 → Se si tenta di interrogare un percorso inesistente, è necessario rispondere con un codice di risposta 404. - COMPLETATO_

_✅ Compito 4 → I percorsi per eseguire le operazioni di ogni modello devono essere separati. - COMPLETATO_

_✅ Task 5 → I modelli devono essere archiviati in un database (SQL, MongoDB, ecc.), ogni richiesta effettuata in API deve effettuare una query nel database per restituire le informazioni appropriate. - COMPLETATO_

_✅ Compito 6 → I percorsi devono soddisfare le specifiche indicate nella dichiarazione. - COMPLETATO_

_✅ Attività 7 → Segui la struttura proposta per il file system nella dichiarazione. - COMPLETATO_

_✅ Compito 8 → Prova con il postino. - COMPLETATO_


## A partire 🚀

_Queste istruzioni ti permetteranno di ottenere una copia funzionante del progetto sul tuo computer locale per scopi di sviluppo e test._


### Prerequisiti 📋

_Affinché il progetto funzioni correttamente, si consiglia di avere una serie di programmi installati e opportunamente configurati:_
- [Codice Visual Studio](https://code.visualstudio.com/download)
- [Node.js e npm](https://nodejs.org/es/)
- [Postino](https://www.postino.com/)


### Installazione 🔧

_Quando hai clonato questo progetto nel tuo repository locale ricordati di eseguire il seguente comando nel terminale per installare le dipendenze e che tutto funzioni correttamente:_
```
npm installazione
```


### Variabili d'ambiente .env 🪛

_Affinché il progetto funzioni correttamente devi abilitare le variabili d'ambiente, per questo devi creare un file con il nome `.env` e inserire i dati che hai nel template `.config.env`._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/01.png)

### Comandi da eseguire ⌨️

_Una volta installati tutti i programmi e le dipendenze necessari, eseguire semplicemente il comando:_
```
npm init
```
_Oppure puoi anche inserire il comando per la versione di sviluppo:_
```
npm esegui dev
```

## Architettura del progetto 🛡

_La corretta organizzazione della struttura del progetto eviterà la duplicazione del codice, migliorerà la stabilità e favorirà la scalabilità._

### Struttura 🏢

_Qui puoi vedere la struttura che sto usando per il progetto:_

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/02.png)

### Architettura a 3 strati 🥪

_L'idea è di utilizzare il **principio della responsabilità unica**._

_Lavoro molto per cercare di separare la logica aziendale dai controller perché se non la separo si trasformerà rapidamente in codice spaghetti._

### Iniezione di dipendenza 💉

_L'iniezione di dipendenza è un pattern che aiuta molto a organizzare il codice "iniettando" o passando attraverso il costruttore le dipendenze di una classe o funzione._

### Impostazioni ⚙️

_Nella cartella config ho centralizzato tutte le variabili di ambiente e le configurazioni dell'applicazione per facilitare l'accesso e la modifica di queste nel caso in cui l'applicazione si ridimensiona._


## Come funziona l'app 🛠

_🎲 L'idea di questo progetto è un gioco didadi con varie funzionalità come:_

 - Registrazione Utente.
 - Login.
 - Tira i dadi.
 - Classifica generale.
 - Ottieni il miglior giocatore.
 - Prendi il peggior giocatore.
 - Elimina le giocate di un giocatore.
 - Modifica nome e cognome di un giocatore.
 - Elimina un utente.
 - Ottieni un giocatore attraverso il suo ID.

_Ad eccezione del login e della registrazione, tutti i percorsi sono protetti e per accedervi è necessario fornire nelle intestazioni un Json Web Token con la chiave di 'autorizzazione' che viene generata al momento della registrazione o del login corretto._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/03.png)

### Percorsi dell'app 🚏

_Registrazione - POST_
```
http://localhost:3000/auth/register
```
_Login - POST_
```
http://localhost:3000/auth/login
```
_Prendi tutti i giocatori - OTTIENI_
```
http://localhost:3000/players/get-all-players
```
_Prendi un giocatore - OTTIENI_
```
http://localhost:3000/players/get-player/:id
```
_Aggiorna nome e cognome di un giocatore - PUT_
```
http://localhost:3000/players/update-player/:id
```
_Elimina giocatore - ELIMINA_
```
http://localhost:3000/players/delete-player/:id
```
_Il giocatore lancia i dadi - POST_
```
http://localhost:3000/games/player/:id
```
_Classifica generale - GET_
```
http://localhost:3000/games/ranking
```
_Miglior giocatore - OTTIENI_
```
http://localhost:3000/games/better-player
```
_Peggiore giocatore - OTTIENI_
```
http://localhost:3000/games/worst-player
```
_Elimina le mosse di un giocatore - DELETE_
```
http://localhost:3000/games/delete/62d874b9d1bb66e79a9e23d9
```


## Costruito con 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Linguaggio di programmazione utilizzato.
* [Node.js](https://nodejs.org/es/docs/) - Ambiente per eseguire JavaScript sul lato server.
* [Express](https://www.npmjs.com/package/express) - framework node.js.
* [NPM](https://www.npmjs.com/) - Gestore delle dipendenze.
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Meccanismo per poter propagare tra due parti, e in sicurezza, l'identità di un determinato utente, anche con una serie di attestazioni o privilegi.
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Modulo per la crittografia delle password.
* [Cors](https://www.npmjs.com/package/cors) - È una funzionalità di sicurezza del browser che limita le richieste HTTP multiorigine avviate da script in esecuzione nel browser.


## Versione 📌

_Ho usato versioni semantiche [SemVer](http://semver.org/) per questa applicazione._


## Autore ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *L'intero progetto*


## Licenza 📄

_Questo progetto è concesso in licenza con la licenza MIT - vedere il file [LICENSE](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/LICENSE) per maggiori dettagli._