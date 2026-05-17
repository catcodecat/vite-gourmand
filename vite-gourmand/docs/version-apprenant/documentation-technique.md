# Documentation technique - Vite & Gourmand

## 1. Présentation

Ce document explique simplement la partie technique du projet Vite & Gourmand.

Le projet contient un front-end, un back-end et deux bases de données.

## 2. Front-end

Le front-end est fait avec React et Vite.

J'ai utilisé React parce que je peux créer des composants réutilisables et mieux organiser mes pages.

Le dossier principal est :

```text
src
```

Le build pour Netlify est dans :

```text
dist
```

## 3. Back-end

Le back-end est fait avec Node.js et Express.

Le dossier du back-end local est :

```text
server
```

Il sert à gérer les routes API, les utilisateurs, les commandes, les avis et l'administration.

## 4. API

L'API contient des routes pour :

- l'authentification ;
- les menus ;
- les commandes ;
- les avis ;
- le contact ;
- l'administration.

## 5. Base relationnelle

La base relationnelle est en MySQL.

Elle contient les données importantes du projet :

- utilisateurs ;
- rôles ;
- menus ;
- commandes ;
- avis.

Les fichiers sont dans :

```text
database/sql
```

## 6. Base non relationnelle

La base non relationnelle est en MongoDB.

Elle sert pour les statistiques et les données d'analyse.

Les fichiers sont dans :

```text
database/nosql
```

## 7. Sécurité

J'ai prévu plusieurs points de sécurité :

- mots de passe hashés ;
- connexion avec token JWT ;
- routes protégées ;
- rôles utilisateur, employé et administrateur ;
- variables sensibles dans `.env`.

## 8. Déploiement

Le front-end est prévu sur Netlify.

Le dossier de publication Netlify est :

```text
dist
```

Le back-end Express doit être hébergé séparément si je veux l'utiliser en production.

## 9. Captures d'écran disponibles

Les captures d'écran associées sont disponibles dans le dossier `docs/captures/`.

Captures liées à la documentation technique :

- `dossier-docs.png`
- `dossier-database.png`
- `github-repository.png`

## 10. Conclusion

Le projet est organisé avec une séparation claire entre l'interface, l'API et les bases de données.
