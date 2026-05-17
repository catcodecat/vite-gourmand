# Analyse initiale du projet Vite & Gourmand

Date d'analyse : 2026-05-16

## 1. Structure du projet

Projet local analyse :

```text
vite-gourmand/
+-- dist/
|   +-- index.html
|   +-- assets/
|       +-- index-KynY3vWQ.js
|       +-- index-xAfxXECR.css
+-- server/
|   +-- app.js
|   +-- config/
|   |   +-- mongodb.js
|   |   +-- mysql.js
|   +-- controllers/
|   |   +-- adminController.js
|   |   +-- authController.js
|   |   +-- contactController.js
|   |   +-- menuController.js
|   |   +-- orderController.js
|   |   +-- reviewController.js
|   +-- database/
|   |   +-- schema.sql
|   |   +-- seed.sql
|   +-- middleware/
|   |   +-- auth.js
|   |   +-- errorHandler.js
|   +-- models/
|   |   +-- Analytics.js
|   |   +-- Revenue.js
|   |   +-- Statistic.js
|   +-- routes/
|   |   +-- adminRoutes.js
|   |   +-- authRoutes.js
|   |   +-- contactRoutes.js
|   |   +-- menuRoutes.js
|   |   +-- orderRoutes.js
|   |   +-- reviewRoutes.js
|   +-- services/
|   |   +-- emailService.js
|   |   +-- orderService.js
|   +-- utils/
|       +-- asyncHandler.js
|       +-- validators.js
+-- src/
|   +-- assets/
|   |   +-- brand.js
|   +-- components/
|   |   +-- Button.jsx
|   |   +-- DashboardSidebar.jsx
|   |   +-- FilterSidebar.jsx
|   |   +-- Footer.jsx
|   |   +-- HeroSection.jsx
|   |   +-- Input.jsx
|   |   +-- Loader.jsx
|   |   +-- MenuCard.jsx
|   |   +-- Modal.jsx
|   |   +-- Navbar.jsx
|   |   +-- OrderTimeline.jsx
|   |   +-- ReviewCard.jsx
|   |   +-- StatsSection.jsx
|   |   +-- Toast.jsx
|   +-- context/
|   |   +-- useAppStore.js
|   +-- data/
|   |   +-- menus.json
|   |   +-- orders.json
|   |   +-- reviews.json
|   |   +-- users.json
|   +-- hooks/
|   |   +-- usePageTitle.js
|   +-- layouts/
|   |   +-- AppLayout.jsx
|   +-- pages/
|   |   +-- AdminDashboard.jsx
|   |   +-- Contact.jsx
|   |   +-- EmployeeDashboard.jsx
|   |   +-- ErrorPage.jsx
|   |   +-- Home.jsx
|   |   +-- Legal.jsx
|   |   +-- Login.jsx
|   |   +-- MenuDetail.jsx
|   |   +-- Menus.jsx
|   |   +-- Order.jsx
|   |   +-- Register.jsx
|   |   +-- UserDashboard.jsx
|   +-- services/
|   |   +-- api.js
|   |   +-- mockApi.js
|   +-- utils/
|   |   +-- format.js
|   +-- main.jsx
|   +-- styles.css
+-- .env.example
+-- .gitignore
+-- API_DOCUMENTATION.md
+-- eslint.config.js
+-- index.html
+-- package-lock.json
+-- package.json
+-- postcss.config.js
+-- README.md
+-- tailwind.config.js
```

Le dossier `docs/` n'existait pas avant la creation de ce rapport.

## 2. Fichiers deja presents

### Racine

- `README.md` : presentation, installation, stack, scripts, workflow Git attendu, checklist avant soutenance.
- `API_DOCUMENTATION.md` : documentation des routes API.
- `package.json` et `package-lock.json` : dependances npm et scripts.
- `.env.example` : variables d'environnement attendues.
- `.gitignore` : exclusions Git.
- `index.html` : point d'entree Vite.
- `eslint.config.js`, `tailwind.config.js`, `postcss.config.js` : configuration outillage front.

### Front-end

- Pages React : accueil, menus, detail menu, commande, connexion, inscription, tableaux de bord utilisateur/employe/admin, contact, mentions legales, CGV, erreur.
- Composants UI : navigation, footer, cartes menu/avis, formulaires, modales, sidebar dashboard, stats, toast, loader.
- Services : `api.js` pour l'API Express, `mockApi.js` et fichiers JSON locaux pour donnees de secours.
- Store Zustand : `useAppStore.js`.

