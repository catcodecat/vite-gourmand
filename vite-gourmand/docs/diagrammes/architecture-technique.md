# Architecture technique - Vite & Gourmand

## Objectif

Ce document presente l'architecture technique globale du projet Vite & Gourmand.

## Diagramme Mermaid

```mermaid
flowchart TB
  User["Utilisateur navigateur"]
  Netlify["Netlify\nFront-end statique"]
  React["Application React / Vite"]
  API["API Express\nNode.js"]
  MySQL["Base MySQL\nDonnées métier"]
  Mongo["Base MongoDB\nAnalytics"]
  Email["Emails simulés\nFichiers locaux"]
  GitHub["GitHub\nDépôt public"]

  User --> Netlify
  Netlify --> React
  React -->|"VITE_API_URL"| API
  API --> MySQL
  API --> Mongo
  API --> Email
  GitHub --> Netlify
```

## Description

Le projet est separe en plusieurs blocs :

- le depot GitHub contient le code source ;
- Netlify publie le front-end statique ;
- React/Vite fournit l'interface utilisateur ;
- l'API Express gere les routes metier ;
- MySQL stocke les donnees relationnelles ;
- MongoDB stocke les donnees analytics ;
- les emails sont simules sous forme de fichiers locaux.

## Deploiement

Le front-end est deployable sur Netlify avec :

```text
Commande de build : npm run build
Dossier de publication : dist
```

Point important :

```text
L'API Express doit etre hebergee separement pour une production complete.
```

## Variables importantes

| Variable | Role |
| --- | --- |
| `VITE_API_URL` | URL de l'API consommee par le front-end. |
| `CLIENT_URL` | URL du front autorisee par CORS cote API. |
| `JWT_SECRET` | Secret utilise pour signer les tokens JWT. |
| `MYSQL_*` | Parametres de connexion MySQL. |
| `MONGO_URI` | URI de connexion MongoDB. |

## Flux principal

```mermaid
flowchart LR
  Client["Client"]
  Front["Front React"]
  Back["API Express"]
  SQL["MySQL"]
  NoSQL["MongoDB"]

  Client -->|"Navigation"| Front
  Front -->|"Requêtes HTTP"| Back
  Back -->|"CRUD métier"| SQL
  Back -->|"Indicateurs"| NoSQL
  Back -->|"Réponse JSON"| Front
  Front -->|"Affichage"| Client
```

## Conclusion

L'architecture respecte une separation claire entre l'interface, l'API et les bases de donnees. Elle permet de repondre aux contraintes ECF avec une base relationnelle, une base non relationnelle et une documentation de deploiement.
