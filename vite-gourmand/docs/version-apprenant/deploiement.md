# Déploiement - Vite & Gourmand

## 1. Présentation

Ce document explique comment déployer le front-end du projet Vite & Gourmand.

Le choix réel du projet est Netlify.

## 2. Dépôt GitHub

Le dépôt GitHub public est :

<https://github.com/catcodecat/vite-gourmand>

## 3. Plateforme utilisée

La plateforme utilisée pour le front-end est :

Netlify.

Lien Netlify :


https://startling-bonbon-2b9ff8.netlify.app/


## 4. Commande de build

La commande de build e```bash
npm run build
```

## 5. Dossier de publication

Le dossier de publication Netlify est `dist`.

## 6. Back-end

Le back-end local est dans le dossier `server`.

Netlify sert surtout le front-end statique. Le back-end Express doit être hébergé séparément si je veux que l'API fonctionne en production.

## 7. Variable VITE_API_URL

Le front-end utilise la variable :

```text
VITE_API_URL
```

Elle sert à indiquer l'adresse de l'API.

En local, elle peut pointer vers :

```text
http://localhost:5000/api
```

En production, elle devra pointer vers l'API hébergée.

## 8. Étapes à faire

1. Vérifier que le dépôt GitHub est à jour.
2. Connecter Netlify au dépôt GitHub.
3. Indiquer la commande `npm run build`.
4. Indiquer le dossier `dist`.
5. Ajouter `VITE_API_URL` si besoin.
6. Lancer le déploiement.
7. Tester le lien Netlify.

## 9. Captures d'écran disponibles

Les captures d'écran associées sont disponibles dans le dossier `docs/captures/`.

Captures liées au déploiement :

- `netlify-deploy.png`
- `accueil-netlify-desktop.png`

## 10. Conclusion

Le front-end  est déployé sur Netlify avec le dossier `dist`. Le back-end devra être hébergé séparément si l'API doit fonctionner en ligne.