### Back-end

- API Express dans `server/app.js`.
- Routes separees pour authentification, menus, commandes, avis, contact et administration.
- Controleurs metier associes.
- Middleware JWT et roles.
- Services email simule et commandes.
- Connexions MySQL et MongoDB.
- Schemas MongoDB pour analytics, revenus et statistiques.
- Scripts SQL `schema.sql` et `seed.sql`.

### Build

- `dist/index.html`.
- Bundle JS genere dans `dist/assets/index-KynY3vWQ.js`.
- Bundle CSS genere dans `dist/assets/index-xAfxXECR.css`.

## 3. Technologies detectees

### Front-end

- React 19.
- Vite 7.
- React Router DOM 7.
- Tailwind CSS 3.
- Zustand.
- Framer Motion.
- React Icons.
- Recharts.
- Fetch natif pour les appels API.

### Back-end

- Node.js avec modules ES.
- Express 4.
- CORS.
- dotenv.
- JWT avec `jsonwebtoken`.
- Hash de mots de passe avec `bcrypt`.
- MySQL via `mysql2/promise`.
- MongoDB via `mongoose`.

### Qualite et build

- ESLint 9.
- Scripts npm : `dev`, `server`, `server:dev`, `db:schema`, `db:seed`, `build`, `preview`, `lint`.
- Deploiement prevu : Netlify avec dossier de publication `dist`.

## 4. Fonctionnalites detectees

### Fonctionnalites front

- Catalogue de menus traiteur.
- Detail d'un menu.
- Filtres menus.
- Creation de commande.
- Authentification utilisateur : connexion et inscription.
- Tableau de bord utilisateur.
- Tableau de bord employe.
- Tableau de bord administrateur.
- Gestion visuelle des commandes et statuts.
- Moderation/validation d'avis.
- Creation d'employe par administrateur.
- Activation/desactivation de compte.
- Formulaire de contact.
- Pages legales : mentions legales et CGV.
- Theme sombre/clair via store local.
- Fallback sur donnees JSON locales si l'API est indisponible.

### Fonctionnalites API

- Healthcheck : `GET /api/health`.
- Authentification : inscription, connexion, profil, demande de reset password simulee.
- Menus : liste, detail, creation, modification, suppression.
- Commandes : liste, creation, modification, annulation, changement de statut.
- Avis : liste, creation, moderation, demande d'avis par email simule.
- Administration : liste utilisateurs, creation employe, activation/desactivation, analytics.
- Contact : enregistrement d'un message.
- Emails simules via fichiers locaux.

## 5. Base SQL detectee

Base SQL detectee : oui.

- Technologie : MySQL.
- Configuration : `server/config/mysql.js`.
- Schema : `server/database/schema.sql`.
- Donnees de demonstration : `server/database/seed.sql`.
- Base declaree : `vite_gourmand`.

Tables detectees :

- `roles`
- `users`
- `menus`
- `menu_images`
- `dishes`
- `allergens`
- `dish_allergens`
- `menu_dishes`
- `orders`
- `order_status_history`
- `reviews`
- `contact_messages`
- `opening_hours`
- `password_reset_tokens`

La base SQL couvre les donnees metier principales : comptes, roles, menus, plats, allergenes, commandes, avis, messages de contact, horaires et tokens de reset.

## 6. Base NoSQL detectee

Base NoSQL detectee : oui.

- Technologie : MongoDB.
- ORM/ODM : Mongoose.
- Configuration : `server/config/mongodb.js`.
- URI par defaut : `mongodb://127.0.0.1:27017/vite_gourmand`.
- Modeles detectes :
  - `Statistic` avec collection `statistics`.
  - `Revenue` avec collection `revenue`.
  - `Analytics` avec collection `analytics`.

La base NoSQL est utilisee pour les donnees analytics/admin. Les collections sont alimentees via le controleur d'administration lors des appels analytics.

## 7. Documents ECF deja presents

Documents detectes :

- `README.md` : documentation projet et instructions locales.
- `API_DOCUMENTATION.md` : documentation des endpoints API.
- `.env.example` : modele de configuration technique.
- `server/database/schema.sql` : script de creation de la base SQL.
- `server/database/seed.sql` : jeu de donnees initial.
- `dist/` : build front-end pret pour publication Netlify.

