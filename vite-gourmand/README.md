# Vite & Gourmand

## Presentation du projet

Vite & Gourmand est une application web de traiteur fictif developpee dans le cadre d'un rendu ECF Studi pour le titre Developpeur Web et Web Mobile.

L'application permet a un visiteur de consulter des menus, de creer un compte, de passer une commande et de laisser un avis. Elle propose aussi des espaces dedies aux utilisateurs connectes, aux employes et a l'administrateur.

Le projet est compose :

- d'un front-end React genere avec Vite ;
- d'une API back-end Node.js / Express ;
- d'une base SQL MySQL pour les donnees metier ;
- d'une base NoSQL MongoDB pour les donnees analytics ;
- d'un build front-end dans le dossier `dist`, prevu pour un deploiement Netlify.

## Contexte ECF Studi

Ce projet sert de support a un dossier ECF Studi. Il doit montrer la capacite a concevoir, developper, documenter et deployer une application web complete.

Les objectifs principaux sont :

- presenter une application fonctionnelle avec plusieurs roles ;
- documenter l'installation locale et le deploiement ;
- fournir une base SQL exploitable ;
- utiliser une base NoSQL pour un besoin complementaire ;
- securiser les acces sensibles ;
- organiser le projet avec un workflow Git clair ;
- preparer les livrables attendus pour la soutenance.

## Liens du projet

| Element | Lien |
| --- | --- |
| Depot GitHub public | <https://github.com/catcodecat/vite-gourmand> |
| Application front-end Netlify | <https://startling-bonbon-2b9ff8.netlify.app> |
| API back-end deployee | Non deployee separement pour le moment |
| Outil de gestion de projet Notion | <https://www.notion.so/362b64d300a6801f9677c455fa92c918?v=8434226078014d1e9793c54f3c3a146a&source=copy_link> |

## Stack technique detectee

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

- Node.js.
- Express.js.
- CORS.
- dotenv.
- JSON Web Token avec `jsonwebtoken`.
- Hash des mots de passe avec `bcrypt`.
- MySQL avec `mysql2/promise`.
- MongoDB avec `mongoose`.

### Qualite et outillage

- ESLint.
- npm.
- Build Vite.
- Deploiement front-end prevu sur Netlify.

## Structure du projet

```text
vite-gourmand/
+-- dist/                         Build front-end pour Netlify
+-- docs/                         Documentation ECF et projet
+-- server/                       API Express
|   +-- config/                   Connexions MySQL et MongoDB
|   +-- controllers/              Logique des routes API
|   +-- database/                 Scripts SQL
|   +-- middleware/               Authentification, roles, erreurs
|   +-- models/                   Modeles Mongoose
|   +-- routes/                   Routes Express
|   +-- services/                 Services metier
|   +-- utils/                    Fonctions utilitaires
+-- src/                          Application React
|   +-- components/               Composants UI reutilisables
|   +-- context/                  Store Zustand
|   +-- data/                     Donnees locales de secours
|   +-- hooks/                    Hooks React
|   +-- layouts/                  Layout principal
|   +-- pages/                    Pages de l'application
|   +-- services/                 Appels API
|   +-- utils/                    Formatage et helpers
+-- API_DOCUMENTATION.md          Documentation des routes API
+-- README.md                     Documentation principale
+-- package.json                  Scripts et dependances
```

## Prerequis

- Node.js 20 ou version LTS recente.
- npm.
- Git.
- MySQL Server.
- MongoDB Community Server.

## Installation locale

1. Cloner le depot public :

```bash
git clone https://github.com/catcodecat/vite-gourmand.git
cd vite-gourmand
```

2. Installer les dependances :

```bash
npm install
```

3. Creer le fichier `.env` a partir du modele :

```bash
cp .env.example .env
```

Sous PowerShell :

```powershell
Copy-Item .env.example .env
```

4. Adapter les variables d'environnement selon la configuration locale.

5. Creer la base SQL MySQL :

```bash
npm run db:schema
npm run db:seed
```

Commandes equivalentes :

```bash
mysql -u root -p < server/database/schema.sql
mysql -u root -p vite_gourmand < server/database/seed.sql
```

6. Verifier que MongoDB est lance avant de demarrer le back-end.

## Variables d'environnement

Exemple de configuration locale :

```env
PORT=5000
CLIENT_URL=http://localhost:5173
VITE_API_URL=http://localhost:5000/api

JWT_SECRET=change_me_for_local_dev
JWT_EXPIRES_IN=2h

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=vite_gourmand

MONGO_URI=mongodb://127.0.0.1:27017/vite_gourmand

ADMIN_EMAIL=admin@vitegourmand.fr
ADMIN_PASSWORD=Admin123!
```

