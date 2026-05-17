# Synthese pour copie ECF - Vite & Gourmand

## 1. Presentation du projet

Vite & Gourmand est une application web de traiteur fictif. Elle permet de consulter des menus, creer un compte, passer une commande et acceder a des tableaux de bord selon le role de l'utilisateur.

Le projet a ete prepare pour un rendu ECF Studi. Il regroupe une interface front-end, une API back-end, une base de donnees relationnelle, une base non relationnelle et une documentation complete.

## 2. Contexte de l'ECF

Dans le cadre de l'ECF Studi, le projet doit montrer la capacite a analyser un besoin, concevoir une solution, developper une application, documenter les choix techniques et preparer un deploiement.

Le dossier doit aussi montrer les livrables attendus : cahier des charges, maquettes, diagrammes, bases de donnees, documentation technique, tests, captures et exports PDF.

## 3. Objectifs du projet

Les objectifs principaux sont :

- proposer une application web responsive ;
- presenter un catalogue de menus traiteur ;
- permettre l'inscription et la connexion ;
- permettre la commande ou reservation ;
- proposer un tableau de bord utilisateur ;
- proposer un espace employe ;
- proposer un espace administrateur ;
- utiliser MySQL et MongoDB ;
- deployer le front-end sur Netlify ;
- fournir une documentation claire pour l'ECF.

## 4. Public cible

Le public cible comprend :

- les visiteurs qui consultent les offres ;
- les clients qui passent commande ;
- les employes qui suivent les commandes ;
- l'administrateur qui gere les utilisateurs et consulte les statistiques ;
- les evaluateurs Studi qui analysent le projet.

## 5. Besoins identifies

Les besoins fonctionnels sont :

- consulter une page d'accueil ;
- consulter les menus ;
- consulter le detail d'un menu ;
- creer un compte ;
- se connecter ;
- passer une commande ;
- consulter un dashboard ;
- gerer les commandes et avis ;
- gerer les utilisateurs ;
- consulter les statistiques.

Les besoins non fonctionnels sont :

- interface responsive ;
- navigation claire ;
- securite des acces ;
- documentation complete ;
- separation entre front-end et back-end ;
- bases de donnees coherentes.

## 6. Fonctionnalites developpees

Les fonctionnalites detectees dans le projet sont :

- pages publiques : accueil, menus, detail menu, contact, mentions legales, CGV ;
- authentification : inscription et connexion ;
- commande ;
- tableau de bord utilisateur ;
- tableau de bord employe ;
- tableau de bord administrateur ;
- gestion utilisateurs ;
- moderation d'avis ;
- analytics admin ;
- emails simules.

## 7. Choix techniques

Le projet utilise React et Vite pour le front-end, Node.js et Express pour l'API, MySQL pour les donnees relationnelles et MongoDB pour les donnees analytics.

Ce choix permet de separer les responsabilites :

- React gere l'interface ;
- Express gere la logique API ;
- MySQL structure les donnees metier ;
- MongoDB stocke les indicateurs analytics ;
- Netlify publie le front-end statique.

## 8. Justification de la stack

React et Vite permettent de creer une application moderne et rapide a compiler. Express est simple et adapte a une API REST. MySQL est pertinent pour les donnees liees comme les utilisateurs, menus et commandes. MongoDB est utilise pour des donnees analytics plus souples.

Cette stack est coherente pour un projet ECF car elle montre plusieurs competences : front-end, back-end, SQL, NoSQL, securite et deploiement.

## 9. Front-end

Le front-end est situe dans `src/`.

Il contient :

- les pages ;
- les composants ;
- le store Zustand ;
- les services d'appel API ;
- les donnees locales de secours ;
- le style Tailwind.

Les routes principales sont l'accueil, les menus, la connexion, l'inscription, la commande et les tableaux de bord.

## 10. Back-end

Le back-end est situe dans `server/`.

Il contient :

- `app.js` pour lancer Express ;
- des routes API ;
- des controleurs ;
- des middlewares d'authentification ;
- des services ;
- les connexions MySQL et MongoDB.

L'API expose notamment les routes `auth`, `menus`, `orders`, `reviews`, `contact` et `admin`.

## 11. Base de donnees relationnelle