Elements partiellement presents :

- Workflow Git attendu dans le `README.md`.
- Checklist avant soutenance dans le `README.md`.
- Liens d'examen prevus dans le `README.md`, mais encore marques `A COMPLETER`.
- Mentions legales et CGV presentes dans l'application, mais pas encore sous forme de livrable documentaire separe dans `docs/`.

## 8. Documents ECF manquants

Les livrables ECF Studi ci-dessous ne sont pas detectes sous forme de fichiers dedies dans le projet :

- Cahier des charges ou expression du besoin.
- Dossier de conception fonctionnelle.
- Dossier de conception technique.
- Wireframes ou maquettes.
- Charte graphique.
- Diagramme de cas d'utilisation.
- Diagrammes UML eventuels : classes, sequence, activite selon besoin du dossier.
- Dossier base de donnees complet : MCD, MLD, MPD, dictionnaire de donnees.
- Documentation d'installation/deploiement Netlify detaillee.
- Documentation de deploiement back-end, si l'API doit etre hebergee ailleurs que Netlify.
- Manuel utilisateur.
- Manuel administrateur/employe.
- Strategie de tests.
- Cahier de recette ou PV de recette.
- Captures d'ecran de l'application.
- Justificatifs de tests : lint, build, tests manuels.
- Dossier securite : authentification, roles, gestion des secrets, hash, JWT, CORS, RGPD.
- Documentation RGPD ou donnees personnelles.
- Tableau de gestion de projet ou export Notion.
- Historique Git ou preuve du workflow `main` / `develop` / `feature/*`.
- Liens finaux : depot GitHub public, application deployee, API deployee, outil de gestion de projet.
- Presentation/support de soutenance.

## 9. Points d'attention detectes

- Le `README.md` contient encore des placeholders `A COMPLETER` pour les liens d'examen.
- Le depot GitHub indique par la consigne est `https://github.com/catcodecat/vite-gourmand`, mais le `README.md` ne le renseigne pas encore.
- Netlify sert le dossier `dist`, mais l'API Express ne sera pas hebergee automatiquement par un deploiement statique Netlify classique.
- Le front utilise `VITE_API_URL`; il faudra definir cette variable dans Netlify si le front doit consommer une API distante.
- Les donnees front locales existent encore comme fallback, ce qui est utile en demo mais doit etre explique dans le dossier.
- Aucune suite de tests automatisee dediee n'a ete detectee.
- Aucun dossier documentaire ECF dedie n'etait present avant ce rapport.

## 10. Ordre conseille pour completer le dossier

1. Completer les liens obligatoires dans `README.md` : GitHub public, front deployee, API deployee, outil de gestion de projet.
2. Verifier la strategie de deploiement : Netlify pour `dist`, puis solution separee pour l'API Express si elle doit rester active.
3. Creer le cahier des charges et decrire le contexte Vite & Gourmand, les acteurs, les besoins et les contraintes.
4. Rediger les user stories ou cas d'utilisation : visiteur, utilisateur, employe, administrateur.
5. Produire les maquettes/wireframes des pages principales.
6. Rediger la conception technique : architecture React, API Express, role des services, securite et variables d'environnement.
7. Completer le dossier base de donnees : MCD, MLD, MPD, dictionnaire de donnees, justification SQL/NoSQL.
8. Documenter l'API a partir de `API_DOCUMENTATION.md` et ajouter des exemples de requetes/reponses si necessaire.
9. Rediger le guide d'installation locale : Node, npm, MySQL, MongoDB, `.env`, scripts SQL, lancement front/back.
10. Rediger le guide de deploiement : Netlify pour le front, hebergement API, variables d'environnement.
11. Creer le manuel utilisateur et le manuel administrateur/employe.
12. Construire le cahier de recette : parcours critiques, resultats attendus, captures, statut OK/KO.
13. Ajouter les preuves de qualite : `npm run lint`, `npm run build`, tests manuels, captures d'ecran.
14. Rediger la partie securite/RGPD : JWT, bcrypt, roles, CORS, donnees personnelles, secrets.
15. Preparer le support de soutenance avec architecture, demo, choix techniques, difficultes et ameliorations possibles.
