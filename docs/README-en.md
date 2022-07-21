# 🎲 DICE GAME 🎲

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/dices.jpeg)

_This project has been developed from scratch by [Daniel Españadero](https://github.com/DanielEspanadero)._

_Application created for the classification of the [IT Academy] hackathon(https://cibernarium.barcelonactiva.cat/it-academy/inscripcio) - Backend organized by [Nuwe](https://nuwe.io/)._

_To meet all the requirements (and some extra) I decided to remaster one of the first APIs I made, which consists of a 🎲 dice game 🎲 using much more advanced concepts than back then, such as the application of SOLID principles or abstraction layers in the different functionalities of the application._


## Translations 💬

_This README file is also available in other languages:_
- [Catalan](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-cat.md)
- [French](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-fr.md)
- [German](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-de.md)
- [Italian](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-it.md)
- [Portuguese](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-pt.md)
- [Spanish](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/README.md)
- [Swedish](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-se.md)


## Goals 🎯

_To get a place in the final we are asked to meet the following objectives:_

_✅ Task 1 → The api must be available on port: 3000. - COMPLETED_

_✅ Task 2 → Routes will be provided for the operations marked in the statement. - COMPLETED_

_✅ Task 3 → If an attempt is made to query a non-existent route, it must be answered with a 404 response code. - COMPLETED_

_✅ Task 4 → The routes to perform the operations of each model must be separated. - COMPLETED_

_✅ Task 5 → The models must be stored in a database (SQL, MongoDB, etc.), each request made in the API must make a query in the database in order to return the appropriate information. - COMPLETED_

_✅ Task 6 → The routes must meet the specifications marked in the statement. - COMPLETED_

_✅ Task 7 → Follow the structure proposed for the file system in the statement. - COMPLETED_

_✅ Task 8 → Test with Postman. - COMPLETED_


## Starting 🚀

_These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes._


### Prerequisites 📋

_For the project to work correctly, it is recommended to have a series of programs installed and properly configured:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js and npm](https://nodejs.org/es/)
- [Postman](https://www.postman.com/)


### Installation 🔧

_When you have cloned this project in your local repository remember to execute the following command in the terminal to install the dependencies and that everything works correctly:_
```
npm install
```


### Environment variables .env 🪛

_For the project to work correctly you have to enable the environment variables, for this you have to create a file with the name `.env` and enter the data you have in the template `.config.env`._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/01.png)

### Commands to run ⌨️

_Once all the necessary programs and dependencies are installed, simply run the command:_
```
npm init
```
_Or you can also enter the command for the development version:_
```
npm run dev
```

## Project architecture 🛡

_The correct organization of the project structure will avoid code duplication, improve stability and help scalability._

### Structure 🏢

_Here you can see the structure I am using for the project:_

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/02.png)

### 3 layer architecture 🥪

_The idea is to use the **single responsibility principle**._

_I work a lot to try to separate the business logic from the controllers because if I don't separate it, it will quickly turn into spaghetti code._

### Dependency injection 💉

_Dependency injection is a pattern that helps a lot to organize the code by "injecting" or passing through the constructor the dependencies of a class or function._

### Settings ⚙️

_In the config folder I have centralized all the environment variables and configurations of the application to facilitate access and modification of these in the event that the application scales._


## How the app works 🛠_🎲 The idea of ​​this project is a dice game with various functionalities such as:_

 - User Registration.
 - Login.
 - Roll dice.
 - Overall ranking.
 - Get the best player.
 - Get the worst player.
 - Delete the plays of a player.
 - Modify name and surname of a player.
 - Delete a user.
 - Get a player through his ID.

_Except for login and registration, all routes are protected and to access them, a Json Web Token must be provided in the headers with the 'authorization' key that is generated when registering or logging in correctly._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/03.png)

### App Paths 🚏

_Registration - POST_
```
http://localhost:3000/auth/register
```
_Login - POST_
```
http://localhost:3000/auth/login
```
_Get all players - GET_
```
http://localhost:3000/players/get-all-players
```
_Get a player - GET_
```
http://localhost:3000/players/get-player/:id
```
_Update name and surname of a player - PUT_
```
http://localhost:3000/players/update-player/:id
```
_Delete player - DELETE_
```
http://localhost:3000/players/delete-player/:id
```
_Player rolls the dice - POST_
```
http://localhost:3000/games/player/:id
```
_Overall Ranking - GET_
```
http://localhost:3000/games/ranking
```
_Best player - GET_
```
http://localhost:3000/games/better-player
```
_Worst player - GET_
```
http://localhost:3000/games/worst-player
```
_Delete a player's moves - DELETE_
```
http://localhost:3000/games/delete/62d874b9d1bb66e79a9e23d9
```


## Built with 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programming language used.
* [Node.js](https://nodejs.org/es/docs/) - Environment to run JavaScript on the server side.
* [Express](https://www.npmjs.com/package/express) - node.js framework.
* [NPM](https://www.npmjs.com/) - Dependency manager.
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mechanism to be able to propagate between two parties, and safely, the identity of a certain user, also with a series of claims or privileges.
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Module for Password Encryption.
* [Cors](https://www.npmjs.com/package/cors) - Is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser.


## Versioned 📌

_I have used semantic versions [SemVer](http://semver.org/) for this application._


## Author ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *The whole project*


## License 📄

_This project is licensed under the MIT License - see the file [LICENSE](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/LICENSE) for more details._