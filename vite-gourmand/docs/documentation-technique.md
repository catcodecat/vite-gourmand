# Documentation technique - Vite & Gourmand

## 1. Objectif

Cette documentation technique presente l'architecture du projet Vite & Gourmand pour le dossier ECF Studi.

Elle decrit les technologies, les dossiers principaux, les bases de donnees, l'API et les points de securite.

## 2. Architecture generale

Le projet est organise en deux parties principales :

- front-end React/Vite ;
- back-end Node.js/Express.

Le front-end consomme une API REST. Le back-end communique avec une base MySQL pour les donnees metier et avec MongoDB pour les donnees analytics.

```text
Utilisateur
   |
   v
Front-end React/Vite
   |
   v
API Express
   |
   +-- MySQL : donnees metier
   +-- MongoDB : analytics
```

## 3. Stack technique

### Front-end

- React 19.
- Vite 7.
- React Router DOM.
- Tailwind CSS.
- Zustand.
- Framer Motion.
- React Icons.
- Recharts.

### Back-end

- Node.js.
- Express.js.
- CORS.
- dotenv.
- JSON Web Token.
- bcrypt.
- mysql2.
- mongoose.

### Bases de donnees

- MySQL pour la base relationnelle.
- MongoDB pour la base non relationnelle.

## 4. Structure des dossiers

```text
src/                 Front-end React
server/              Back-end Express
server/database/     Scripts SQL applicatifs
database/sql/        Livrables SQL ECF
database/nosql/      Livrables NoSQL ECF
docs/                Documentation ECF
dist/                Build front-end pour Netlify
```

## 5. Front-end

Le front-end est situe dans le dossier `src`.

Elements principaux :

- `main.jsx` : point d'entree React et configuration des routes.
- `pages/` : pages principales de l'application.
- `components/` : composants reutilisables.
- `context/useAppStore.js` : store global avec Zustand.
- `services/api.js` : appels HTTP vers l'API Express.
- `data/` : donnees locales de secours.

Routes front-end detectees :

- `/`
- `/menus`
- `/menus/:id`
- `/connexion`
- `/inscription`
- `/commande`
- `/dashboard`
- `/employe`
- `/admin`
- `/contact`
- `/mentions-legales`
- `/cgv`

## 6. Back-end

Le back-end est situe dans le dossier `server`.

Elements principaux :

- `app.js` : creation du serveur Express.
- `routes/` : declaration des routes.
- `controllers/` : logique metier.
- `middleware/` : authentification, roles et erreurs.
- `config/` : connexions MySQL et MongoDB.
- `models/` : modeles Mongoose.
- `services/` : services transverses.

Routes API principales :

- `/api/health`
- `/api/auth`
- `/api/menus`
- `/api/orders`
- `/api/reviews`
- `/api/contact`
- `/api/admin`

## 7. Base SQL

La base SQL est une base MySQL nommee `vite_gourmand`.

Livrables dedies :

- `database/sql/schema.sql`
- `database/sql/seed.sql`
- `database/sql/README-database-sql.md`

Tables principales :

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

## 8. Base NoSQL

La base NoSQL utilise MongoDB.

Livrables dedies :

- `database/nosql/collections.md`
- `database/nosql/seed-mongodb.json`
- `database/nosql/README-database-nosql.md`

Collections detectees :

- `statistics`
- `revenue`
- `analytics`

## 9. Authentification et securite

Mecanismes detectes :

- mots de passe hashes avec `bcrypt` ;
- authentification JWT ;
- middleware d'authentification ;
- verification des roles ;
- variables d'environnement ;
- CORS configure avec `CLIENT_URL`.

Variables sensibles :

- `JWT_SECRET`
- `MYSQL_PASSWORD`
- `MONGO_URI`
- `ADMIN_PASSWORD`

Ces variables doivent rester hors du depot Git et etre configurees sur l'environnement de production.

## 10. Deploiement

Le front-end est prevu pour Netlify.

Configuration :

- commande de build : `npm run build` ;
- dossier de publication : `dist` ;
- plateforme : Netlify.

Limite importante :

Netlify sert le front statique. L'API Express doit etre hebergee separement si elle doit etre utilisee en production.

Variable front importante :

```env
VITE_API_URL=https://url-api-production/api
```

## 11. Captures a integrer

[Capture à insérer : page d’accueil]

[Capture à insérer : connexion]

[Capture à insérer : tableau de bord]

[Capture à insérer : version mobile]

## 12. Ameliorations possibles

- Ajouter des tests automatises.
- Ajouter une documentation Swagger ou OpenAPI.
- Heberger l'API en production.
- Ajouter une gestion RGPD plus detaillee.
- Ajouter des logs applicatifs.
- Ajouter des roles plus fins si necessaire.

## 13. Conclusion

L'architecture de Vite & Gourmand repose sur une separation claire entre front-end, API, base relationnelle et base non relationnelle. Cette structure repond aux attentes d'un projet ECF Studi complet et documente.
