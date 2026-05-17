# Cahier des charges - Vite & Gourmand

## 1. Titre du projet

Vite & Gourmand

## 2. Contexte du projet

Vite & Gourmand est une entreprise fictive de traiteur. Le projet consiste a creer une application web permettant de presenter les menus, faciliter les commandes et proposer des espaces adaptes aux differents utilisateurs.

Ce projet est realise dans le cadre d'un ECF Studi. Il doit demontrer la capacite a concevoir une application web structuree, documentee et exploitable, avec une interface front-end, une API back-end, une base de donnees relationnelle et une base non relationnelle.

## 3. Objectif general de l'application

L'objectif general est de fournir une application web permettant :

- de consulter les offres de menus traiteur ;
- de creer un compte client ;
- de passer une commande ;
- de suivre les commandes ;
- de gerer les utilisateurs et employes ;
- d'administrer les avis et les statistiques ;
- de presenter un projet complet et documente pour l'ECF.

## 4. Public cible

Le public cible comprend :

- des visiteurs souhaitant decouvrir les menus ;
- des clients souhaitant commander un service traiteur ;
- des employes de l'entreprise fictive ;
- un administrateur charge de la gestion de l'application ;
- les evaluateurs ECF Studi, qui consultent le projet et ses livrables.

## 5. Acteurs de l'application

### Visiteur

Le visiteur peut consulter les pages publiques de l'application.

Actions principales :

- consulter la page d'accueil ;
- consulter le catalogue des menus ;
- consulter le detail d'un menu ;
- creer un compte ;
- envoyer un message via le formulaire de contact ;
- consulter les pages legales.

### Utilisateur / client

L'utilisateur client dispose d'un compte.

Actions principales :

- se connecter ;
- passer une commande ;
- consulter son tableau de bord ;
- suivre ses commandes ;
- consulter ses informations.

### Employe

L'employe dispose d'un acces interne.

Actions principales :

- consulter les commandes ;
- modifier le statut d'une commande ;
- participer a la moderation des avis ;
- suivre l'activite operationnelle.

### Administrateur

L'administrateur dispose des droits les plus larges.

Actions principales :

- gerer les utilisateurs ;
- creer des comptes employes ;
- activer ou desactiver des comptes ;
- consulter les statistiques ;
- superviser les commandes et avis.

## 6. Besoins fonctionnels

Les besoins fonctionnels identifies sont :

- afficher une page d'accueil claire ;
- afficher un catalogue de menus ;
- permettre la consultation du detail d'un menu ;
- proposer une inscription utilisateur ;
- proposer une connexion securisee ;
- permettre la creation d'une commande ;
- permettre le suivi des commandes ;
- proposer un tableau de bord utilisateur ;
- proposer un tableau de bord employe ;
- proposer un tableau de bord administrateur ;
- permettre la gestion des avis ;
- permettre la gestion des utilisateurs ;
- permettre l'envoi d'un message de contact ;
- afficher les mentions legales et les conditions generales de vente.

## 7. Besoins non fonctionnels

Les besoins non fonctionnels sont :

- interface responsive desktop et mobile ;
- navigation simple et comprehensible ;
- temps de chargement raisonnable ;
- lisibilite des contenus ;
- organisation claire du code ;
- documentation adaptee au rendu ECF ;
- separation entre front-end et back-end ;
- utilisation de variables d'environnement ;
- securisation des acces sensibles ;
- possibilite de deployer le front-end sur Netlify.

## 8. Fonctionnalites attendues

### Catalogue et menus

- afficher les menus disponibles ;
- afficher les informations importantes : titre, description, prix, theme, regime alimentaire ;
- proposer une page detail ;
- permettre a l'utilisateur de choisir un menu pour commander.

### Authentification

- inscription ;
- connexion ;
- conservation du token JWT cote front-end ;
- acces aux routes protegees selon le role.

### Commandes

- creation d'une commande ;
- association a un menu ;
- gestion des informations client ;
- suivi du statut ;
- historique de statut cote base de donnees.

### Administration

- consultation des utilisateurs ;
- creation d'employes ;
- activation/desactivation de comptes ;
- consultation des statistiques.

### Avis et contact

- creation d'avis ;
- moderation des avis ;
- envoi d'un message de contact ;
- simulation d'emails selon certaines actions.

