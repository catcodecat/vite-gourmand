# Deploiement du projet Vite & Gourmand

## Objectif

Ce document explique le deploiement du front-end Vite & Gourmand sur Netlify et les points a finaliser pour connecter l'application a une API Express en production.

Le projet contient :

- un front-end React/Vite ;
- une API Express dans le dossier `server` ;
- un build front-end dans le dossier `dist`.

## Informations connues

| Element | Valeur |
| --- | --- |
| Nom du projet | Vite & Gourmand |
| Depot GitHub public | <https://github.com/catcodecat/vite-gourmand> |
| Plateforme de deploiement front-end | Netlify |
| Dossier de publication Netlify | `dist` |
| Dossier de publication | `dist` |
| Dossier du back-end local | `server` |
| Lien Netlify | <https://startling-bonbon-2b9ff8.netlify.app> |

## Deploiement du front-end sur Netlify

Netlify peut deployer le front-end React/Vite a partir du depot GitHub public.

Le principe est le suivant :

1. Netlify se connecte au depot GitHub.
2. Netlify installe les dependances avec npm.
3. Netlify execute la commande de build.
4. Netlify publie le contenu du dossier `dist`.

## Connexion avec GitHub

Etapes conseillees :

1. Se connecter a Netlify.
2. Cliquer sur `Add new site`.
3. Choisir `Import an existing project`.
4. Selectionner GitHub comme fournisseur Git.
5. Autoriser Netlify a acceder au depot.
6. Choisir le depot :

https://github.com/catcodecat/vite-gourmand

7. Verifier la branche a deployer, en general `main`.

## Parametres de build Netlify

Configuration probable :

| Parametre | Valeur |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Base directory | racine du projet |

La commande `npm run build` genere le dossier `dist` avec le front-end statique pret a etre publie.

## Role du dossier `dist`

Le dossier `dist` contient le resultat du build Vite :

- `dist/index.html`
- fichiers JavaScript et CSS dans `dist/assets/`

Ce dossier est le dossier de publication Netlify. Il ne contient pas le serveur Express, ni les bases de donnees.

## Limite importante : front statique et API Express

Netlify sert principalement le front-end statique genere par Vite.

L'API Express du projet se trouve dans :

server

Cette API ne sera pas automatiquement hebergee par un deploiement Netlify statique classique.

Si l'application doit utiliser l'API en production, il faut heberger le back-end separement, par exemple sur une plateforme compatible Node.js. Il faudra aussi fournir une base MySQL et une base MongoDB accessibles par l'API de production.

## Role de `VITE_API_URL`

Le front-end utilise la variable :

VITE_API_URL=http://localhost:5000/api

En local, cette variable pointe vers l'API Express locale.

En production, elle doit pointer vers l'URL publique de l'API hebergee separement.

Exemple :

VITE_API_URL=https://api-vite-gourmand.example.com/api

Dans Netlify, cette variable doit etre ajoutee dans les variables d'environnement du site si le front doit consommer une API de production.

## Variables a verifier pour la production

### Cote Netlify

- `VITE_API_URL` : URL publique de l'API.

### Cote API Express

- `PORT`
- `CLIENT_URL`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `MYSQL_HOST`
- `MYSQL_PORT`
- `MYSQL_USER`
- `MYSQL_PASSWORD`
- `MYSQL_DATABASE`
- `MONGO_URI`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

La variable `CLIENT_URL` de l'API doit correspondre a l'URL Netlify afin que la configuration CORS autorise le front-end de production.

## Etapes pour finaliser le deploiement front-end

1. Verifier que le depot GitHub public est a jour.
2. Verifier que le projet se construit localement avec :

npm run build

3. Connecter Netlify au depot GitHub.
4. Configurer la commande de build :

npm run build

5. Configurer le dossier de publication :

dist

6. Ajouter `VITE_API_URL` dans Netlify si une API de production est disponible.
7. Lancer le premier deploiement.
8. Tester l'URL Netlify.
9. Verifier les routes front-end principales :

- accueil ;
- menus ;
- detail menu ;
- connexion ;
- inscription ;
- commande ;
- contact ;
- tableaux de bord.

10. Verifier que le lien Netlify fonctionne : <https://startling-bonbon-2b9ff8.netlify.app>.

## Etapes pour finaliser le deploiement back-end

1. Choisir une plateforme d'hebergement compatible Node.js.
2. Deployer le dossier `server` avec les dependances du projet.
3. Configurer les variables d'environnement de production.
4. Configurer une base MySQL de production.
5. Importer `server/database/schema.sql`.
6. Importer `server/database/seed.sql` si les donnees de demonstration sont necessaires.
7. Configurer une base MongoDB de production.
8. Verifier le healthcheck :

https://URL_API_PRODUCTION/api/health

9. Reporter l'URL API dans `VITE_API_URL`.
10. Relancer le build et le deploiement Netlify si la variable change.

## Elements encore a completer

| Element | Statut | Commentaire |
| --- | --- | --- |
| Lien Netlify | Fait | URL reelle ajoutee : <https://startling-bonbon-2b9ff8.netlify.app>. |
| URL API de production | À faire | Necessaire si le front doit utiliser l'API Express hors local. |
| Variable `VITE_API_URL` sur Netlify | À faire | A renseigner avec l'URL publique de l'API. |
| Variable `CLIENT_URL` cote API | À faire | A renseigner avec l'URL Netlify. |
| Hebergement MySQL production | À faire | Necessaire pour les donnees metier. |
| Hebergement MongoDB production | À faire | Necessaire pour les analytics. |
| Tests apres deploiement | À faire | Verifier navigation, formulaires, authentification et tableaux de bord. |

## Conclusion

Le front-end Vite & Gourmand est pret a etre publie sur Netlify via le dossier `dist`. Pour une version production complete, l'API Express, MySQL et MongoDB doivent etre heberges et configures separement, puis relies au front-end avec `VITE_API_URL`.
