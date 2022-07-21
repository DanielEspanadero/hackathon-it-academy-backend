# 🎲 JEU DE DÉS 🎲

![Démo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/dices.jpeg)

_Ce projet a été développé à partir de zéro par [Daniel Españadero](https://github.com/DanielEspanadero)._

_Application créée pour la classification du hackathon [IT Academy](https://cibernarium.barcelonactiva.cat/it-academy/inscripcio) - Backend organisé par [Nuwe](https://nuwe.io)._

_Pour répondre à toutes les exigences (et quelques extras), j'ai décidé de remasteriser l'une des premières API que j'ai créées, qui consiste en un 🎲 jeu de dés 🎲 utilisant des concepts beaucoup plus avancés qu'à l'époque, comme l'application des principes SOLID ou des couches d'abstraction dans les différentes fonctionnalités de l'application._


## Traductions 💬

_Ce fichier README est également disponible dans d'autres langues :_
- [Catalan](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-cat.md)
- [Espagnol](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/README.md)
- [Allemand](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-de.md)
- [Italien](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-it.md)
- [Portugais](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-pt.md)
- [Anglais](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-en.md)
- [Suédois](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-se.md)


## Objectifs 🎯

_Pour obtenir une place en finale, il nous est demandé de remplir les objectifs suivants :_

_✅ Tâche 1 → L'api doit être disponible sur le port : 3000. - TERMINÉ_

_✅ Tâche 2 → Des itinéraires seront fournis pour les opérations marquées dans le relevé. - COMPLÉTÉ_

_✅ Tâche 3 → Si une tentative est faite pour interroger une route inexistante, il faut y répondre avec un code de réponse 404. - COMPLETED_

_✅ Tâche 4 → Les itinéraires pour effectuer les opérations de chaque modèle doivent être séparés. - COMPLÉTÉ_

_✅ Tâche 5 → Les modèles doivent être stockés dans une base de données (SQL, MongoDB, etc.), chaque requête faite dans l'API doit faire une requête dans la base de données afin de retourner les informations appropriées. - COMPLÉTÉ_

_✅ Tâche 6 → Les itinéraires doivent respecter les spécifications indiquées dans l'énoncé. - COMPLÉTÉ_

_✅ Tâche 7 → Suivez la structure proposée pour le système de fichiers dans la déclaration. - COMPLÉTÉ_

_✅ Tâche 8 → Test avec Postman. - COMPLÉTÉ_


## Démarrage 🚀

_Ces instructions vous permettront d'obtenir une copie de travail du projet sur votre machine locale à des fins de développement et de test._


### Prérequis 📋

_Pour que le projet fonctionne correctement, il est recommandé d'avoir une série de programmes installés et correctement configurés :_
- [Code Visual Studio] (https://code.visualstudio.com/download)
- [Node.js et npm](https://nodejs.org/es/)
- [Facteur](https://www.postman.com/)


###Installation 🔧

_Lorsque vous avez cloné ce projet dans votre dépôt local, n'oubliez pas d'exécuter la commande suivante dans le terminal pour installer les dépendances et que tout fonctionne correctement :_
```
installation npm
```


### Variables d'environnement .env 🪛

_Pour que le projet fonctionne correctement, vous devez activer les variables d'environnement, pour cela, vous devez créer un fichier avec le nom `.env` et entrer les données que vous avez dans le modèle `.config.env`._

![Démo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/01.png)

### Commandes à exécuter ⌨️

_Une fois tous les programmes et dépendances nécessaires installés, lancez simplement la commande :_
```
initialisation npm
```
_Ou vous pouvez également entrer la commande pour la version de développement :_
```
npm run dev
```

##Architecture du projet 🛡

_L'organisation correcte de la structure du projet évitera la duplication de code, améliorera la stabilité et favorisera l'évolutivité._

###Structure 🏢

_Ici vous pouvez voir la structure que j'utilise pour le projet :_

![Démo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/02.png)

### Architecture à 3 couches 🥪

_L'idée est d'utiliser le **principe de responsabilité unique**._

_Je travaille beaucoup pour essayer de séparer la logique métier des contrôleurs car si je ne la sépare pas, ça va vite se transformer en code spaghetti._

### Injection de dépendance 💉

_L'injection de dépendances est un modèle qui aide beaucoup à organiser le code en "injectant" ou en passant par le constructeur les dépendances d'une classe ou d'une fonction._

### Paramètres ⚙️

_Dans le dossier config j'ai centralisé toutes les variables d'environnement et configurations de l'application pour faciliter l'accès et la modification de celles-ci en cas de mise à l'échelle de l'application._


## Comment fonctionne l'application 🛠

_🎲 L'idée de ce projet est un jeu dedés avec diverses fonctionnalités telles que :_

 - Enregistrement de l'utilisateur.
 - Connexion.
 - Roulez les dés.
 - Classement général.
 - Obtenez le meilleur joueur.
 - Obtenez le pire joueur.
 - Supprimer les jeux d'un joueur.
 - Modifier le nom et le prénom d'un joueur.
 - Supprimer un utilisateur.
 - Obtenez un joueur grâce à son ID.

_Sauf pour la connexion et l'enregistrement, toutes les routes sont protégées et pour y accéder, un jeton Web Json doit être fourni dans les en-têtes avec la clé "autorisation" qui est générée lors de l'enregistrement ou de la connexion correcte._

![Démo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/03.png)

### Chemins d'application 🚏

_Inscription - POST_
```
http://localhost:3000/auth/register
```
_Connexion - POST_
```
http://localhost:3000/auth/login
```
_Obtenir tous les joueurs - GET_
```
http://localhost:3000/players/get-all-players
```
_Obtenir un joueur - GET_
```
http://localhost:3000/players/get-player/:id
```
_Mettre à jour le nom et le prénom d'un joueur - PUT_
```
http://localhost:3000/players/update-player/:id
```
_Supprimer le joueur - SUPPRIMER_
```
http://localhost:3000/players/delete-player/:id
```
_Le joueur lance les dés - POST_
```
http://localhost:3000/games/player/:id
```
_Classement général - GET_
```
http://localhost:3000/jeux/classement
```
_Meilleur joueur - GET_
```
http://localhost:3000/games/better-player
```
_Pire joueur - GET_
```
http://localhost:3000/games/worst-player
```
_Supprimer les mouvements d'un joueur - DELETE_
```
http://localhost:3000/games/delete/62d874b9d1bb66e79a9e23d9
```


## Construit avec 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Langage de programmation utilisé.
* [Node.js](https://nodejs.org/es/docs/) - Environnement pour exécuter JavaScript côté serveur.
* [Express](https://www.npmjs.com/package/express) - framework node.js.
* [NPM](https://www.npmjs.com/) - Gestionnaire de dépendances.
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mécanisme permettant de propager entre deux parties, et en toute sécurité, l'identité d'un certain utilisateur, également avec une série de revendications ou de privilèges.
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Module de cryptage de mot de passe.
* [Cors](https://www.npmjs.com/package/cors) - Est une fonction de sécurité du navigateur qui restreint les requêtes HTTP cross-origin initiées à partir de scripts exécutés dans le navigateur.


## Versionné 📌

_J'ai utilisé des versions sémantiques [SemVer](http://semver.org/) pour cette application._


## Auteur ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *L'ensemble du projet*


## Licence 📄

_Ce projet est sous licence MIT - voir le fichier [LICENSE](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/LICENSE) pour plus de détails._