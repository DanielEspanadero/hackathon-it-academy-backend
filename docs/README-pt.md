# 🎲 JOGO DE DADOS 🎲

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/dices.jpeg)

_Este projeto foi desenvolvido do zero por [Daniel Españadero](https://github.com/DanielEspanadero)._

_Aplicativo criado para a classificação do hackathon [Academia de TI](https://cibernarium.barcelonactiva.cat/it-academy/inscripcio) - Backend organizado por [Nuwe](https://nuwe.io)._

_Para atender a todos os requisitos (e alguns extras) resolvi remasterizar uma das primeiras APIs que fiz, que consiste em um 🎲 jogo de dados 🎲 usando conceitos muito mais avançados do que naquela época, como a aplicação de princípios SOLID ou camadas de abstração em as diferentes funcionalidades do aplicativo._


## Traduções 💬

_Este arquivo README também está disponível em outros idiomas:_
- [Catalão](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-cat.md)
- [Francês](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-fr.md)
- [Alemão](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-de.md)
- [Italiano](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-it.md)
- [Espanhol](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/README.md)
- [Inglês](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-en.md)
- [Sueco](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/README-se.md)


## Objetivos 🎯

_Para conseguirmos um lugar na final somos solicitados a cumprir os seguintes objetivos:_

_✅ Tarefa 1 → A API deve estar disponível na porta: 3000. - COMPLETA_

_✅ Tarefa 2 → Serão fornecidas rotas para as operações marcadas no demonstrativo. - CONCLUÍDO_

_✅ Tarefa 3 → Se for feita uma tentativa de consultar uma rota inexistente, ela deve ser respondida com um código de resposta 404. - CONCLUÍDO_

_✅ Tarefa 4 → As rotas para realizar as operações de cada modelo devem ser separadas. - CONCLUÍDO_

_✅ Tarefa 5 → Os modelos devem ser armazenados em um banco de dados (SQL, MongoDB, etc.), cada solicitação feita na API deve fazer uma consulta no banco de dados para retornar as informações adequadas. - CONCLUÍDO_

_✅ Tarefa 6 → As rotas devem atender as especificações marcadas na declaração. - CONCLUÍDO_

_✅ Tarefa 7 → Siga a estrutura proposta para o sistema de arquivos no enunciado. - CONCLUÍDO_

_✅ Tarefa 8 → Teste com o Postman. - CONCLUÍDO_


## Começando 🚀

_Estas instruções permitirão que você obtenha uma cópia de trabalho do projeto em sua máquina local para fins de desenvolvimento e teste._


### Pré-requisitos 📋

_Para que o projeto funcione corretamente, é recomendável ter uma série de programas instalados e configurados corretamente:_
- [Código do Visual Studio](https://code.visualstudio.com/download)
- [Node.js e npm](https://nodejs.org/es/)
- [Carteiro](https://www.postman.com/)


### Instalação 🔧

_Ao ter clonado este projeto em seu repositório local lembre-se de executar o seguinte comando no terminal para instalar as dependências e que tudo funcione corretamente:_
```
npm instalar
```


### Variáveis ​​de ambiente .env 🪛

_Para que o projeto funcione corretamente você tem que habilitar as variáveis ​​de ambiente, para isso você tem que criar um arquivo com o nome `.env` e inserir os dados que você tem no template `.config.env`._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/01.png)

### Comandos para executar ⌨️

_Uma vez que todos os programas e dependências necessários estejam instalados, basta executar o comando:_
```
npm init
```
_Ou você também pode digitar o comando para a versão de desenvolvimento:_
```
npm executar dev
```

## Arquitetura de projeto 🛡

_A organização correta da estrutura do projeto evitará a duplicação de código, melhorará a estabilidade e ajudará na escalabilidade._

### Estrutura 🏢

_Aqui você pode ver a estrutura que estou usando para o projeto:_

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/02.png)

### Arquitetura de 3 camadas 🥪

_A ideia é usar o **princípio da responsabilidade única**._

_Trabalho muito para tentar separar a lógica de negócio dos controladores porque se eu não separar, rapidamente se transformará em código espaguete._

### Injeção de dependência 💉

_Injeção de dependência é um padrão que ajuda muito a organizar o código "injetando" ou passando pelo construtor as dependências de uma classe ou função._

### Configurações ⚙️

_Na pasta config centralizei todas as variáveis ​​de ambiente e configurações da aplicação para facilitar o acesso e modificação das mesmas caso a aplicação escale._


## Como funciona o aplicativo 🛠

_🎲 A ideia deste projeto é um jogo dedice com várias funcionalidades como:_

 - Cadastro de usuário.
 - Conecte-se.
 - Jogue dados.
 - Classificação geral.
 - Obter o melhor jogador.
 - Pegue o pior jogador.
 - Excluir as jogadas de um jogador.
 - Modificar nome e sobrenome de um jogador.
 - Excluir um usuário.
 - Obter um jogador através de seu ID.

_Exceto para login e registro, todas as rotas são protegidas e para acessá-las, um Json Web Token deve ser fornecido nos cabeçalhos com a chave 'autorização' que é gerada ao se cadastrar ou efetuar login corretamente._

![Demo](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/docs/03.png)

### Caminhos de aplicativos 🚏

_Registro - POST_
```
http://localhost:3000/auth/register
```
_Login - POST_
```
http://localhost:3000/auth/login
```
_Pegue todos os jogadores - GET_
```
http://localhost:3000/players/get-all-players
```
_Pegue um jogador - GET_
```
http://localhost:3000/players/get-player/:id
```
_Atualizar nome e sobrenome de um jogador - PUT_
```
http://localhost:3000/players/update-player/:id
```
_Excluir jogador - DELETE_
```
http://localhost:3000/players/delete-player/:id
```
_Jogador rola os dados - POST_
```
http://localhost:3000/games/player/:id
```
_Classificação geral - GET_
```
http://localhost:3000/games/ranking
```
_Melhor jogador - GET_
```
http://localhost:3000/games/better-player
```
_Pior jogador - GET_
```
http://localhost:3000/games/worst-player
```
_Apagar os movimentos de um jogador - DELETE_
```
http://localhost:3000/games/delete/62d874b9d1bb66e79a9e23d9
```


## Construído com 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Linguagem de programação usada.
* [Node.js](https://nodejs.org/es/docs/) - Ambiente para executar JavaScript no lado do servidor.
* [Express](https://www.npmjs.com/package/express) - framework node.js.
* [NPM](https://www.npmjs.com/) - Gerenciador de dependências.
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mecanismo para poder propagar entre duas partes, e com segurança, a identidade de um determinado usuário, também com uma série de reivindicações ou privilégios.
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Módulo para criptografia de senha.
* [Cors](https://www.npmjs.com/package/cors) - É um recurso de segurança do navegador que restringe solicitações HTTP de origem cruzada iniciadas a partir de scripts executados no navegador.


## Versionado 📌

_Eu usei versões semânticas [SemVer](http://semver.org/) para este aplicativo._


## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Todo o projeto*


## Licença 📄

_Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://github.com/DanielEspanadero/hackathon-it-academy-backend/blob/main/LICENSE) para mais detalhes._