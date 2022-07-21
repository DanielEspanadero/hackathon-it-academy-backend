# 🎲 JOC DE DAUS 🎲

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/dices.jpeg)

_Aquest projecte ha estat desenvolupat des de zero per [Daniel Españadero](https://github.com/DanielEspanadero)._

_Aplicació creada per a la classificació de l'hackathon de [IT Academy](https://cibernarium.barcelonactiva.cat/it-academy/inscripcio) - Backend organitzada per [Nuwe](https://nuwe.io/challenge/repte-4-operacions-crud)._

_Per complir amb tots els requisits (I algun extra) vaig decidir remasteritzar una de les primeres APIs que vaig fer, la qual consisteix en un 🎲 joc de daus 🎲 utilitzant conceptes molt més avançats que per aquell temps com per exemple l'aplicació dels principis SOLID o capes d'abstracció en les diferents funcionalitats de l'aplicació.


## Traduccions 💬

_Aquest fitxer README també està disponible en altres idiomes:_
- [Espanyol](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/README.md)
- [Francès](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-fr.md)
- [Alemany](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-de.md)
- [Italià](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-it.md)
- [Portuguès](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-pt.md)
- [Anglès](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-en.md)
- [Suec](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-se.md)


## Objectius 🎯

_Per aconseguir un lloc a la final ens demanen complir els següents objectius:_

_✅ Tasca 1 → L'api ha d'estar disponible al port: 3000. - COMPLETADA_

_✅ Tasca 2 → Es proveiran rutes per a les operacions marcades a l'enunciat. - COMPLETADA_

_✅ Tasca 3 → En cas que s'intenti consultar una ruta inexistent s'ha de contestar amb un codi de resposta 404. - COMPLETADA_

_✅ Tasca 4 → Les rutes per realitzar les operacions de cada model han d'estar separades. - COMPLETADA_

_✅ Tasca 5 → Els models han d'estar emmagatzemats en una base de dades (SQL, MongoDB, etc.), cada petició que es faci a l'API, ha de fer una consulta a la base de dades per poder tornar la informació adequada. - COMPLETADA_

_✅ Tasca 6 → Les rutes han de complir les especificacions marcades a l'enunciat. - COMPLETADA_

_✅ Tasca 7 → Seguir l'estructura proposada per al sistema de fitxers a l'enunciat. - COMPLETADA_

_✅ Tasca 8 → Test amb Postman. - COMPLETADA_


## Començant 🚀

_Aquestes instruccions us permetran obtenir una còpia de treball del projecte a la vostra màquina local per a fins de desenvolupament i proves._


### Pre requisits 📋

_Perquè el projecte funcioni correctament, es recomana tenir una sèrie de programes instal·lats i configurats adequadament:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js i npm](https://nodejs.org/es/)
- [Postman](https://www.postman.com/)


### Instal·lació 🔧

_Quan hagis clonat aquest projecte al teu repositori local recorda executar la següent comanda a la terminal per instal·lar les dependències i que tot funcioni correctament:_
````
npm install
````


### Variables d'entorn .env 🪛

_Perquè el projecte funcioni correctament has d'habilitar les variables d'entorn, per això has de crear un fitxer amb el nom `.env` i introduir les dades que tens a la plantilla `.config.env`._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/01.png)

### Comandes per executar ⌨️

_Una vegada que tots els programes i dependències necessaris estiguin instal·lats, simplement executeu l'ordre:_
````
npm init
````
_O també podeu introduir l'ordre per a la versió de desenvolupament:_
````
npm run dev
````

## Arquitectura del projecte 🛡

_La correcta organització de l'estructura del projecte evitarà la duplicació de codi, millorarà l'estabilitat i ajudarà a l'escalabilitat._

### Estructura 🏢

_Aquí podeu veure l'estructura que estic utilitzant per al projecte:_

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/02.png)

### Arquitectura de 3 capes 🥪

_La idea és utilitzar el **principi de responsabilitat unica**._

_Treballo molt per intentar separar la lògica de negoci dels controladors ja que de no separar-lo es convertirà ràpidament en codi spaguetti._

### Injecció de dependències 💉

_La injecció de dependències és un patró que ajuda força a organitzar el codi en injectar o passar a través del constructor les dependències d'una classe o funció.

### Configuracions ⚙️

_A la carpeta config tinc centralitzat totes les variables d'entorn i configuracions de l'aplicació per facilitar-ne l'accés i la modificació en el cas que l'aplicació escali._


## Funcionament de l'app 🛠_🎲 La idea d'aquest projecte és un joc de daus amb diverses funcionalitats com:_

 - Registre dusuaris.
 - Login.
 - Llençar daus.
 - Rànquing general.
 - Obtenir el millor jugador.
 - Obtenir el pitjor jugador.
 - Esborrar les jugades d'un jugador.
 - Modificar nom i cognom dun jugador.
 - Eliminar un usuari.
 - Obtenir un jugador a través del vostre ID.

_A excepció de login i registre, totes les rutes estan protegides i per accedir-hi, cal proporcionar un Json Web Token als headers amb el key 'authorization' que es genera en registrar-se o en loguejar correctament._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/03.png)

### Rutes de l'aplicació 🚏

_Registre - POST_
````
http://localhost:3000/auth/register
````
_Login - POST_
````
http://localhost:3000/auth/login
````
_Obtenir tots els jugadors - GET_
````
http://localhost:3000/players/get-all-players
````
_Obtenir un jugador - GET_
````
http://localhost:3000/players/get-player/:id
````
_Actualitzar nom i cognom d'un jugador - PUT_
````
http://localhost:3000/players/update-player/:id
````
_Esborrar jugador - DELETE_
````
http://localhost:3000/players/delete-player/:id
````
_Jugador llença els daus - POST_
````
http://localhost:3000/games/player/:id
````
_Rànquing general - GET_
````
http://localhost:3000/games/ranking
````
_Millor jugador - GET_
````
http://localhost:3000/games/better-player
````
_Pitjor jugador - GET_
````
http://localhost:3000/games/worst-player
````
_Esborrar les jugades d'un jugador - DELETE_
````
http://localhost:3000/games/delete/62d874b9d1bb66e79a9e23d9
````


## Construït amb 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Llenguatge de programació utilitzat.
* [Node.js](https://nodejs.org/es/docs/) - Entorn per executar JavaScript del costat del servidor.
* [Express](https://www.npmjs.com/package/express) - Framework de node.js.
* [NPM](https://www.npmjs.com/) - Administrador de dependències.
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mecanisme per poder propagar entre dues parts, i de forma segura, la identitat d'un determinat usuari, a més amb una sèrie de claims o privilegis.
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Mòdul per a Encriptació de contrasenyes.
* [Cors](https://www.npmjs.com/package/cors) - És una característica de seguretat del navegador que restringeix les sol·licituds HTTP d'origen creuat que s'inicien des de seqüències d'ordres que s'executen al navegador.


## Versionat 📌

_He utilitzat versions semàntiques [SemVer](http://semver.org/) per a aquesta aplicació._


## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Tot el projecte*


## Llicència 📄

_Aquest projecte està llicenciat sota la Llicència MIT - veure el fitxer [LLICÈNCIA](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/LICENSE) per a més detalls._