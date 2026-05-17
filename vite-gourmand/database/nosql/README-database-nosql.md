# Base non relationnelle NoSQL - Vite & Gourmand

## Objectif

Cette documentation presente la base non relationnelle du projet Vite & Gourmand pour le dossier ECF.

MongoDB est utilise pour stocker des indicateurs analytics consultables depuis l'espace administrateur.

## Technologie

- Type : base non relationnelle.
- SGBD : MongoDB.
- ODM : Mongoose.
- Base par defaut : `vite_gourmand`.
- URI locale par defaut : `mongodb://127.0.0.1:27017/vite_gourmand`.

## Fichiers livrables

| Fichier | Role |
| --- | --- |
| `database/nosql/collections.md` | Decrit les collections MongoDB et leurs champs. |
| `database/nosql/seed-mongodb.json` | Fournit un jeu de donnees de demonstration NoSQL. |
| `database/nosql/README-database-nosql.md` | Explique le role de MongoDB dans le projet. |

## Collections

Le back-end declare trois modeles Mongoose :

- `Statistic`, collection `statistics` ;
- `Revenue`, collection `revenue` ;
- `Analytics`, collection `analytics`.

## Role des collections

### `statistics`

Cette collection stocke des indicateurs simples sous forme `label`, `value`, `period`.

Exemples :

- nombre de commandes ;
- nombre de menus actifs ;
- nombre d'avis valides.

### `revenue`

Cette collection stocke le chiffre d'affaires par mois.

Exemple :

```json
{
  "month": "2026-05",
  "amount": 1814.4
}
```

### `analytics`

Cette collection stocke des indicateurs plus flexibles avec un champ `details`.

Exemples :

- nombre total de convives ;
- panier moyen ;
- taux d'avis valides.

## Exemple d'import

Le fichier `seed-mongodb.json` est un livrable de demonstration. Il regroupe les documents par collection.

Pour importer manuellement les donnees, il est possible de copier chaque tableau dans la collection MongoDB correspondante, ou de creer un script d'import dedie si necessaire.

Exemple avec `mongoimport` pour une collection extraite dans un fichier separe :

```bash
mongoimport --db vite_gourmand --collection statistics --file statistics.json --jsonArray
mongoimport --db vite_gourmand --collection revenue --file revenue.json --jsonArray
mongoimport --db vite_gourmand --collection analytics --file analytics.json --jsonArray
```

## Justification du choix NoSQL

MongoDB est utilise pour les donnees analytics car ces donnees peuvent evoluer au fil du projet :

- ajout de nouveaux indicateurs ;
- structure de details variable selon la metrique ;
- lecture rapide pour l'espace administrateur ;
- separation entre donnees metier SQL et donnees d'analyse.

La base relationnelle MySQL reste responsable des entites principales et des relations fortes. MongoDB complete le projet avec un usage non relationnel clair et coherent pour l'ECF.
