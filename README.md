# Hackathon Back End

<br />

## 1. Prérequis pour l'exercice

  - Installation de NodeJS (node 10.15+ / npm 6.4+)
  - Navigateur (Chromium)
  - [Visual Studio Code](https://code.visualstudio.com/)
  - Git [git-scm.com](https://git-scm.com/downloads)


## 2. Documentation générale
- Express JS : [expressjs.com](https://expressjs.com/)
- MongoDB : [mongodb.com](https://mongodb.com/)


## 3. Étapes d'initialisation

1. Clone repos
2. Installation package : `npm install`
3. Test de démarrage : `node server.js`
4. Ouvrir nav. `http://localhost:3010` (le port peut être variable)
5. Test du démarrage de MongoDB, commande : `mongo`


---

<br />
<br />

## 4. Hack #1

### > Objectif
Montrer son talent avec la gestion d'Express.js et de mongoDB.

Le plus important, la propreté du code TypeScript et la méthodologie.


### > Étapes


L'entier de l'exercice sera écrit en TypeScript.

1. Dans mongo : préparer un BD nommé `geo`
2. Dans mongo : ajouter une collection nommée `feature`
3. Mettre en place les routes (path) complètes (CRUD) nommées `feature` pour charger les `features` du fichier `data/data-ge.json` et lire les éléments stockés dans la BD mongo
4. Structurer la collection `feature` pour respecter le schéma GeoJson (voir fichier `data-ge.json > features`)

<br />
<br />
<br />

---


## 6. Hack #2

### > Objectif

Montrer son talent de spécialiste du spatial !

Le plus important, la propreté du code TypeScript et la méthodologie.

### > Étapes

1. Créer une route (path) nommée `surface` pour calculer la surface de chaque `feature`
2. Créer une route (path) nommée `inner` pour déterminer lequel des périmètres est à l'intérieur d'un autre périmètre. (opération a effectuer avec les requêtes mongo spatial)