Important : le fichier `.env` ne doit pas etre versionne. Le fichier `.env.example` sert uniquement de modele sans secret reel de production.

## Lancement du front-end

```bash
npm run dev
```

URL locale par defaut :

```text
http://localhost:5173
```

## Lancement du back-end

Le back-end se trouve dans :

```text
server
```

Commande de lancement en mode developpement :

```bash
npm run server:dev
```

URL locale par defaut :

```text
http://localhost:5000/api
```

Healthcheck :

```text
http://localhost:5000/api/health
```

## Scripts npm

```bash
npm run dev        # Lance le front-end Vite
npm run server     # Lance l'API Express
npm run server:dev # Lance l'API Express en mode watch
npm run db:schema  # Cree la base MySQL et les tables
npm run db:seed    # Insere les donnees de demonstration
npm run build      # Genere le build front-end
npm run preview    # Sert le build front-end localement
npm run lint       # Analyse le code avec ESLint
```

## Comptes de test

Ces comptes sont prevus dans `server/database/seed.sql`. Le mot de passe est identique pour les trois comptes.

| Role | Email | Mot de passe |
| --- | --- | --- |
| Administrateur | `admin@vitegourmand.fr` | `Admin123!` |
| Employe | `lucas@demo.fr` | `Admin123!` |
| Utilisateur | `claire@demo.fr` | `Admin123!` |

Aucun administrateur ne peut etre cree depuis le front-end.

## Fonctionnalites principales

- Consultation des menus.
- Detail d'un menu.
- Filtres de recherche.
- Inscription et connexion.
- Commande en ligne.
- Tableau de bord utilisateur.
- Tableau de bord employe.
- Tableau de bord administrateur.
- Gestion des commandes.
- Moderation des avis.
- Gestion des utilisateurs et employes.
- Formulaire de contact.
- Pages mentions legales et CGV.
- Analytics admin avec donnees MongoDB.

## Bases de donnees

### Base SQL

La base SQL est une base MySQL nommee `vite_gourmand`.

Scripts disponibles :

- `server/database/schema.sql` : creation de la base et des tables.
- `server/database/seed.sql` : insertion des donnees de demonstration.

Tables principales detectees :

- `roles`
- `users`
- `menus`
- `dishes`
- `allergens`
- `orders`
- `order_status_history`
- `reviews`
- `contact_messages`
- `opening_hours`
- `password_reset_tokens`

### Base NoSQL

La base NoSQL utilise MongoDB avec Mongoose.

Collections detectees :

- `statistics`
- `revenue`
- `analytics`

Ces collections sont utilisees pour les donnees analytics de l'espace administrateur.

## Securite

Les mecanismes de securite detectes sont :

- hash des mots de passe avec `bcrypt` ;
- authentification par JWT ;
- routes protegees par middleware d'authentification ;
- verification des roles pour les routes employe et administrateur ;
- variables sensibles stockees dans `.env` ;
- modele `.env.example` sans secret de production ;
- configuration CORS avec `CLIENT_URL` ;
- validation de donnees cote back-end via des utilitaires.

Points a finaliser pour le dossier ECF :

- documenter les donnees personnelles manipulees ;
- completer la partie RGPD ;
- verifier les secrets de production ;
- confirmer l'URL front autorisee par CORS en production.

## Informations de deploiement

Le front-end est deploye sur Netlify.

Parametres front-end :

- plateforme : Netlify ;
- lien du site : <https://startling-bonbon-2b9ff8.netlify.app> ;
- dossier de publication : `dist` ;
- dossier de build : `dist` ;
- commande de build probable : `npm run build`.

Netlify sert le front-end statique. L'API Express situee dans `server/` doit etre hebergee separement si elle doit etre utilisee en production.

La variable `VITE_API_URL` doit pointer vers l'URL publique de l'API de production.

La documentation detaillee se trouve dans `docs/deploiement.md`.

## Workflow Git recommande

Pour le rendu ECF, le workflow attendu est :

1. `main` contient une version stable.
2. `develop` contient l'integration des fonctionnalites validees.
3. Les fonctionnalites sont developpees dans des branches `feature/nom-fonctionnalite`.
4. Les branches `feature/*` sont fusionnees dans `develop`.
5. `develop` est fusionnee dans `main` avant livraison finale.

## Documentation complementaire

- `API_DOCUMENTATION.md` : routes de l'API.
- `docs/00-analyse-projet.md` : analyse initiale du projet.
- `docs/deploiement.md` : guide de deploiement.
- `docs/checklist-finale-ecf.md` : checklist finale des livrables ECF.

## Auteur

Projet realise par :

```text
Larisa Faessel
```

Formation :

```text
Developpeur No Code
```