## 9. Contraintes techniques

Le projet utilise les technologies suivantes :

- React et Vite pour le front-end ;
- React Router pour la navigation ;
- Tailwind CSS pour la mise en forme ;
- Zustand pour le store front-end ;
- Node.js et Express pour l'API ;
- JWT pour l'authentification ;
- bcrypt pour le hash des mots de passe ;
- MySQL pour les donnees relationnelles ;
- MongoDB pour les donnees non relationnelles ;
- Netlify pour le deploiement front-end.

Contraintes importantes :

- le front-end est publie dans le dossier `dist` ;
- l'API Express doit etre lancee ou hebergee separement ;
- les variables sensibles ne doivent pas etre versionnees ;
- le front utilise `VITE_API_URL` pour connaitre l'URL de l'API.

## 10. Contraintes ECF Studi

Le rendu doit contenir :

- un depot GitHub public ;
- une application fonctionnelle ;
- une documentation projet ;
- une base relationnelle ;
- une base non relationnelle ;
- des scripts SQL reels ;
- une documentation technique ;
- un cahier des charges ;
- des maquettes ou wireframes ;
- des diagrammes ;
- une documentation de deploiement ;
- des tests ou une recette ;
- des captures d'ecran ;
- des exports PDF si demandes.

## 11. Securite

Les points de securite identifies sont :

- mots de passe hashes avec bcrypt ;
- authentification par token JWT ;
- routes protegees par middleware ;
- roles differencies : utilisateur, employe, administrateur ;
- configuration CORS avec l'URL du client ;
- variables sensibles stockees dans `.env` ;
- fichier `.env.example` fourni sans secret de production.

Points a completer ou verifier :

- politique RGPD ;
- gestion des donnees personnelles ;
- verification des secrets en production ;
- controle des acces apres deploiement.

## 12. Bases de donnees

### Base relationnelle

La base relationnelle utilise MySQL.

Elle stocke les donnees structurees principales :

- roles ;
- utilisateurs ;
- menus ;
- images de menus ;
- plats ;
- allergenes ;
- commandes ;
- historique des statuts ;
- avis ;
- messages de contact ;
- horaires ;
- tokens de reinitialisation.

Livrables associes :

- `database/sql/schema.sql`
- `database/sql/seed.sql`
- `database/sql/README-database-sql.md`

### Base non relationnelle

La base non relationnelle utilise MongoDB.

Elle stocke les donnees analytics :

- statistiques ;
- chiffre d'affaires ;
- indicateurs flexibles.

Livrables associes :

- `database/nosql/collections.md`
- `database/nosql/seed-mongodb.json`
- `database/nosql/README-database-nosql.md`

## 13. Deploiement

Le front-end est prevu pour etre deploye sur Netlify.

Configuration attendue :

- commande de build : `npm run build` ;
- dossier de publication : `dist` ;
- depot GitHub : `https://github.com/catcodecat/vite-gourmand`.

Limite importante :

Netlify sert le front-end statique. L'API Express situee dans le dossier `server` doit etre hebergee separement si l'application doit fonctionner completement en production.

## 14. Limites du projet

Les limites identifiees sont :

- API non encore documentee sous forme Swagger/OpenAPI ;
- API de production a heberger separement ;
- captures d'ecran a ajouter manuellement ;
- maquettes finales a exporter depuis un outil graphique ou depuis l'application ;
- tests automatises limites ou absents ;
- partie RGPD a completer.

## 15. Ameliorations possibles

Ameliorations envisageables :

- ajouter des tests automatises ;
- creer une documentation Swagger ;
- ajouter un paiement en ligne fictif ou reel ;
- ajouter une gestion avancee des stocks ;
- ajouter un systeme de notification ;
- enrichir les statistiques administrateur ;
- ameliorer l'accessibilite ;
- ajouter un back-office plus complet ;
- deployer l'API et les bases en production.

## 16. Conclusion

Vite & Gourmand est un projet complet adapte a un ECF Studi. Il presente une application web avec plusieurs roles, une architecture front-end/back-end, une base SQL, une base NoSQL et une documentation de projet.

Le projet est deja structure pour presenter les fonctionnalites principales attendues. Les elements restants concernent surtout la finalisation des liens de deploiement, des captures, des maquettes finales, des tests et des exports PDF.
