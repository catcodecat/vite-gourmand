# Synthèse pour la copie ECF - Vite & Gourmand

## 1. Présentation

Vite & Gourmand est une application web de traiteur.

J'ai créé cette application pour présenter des menus et faciliter les commandes.

## 2. Contexte ECF

Ce projet est réalisé pour mon ECF Studi.

Il me permet de montrer un projet complet avec une interface, un back-end, deux bases de données et une documentation.

## 3. Objectifs

Les objectifs du projet sont :

- présenter les menus ;
- permettre l'inscription ;
- permettre la connexion ;
- permettre une commande ;
- gérer plusieurs rôles ;
- documenter le projet ;
- préparer le déploiement sur Netlify.

## 4. Public cible

Le projet concerne :

- les visiteurs ;
- les clients ;
- les employés ;
- l'administrateur.

## 5. Choix techniques

J'ai utilisé React parce que les composants permettent de mieux organiser les pages.

J'ai utilisé Express pour créer une API simple.

J'ai utilisé MySQL pour les données structurées comme les utilisateurs et les commandes.

J'ai utilisé MongoDB pour les statistiques.

J'ai choisi Netlify pour publier le front-end.

## 6. Front-end

Le front-end contient :

- les pages ;
- les composants ;
- les appels API ;
- les styles ;
- les données locales de secours.

## 7. Back-end

Le back-end local est dans le dossier `server`.

Il gère les routes API, l'authentification et les données.

## 8. Bases de données

La base SQL est en MySQL.

La base non relationnelle est en MongoDB.

Les fichiers sont dans `database/sql` et `database/nosql`.

## 9. Sécurité

J'ai prévu :

- des mots de passe hashés ;
- des tokens JWT ;
- des rôles ;
- des routes protégées.

## 10. Gestion de projet

J'utilise Notion pour organiser les tâches.

Lien Notion :

<https://www.notion.so/362b64d300a6801f9677c455fa92c918?v=8434226078014d1e9793c54f3c3a146a&source=copy_link>

## 11. Déploiement

Le front-end est prévu sur Netlify.

Le dossier de publication est `dist`.

Lien Netlify :

<https://startling-bonbon-2b9ff8.netlify.app>

## 12. Difficultés

Les principales difficultés sont :

- organiser tous les documents ECF ;
- comprendre la différence entre le front déployé et l'API ;
- préparer les bases SQL et MongoDB ;
- prévoir les captures et les PDF.

## 13. Captures d'écran disponibles

Les captures d'écran associées sont disponibles dans le dossier `docs/captures/`.

Captures utiles pour la synthèse ECF :

- `github-repository.png`
- `github-readme.png`
- `netlify-deploy.png`
- `notion-gestion-projet.png`

## 14. Améliorations possibles

Je pourrais ajouter :

- plus de tests ;
- une API hébergée ;
- une documentation API plus complète ;
- une meilleure partie RGPD ;
- plus de statistiques.

## 15. Conclusion

Ce projet montre une application complète avec plusieurs rôles, un front-end, un back-end, une base SQL, une base MongoDB et une documentation