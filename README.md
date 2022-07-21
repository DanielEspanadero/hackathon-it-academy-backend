# 🎲 JUEGO DE DADOS 🎲

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/dices.jpeg)

_Este proyecto ha sido desarrollado desde cero por [Daniel Españadero](https://github.com/DanielEspanadero)._

_Aplicación creada para la clasificación de la hackathon de [IT Academy](https://cibernarium.barcelonactiva.cat/it-academy/inscripcio;jsessionid=14F45E43AC8E410DB388C1096FD21201) - Backend organizada por [Nuwe](https://nuwe.io/)_

_Para cumplir con todos los requisitos (Y alguno extra) decidí remasterizar una de las primeras APIs que hice, la cual consiste en un 🎲 juego de dados 🎲 utilizando conceptos mucho más avanzados que en aquel entonces como por ejemplo la aplicación de los principios SOLID o capas de abstracción en las diferentes funcionalidades de la aplicación_


## Objetivos 🎯

_Para conseguir un puesto en la final nos piden cumplir los siguientes objetivos:_

_✅ Tarea 1 → La api ha de estar disponible en el puerto: 3000. - COMPLETADA_

_✅ Tarea 2 → Se proveerán rutas para las operaciones marcadas en el enunciado. - COMPLETADA_

_✅ Tarea 3 → En caso de que se intente consultar una ruta inexistente debe contestarse con un código de respuesta 404. - COMPLETADA_

_✅ Tarea 4 → Las rutas para realizar las operaciones de cada modelo deben estar separadas. - COMPLETADA_

_✅ Tarea 5 → Los modelos deben estar almacenados en una base de datos (SQL, MongoDB, etc.), cada petición que se haga en la API, debe hacer una consulta en la base de datos para poder devolver la información adecuada. - COMPLETADA_

_✅ Tarea 6 → Las rutas deben cumplir con las especificaciones marcadas en el enunciado. - COMPLETADA_

_✅ Tarea 7 → Seguir la estructura propuesta para el sistema de archivos en el enunciado. - COMPLETADA_

_✅ Tarea 8 → Test con Postman. - COMPLETADA_


## Empezando 🚀

_Estas instrucciones le permitirán obtener una copia de trabajo del proyecto en su máquina local para fines de desarrollo y pruebas._


### Pre requisitos 📋

_Para que el proyecto funcione correctamente, se recomienda tener una serie de programas instalados y configurados adecuadamente:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)


### Instalación 🔧

_Cuando hayas clonado este proyecto en tu repositorio local recuerda ejecutar el siguiente comando en la terminal para instalar las dependencias y que todo funcione correctamente:_
```
npm install
```


### Variables de entorno .env 🪛

_Para que el proyecto funcione correctamente tienes que habilitar las variables de entorno, para ello tienes que crear un archivo con el nombre `.env` e introducir los datos que tienes en la plantilla `.config.env`_

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/01.png)

### Comandos para ejecutar ⌨️

_Una vez que todos los programas y dependencias necesarios estén instalados, simplemente ejecute el comando:_
```
npm init
```
_O también puede ingresar el comando para la versión de desarrollo._
```
npm run dev
```

## Arquitectura del proyecto 🛡

_La correcta organización de la estructura del proyecto evitará la duplicación de código, mejorará la estabilidad y ayudará a la escalabilidad._

### Estructura 🏢

_Aquí puedes ver la estructura que estoy utilizando para el proyecto:_

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/02.png)

### Arquitectura de 3 capas 🥪

_La idea es utilizar el **principio de responsabilidad unica**_

_Trabajo mucho para intentar separar la lógica de negocio de los controladores ya que de no separarlo se convertirá rápidamente en código spaguetti._

### Inyección de dependencias 💉

_La inyección de dependencias es un patrón que ayuda bastante a organizar el código al “inyectar” o pasar a través del constructor las dependencias de una clase o función._

### Configuraciones ⚙️

_En la carpeta config tengo centralizado todas las variables de entorno y configuraciones de la aplicación para facilitar el acceso y la modificación de estos en el caso de que la aplicación escale._


## Funcionamiento de la app 🛠

_La idea de este proyecto es un juego de dados con varias funcionalidades como:_

 - Registro de usuarios.
 - Login.
 - Tirar dados.
 - Ranking general.
 - Obtener el mejor jugador.
 - Obtener el peor jugador.
 - Borrar las jugadas de un jugador.
 - Modificar nombre y apellido de un jugador.
 - Eliminar un usuario.
 - Obtener un jugador a través de su ID.

_A excepción de login y registro, todas las rutas están protegidas y para acceder a ellas, hay que proporcionar un Json Web Token en los headers con el key 'authorization' que se genera al registrarse o al loguearse correctamente._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/03.png)

### Rutas de la aplicación 🚏

_Registro - POST_
```
http://localhost:3000/auth/register
```
_Login - POST_
```
http://localhost:3000/auth/login
```
_Obtener todos los jugadores - GET_
```
http://localhost:3000/players/get-all-players
```
_Obtener un jugador - GET_
```
http://localhost:3000/players/get-player/:id
```
_Actualizar nombre y apellido de un jugador - PUT_
```
http://localhost:3000/players/update-player/:id
```
_Borrar jugador - DELETE_
```
http://localhost:3000/players/delete-player/:id
```
_Jugador tira los dados - POST_
```
http://localhost:3000/games/player/:id
```
_Ranking general - GET_
```
http://localhost:3000/games/ranking
```
_Mejor jugador - GET_
```
http://localhost:3000/games/better-player
```
_Peor jugador - GET_
```
http://localhost:3000/games/worst-player
```
_Borrar las jugadas de un jugador - DELETE_
```
http://localhost:3000/games/delete/62d874b9d1bb66e79a9e23d9
```


## Construido con 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación utilizado.
* [Node.js](https://nodejs.org/es/docs/) - Entorno para ejecutar JavaScript del lado del servidor.
* [Express](https://www.npmjs.com/package/express) - Framework de node.js.
* [NPM](https://www.npmjs.com/) - Administrador de dependencias.
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mecanismo para poder propagar entre dos partes, y de forma segura, la identidad de un determinado usuario, además con una serie de claims o privilegios.
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Módulo para Encriptación de contraseñas.
* [Cors](https://www.npmjs.com/package/cors) - Es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador.


## Versionado 📌

_He utilizado versiones semánticas [SemVer](http://semver.org/) para esta aplicación._


## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Todo el proyecto*


## Licencia 📄

_Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENCIA](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/LICENSE) para más detalles._