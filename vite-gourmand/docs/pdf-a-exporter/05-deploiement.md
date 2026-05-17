# Deploiement - Vite & Gourmand

## Table des matieres

1. Objectif
2. Netlify
3. Build
4. API Express
5. Variables
6. Captures a inserer
7. Conclusion

## 1. Objectif

Ce document resume le deploiement du front-end Vite & Gourmand sur Netlify.

## 2. Netlify

Le front-end est deploye sur Netlify a partir du depot GitHub public :

```text
https://github.com/catcodecat/vite-gourmand
```

## 3. Build

Configuration :

```text
Commande de build : npm run build
Dossier de publication : dist
```

## 4. API Express

Netlify sert le front statique. L'API Express situee dans `server/` doit etre hebergee separement si elle doit fonctionner en production.

## 5. Variables

Variable front importante :

```text
VITE_API_URL
```

Elle doit pointer vers l'URL publique de l'API.

## 6. Captures a inserer

[Capture à insérer : déploiement Netlify]

[Capture à insérer : paramètres de build Netlify]

[Capture à insérer : variables d’environnement]

## 7. Conclusion

Le deploiement front est pret pour Netlify. La production complete necessite de confirmer l'hebergement de l'API.
