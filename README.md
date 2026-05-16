# Projet ECF - Vite & Gourmand

Le projet frontend/backend principal se trouve dans le dossier `vite-gourmand/`.

## Liens examen

- GitHub public: https://github.com/catcodecat/vite-gourmand
- Application frontend deployee: https://startling-bonbon-2b9ff8.netlify.app
- API/backend deploye: https://vite-gourmand-api-production.up.railway.app/api
- Outil de gestion de projet: https://trello.com/invite/b/p6q2p8r3/ATAIT3XFF49v3Zo/projet-ecf-vite-gourmand

## Installation locale

```bash
git clone https://github.com/catcodecat/vite-gourmand
cd vite-gourmand/vite-gourmand
npm install
cp .env.example .env
```

Sous PowerShell:

```powershell
Copy-Item .env.example .env
```

Adapter ensuite `.env` si necessaire.

## Base de donnees

Les fichiers SQL explicites sont fournis dans `vite-gourmand/server/database/`:

- `schema.sql`: creation de la base MySQL et de toutes les tables.
- `seed.sql`: integration des donnees de demonstration.

Depuis `vite-gourmand/`, importer la base:

```bash
npm run db:schema
npm run db:seed
```

Commandes equivalentes:

```bash
mysql -u root -p < server/database/schema.sql
mysql -u root -p vite_gourmand < server/database/seed.sql
```

MongoDB doit etre lance localement avant le backend.

## Lancement frontend/backend

Depuis `vite-gourmand/`.

Terminal 1:

```bash
npm run server:dev
```

Terminal 2:

```bash
npm run dev
```

URLs locales:

- Frontend: `http://localhost:5173`
- API: `http://localhost:5000/api`
- Healthcheck API: `http://localhost:5000/api/health`

## Workflow Git attendu

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

cd vite-gourmand
npm run lint
npm run build
cd ..

git switch main
git merge develop
git push origin main develop
```

## Verification avant soutenance

- Depot GitHub public.
- Liens examen renseignes.
- `.env` absent du depot.
- `.env.example` present.
- `.gitignore` present.
- `schema.sql` et `seed.sql` presents.
- `npm run lint` passe.
- `npm run build` passe.

La documentation complete de l'application est aussi disponible dans `vite-gourmand/README.md`.
