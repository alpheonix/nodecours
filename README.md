# API nodeJS1

Ce projet est un projet scolaire et le but est de tester une API en Node.JS.
Vous aurez donc accès ici, à une application hébergé sur Heroku afin d'effectuer les différents tests.
Application : https://agile-oasis-13310.herokuapp.com/

## Comment utiliser

* Afin d'afficher un Hello World, ajouter /hello à la fin de l'url de l'application.
```
https://chatbotesginodejs.herokuapp.com/hello
```
* Nous pouvons aussi utiliser un POST afin de demander plusieurs choses :

  * La météo :
    ```
    $ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"météo\"}" https://agile-oasis-13310.herokuapp.com/chat
    ```
  * La ville :
    ```
    $ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"ville\"}" https://agile-oasis-13310.herokuapp.com/chat
    ```
  * demain :
    ```
    $ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"demain\"}" https://agile-oasis-13310.herokuapp.com/chat
    ```
* On peut ensuite voir tous les échanges avec le bot :
  ```
  https://agile-oasis-13310.herokuapp.com/message/all
  ```
* Enfin, on peut supprimer le dernier échange avec le bot :
  ```
  $ curl -X DELETE https://agile-oasis-13310.herokuapp.com/messages/last
  ```

## Installation

Assurez-vous d'avoir installé Node.JS avant de commencer.

```
$ npm install
```

## Déploiement

Afin de le déployer en local sur une machine modifier la variable url par votre localhost par exemple :
```
const url = "http://localhost:27017/chatbot";
```

## Créer avec

* [Express](https://expressjs.com/en/api.html) - The web framework used

