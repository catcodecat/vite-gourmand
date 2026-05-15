# Vite & Gourmand

Application React + API Node/Express pour un projet ECF Studi TP Developpeur Web et Web Mobile.

Le front React consomme une API Express connectee a MySQL pour les donnees metier et a MongoDB pour les donnees analytics.

## Liens examen

- GitHub public: `A COMPLETER - URL du depot public`
- Application frontend deployee: `A COMPLETER - URL du front`
- API/backend deploye: `A COMPLETER - URL de l'API`
- Outil de gestion de projet: `A COMPLETER - URL Trello, Jira, GitHub Projects ou autre`

## Stack technique

- Frontend: React, Vite, React Router, Tailwind CSS, Zustand, Recharts
- Backend: Node.js, Express.js, JWT, bcrypt, dotenv
- Base SQL: MySQL avec `mysql2`
- Base NoSQL: MongoDB avec `mongoose`

## Prerequis

- Node.js 20 ou version LTS recente
- npm
- MySQL Server
- MongoDB Community Server
- Git

## Installation locale

1. Cloner le depot public:

```bash
git clone URL_DU_DEPOT_PUBLIC
cd vite-gourmand
```

2. Installer les dependances:

```bash
npm install
```

3. Creer le fichier d'environnement:

```bash
cp .env.example .env
```

Sous PowerShell:

```powershell
Copy-Item .env.example .env
```

4. Adapter les variables dans `.env` si necessaire.

Exemple local:

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

## Creation de la base de donnees

Les fichiers SQL explicites sont dans `server/database/`:

- `schema.sql`: creation de la base MySQL et de toutes les tables.
- `seed.sql`: integration des donnees de demonstration.

Importer la structure puis les donnees:

```bash
npm run db:schema
npm run db:seed
```

Commandes equivalentes:

```bash
mysql -u root -p < server/database/schema.sql
mysql -u root -p vite_gourmand < server/database/seed.sql
```

MongoDB doit etre lance localement avant le backend. L'API cree les collections `statistics`, `revenue` et `analytics` lors des appels analytics.

## Lancement local

Terminal 1, lancer l'API:

```bash
npm run server:dev
```

Terminal 2, lancer le frontend:

```bash
npm run dev
```

URLs locales:

- Frontend: `http://localhost:5173`
- API: `http://localhost:5000/api`
- Healthcheck API: `http://localhost:5000/api/health`

## Comptes de demonstration

Ces comptes sont inseres par `server/database/seed.sql`. Le mot de passe est identique pour les trois comptes.

| Role | Email | Mot de passe |
| --- | --- | --- |
| Administrateur | `admin@vitegourmand.fr` | `Admin123!` |
| Employe | `lucas@demo.fr` | `Admin123!` |
| Utilisateur | `claire@demo.fr` | `Admin123!` |

Aucun administrateur ne peut etre cree depuis le frontend.

## Scripts npm

```bash
npm run dev        # Lance le frontend Vite
npm run server     # Lance l'API Express
npm run server:dev # Lance l'API Express en mode watch
npm run db:schema  # Cree la base MySQL et les tables
npm run db:seed    # Insere les donnees de demonstration
npm run build      # Genere le build frontend
npm run preview    # Sert le build frontend en local
npm run lint       # Analyse le code avec ESLint
```

## Workflow Git attendu

Le projet doit respecter le workflow suivant pour l'examen:

1. `main` contient uniquement une version stable et testee.
2. `develop` contient l'integration des fonctionnalites validees.
3. Chaque fonctionnalite part de `develop` dans une branche `feature/nom-fonctionnalite`.
4. Une fois testee, chaque branche `feature/*` est mergee dans `develop`.
5. Une fois `develop` testee globalement, `develop` est mergee dans `main`.
6. Le depot GitHub final doit etre public.

Commandes type:

```bash
git switch main
git pull
git switch -c develop
git push -u origin develop

git switch develop
git switch -c feature/authentification
# developpement + tests
git add .
git commit -m "feat: add authentication"
git switch develop
git merge feature/authentification

npm run lint
npm run build

git switch main
git merge develop
git push origin main develop
```

## Documentation API

Voir `API_DOCUMENTATION.md`.

## Emails simules

Les emails ne sont pas envoyes. Chaque action genere un fichier texte local dans:

```text
server/logs/emails/
```

Ce dossier est ignore par Git.

## Securite et configuration

- Les mots de passe sont hashes avec bcrypt.
- L'authentification utilise JWT.
- Les routes sensibles utilisent des middlewares de roles.
- Les variables sensibles doivent rester dans `.env`.
- `.env` est ignore par Git.
- `.env.example` documente les variables attendues sans secret reel de production.
- Le CORS est configure avec `CLIENT_URL`.

## Checklist avant soutenance

- Verifier que le depot GitHub est public.
- Renseigner les quatre liens de la section "Liens examen".
- Verifier que `.env` n'est pas versionne.
- Importer `schema.sql`, puis `seed.sql`.
- Lancer MySQL et MongoDB.
- Lancer `npm run server:dev`.
- Lancer `npm run dev`.
- Tester `http://localhost:5000/api/health`.
- Executer `npm run lint`.
- Executer `npm run build`.