La base relationnelle utilise MySQL.

Elle gere :

- roles ;
- utilisateurs ;
- menus ;
- plats ;
- allergenes ;
- commandes ;
- avis ;
- messages de contact.

Les livrables SQL sont dans `database/sql/` avec un vrai `schema.sql` et un vrai `seed.sql`.

## 12. Base de donnees non relationnelle

La base NoSQL utilise MongoDB.

Elle gere les collections :

- `statistics` ;
- `revenue` ;
- `analytics`.

MongoDB est utilise pour les indicateurs d'administration, car ces donnees peuvent evoluer plus facilement qu'un modele relationnel strict.

## 13. Securite

Les mesures de securite identifiees sont :

- mots de passe hashes avec bcrypt ;
- authentification JWT ;
- routes protegees ;
- verification des roles ;
- variables sensibles dans `.env` ;
- CORS configure avec l'URL du front.

La partie RGPD et les secrets de production restent a verifier avant une mise en ligne definitive.

## 14. Gestion de projet

La gestion de projet est documentee avec Notion.

Lien Notion :

```text
https://www.notion.so/362b64d300a6801f9677c455fa92c918?v=8434226078014d1e9793c54f3c3a146a&source=copy_link
```

Le projet recommande un workflow Git avec :

- `main` pour la version stable ;
- `develop` pour l'integration ;
- `feature/*` pour les fonctionnalites.

Le lien Notion devra etre verifie avant le rendu pour confirmer qu'il est accessible au jury.

## 15. Maquettage

Les wireframes et mockups sont prepares dans `docs/maquettes/`.

Ils couvrent :

- page d'accueil desktop ;
- catalogue desktop ;
- dashboard desktop ;
- page d'accueil mobile ;
- catalogue mobile ;
- dashboard mobile.

Les visuels finaux peuvent etre produits dans Figma, Canva, Penpot ou a partir de captures de l'application.

## 16. Developpement

Le developpement est organise autour d'une structure claire :

- `src/` pour le front ;
- `server/` pour l'API ;
- `database/` pour les livrables BDD ;
- `docs/` pour les documents ECF ;
- `dist/` pour le build front-end.

## 17. Tests

La strategie de tests repose sur une recette manuelle documentee dans `docs/tests-recette.md`.

Les tests couvrent :

- navigation ;
- formulaires ;
- connexion ;
- commandes ;
- dashboards ;
- responsive ;
- securite simple ;
- bases de donnees ;
- deploiement.

## 18. Deploiement

Le front-end est prevu pour Netlify avec :

- commande de build : `npm run build` ;
- dossier de publication : `dist`.

Limite importante : Netlify heberge le front statique. L'API Express doit etre hebergee separement si elle doit etre utilisee en production.

## 19. Difficultes rencontrees

Difficultes possibles a presenter :

- distinguer le deploiement front statique et le back-end Express ;
- organiser les livrables ECF ;
- documenter a la fois SQL et NoSQL ;
- prevoir les roles utilisateur, employe et administrateur ;
- preparer des tests sans automatisation complete.

## 20. Solutions apportees

Solutions mises en place :

- documentation de deploiement dediee ;
- checklist finale ECF ;
- livrables SQL et NoSQL separes ;
- diagrammes Mermaid ;
- maquettes et wireframes ;
- tableau de recette ;
- dossier `pdf-a-exporter`.

## 21. Limites du projet

Limites identifiees :

- API de production a confirmer ;
- captures finales a ajouter ;
- tests manuels a executer ;
- exports PDF a produire ;
- RGPD a completer.

## 22. Ameliorations futures

Ameliorations envisageables :

- heberger l'API ;
- ajouter des tests automatises ;
- ajouter Swagger/OpenAPI ;
- ajouter un paiement ;
- enrichir les dashboards ;
- ameliorer l'accessibilite ;
- completer la partie RGPD ;
- ajouter des notifications.

## 23. Conclusion professionnelle

Vite & Gourmand est un projet structure qui repond aux attendus principaux d'un ECF Studi : application web, documentation, base relationnelle, base non relationnelle, securite, deploiement front-end et livrables de conception.

Les derniers travaux consistent surtout a faire les captures, executer la recette et exporter les documents PDF.
