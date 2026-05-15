# Documentation API Vite & Gourmand

Base URL locale: `http://localhost:5000/api`

Les routes protegees attendent l'en-tete:

```http
Authorization: Bearer <token_jwt>
```

## Authentification

| Methode | Route | Acces | Description |
| --- | --- | --- | --- |
| POST | `/auth/register` | Public | Inscription utilisateur |
| POST | `/auth/login` | Public | Connexion JWT |
| GET | `/auth/me` | Connecte | Profil connecte |
| POST | `/auth/forgot-password` | Public | Reset password simule par fichier email |

Exemple login:

```json
{
  "email": "admin@vitegourmand.fr",
  "password": "Admin123!"
}
```

## Menus

| Methode | Route | Acces | Description |
| --- | --- | --- | --- |
| GET | `/menus` | Public | Liste avec filtres dynamiques |
| GET | `/menus/:id` | Public | Detail menu |
| POST | `/menus` | Employe/Admin | Creation menu |
| PUT | `/menus/:id` | Employe/Admin | Modification menu |
| DELETE | `/menus/:id` | Employe/Admin | Suppression menu |

Filtres disponibles sur `GET /menus`: `maxPrice`, `minPrice`, `theme`, `diet`, `people`.

## Commandes

| Methode | Route | Acces | Description |
| --- | --- | --- | --- |
| GET | `/orders` | Connecte | Liste commandes, filtree par utilisateur si role utilisateur |
| POST | `/orders` | Connecte | Creation commande |
| PUT | `/orders/:reference` | Connecte | Modification commande |
| PATCH | `/orders/:reference/status` | Employe/Admin | Changement statut |
| PATCH | `/orders/:reference/cancel` | Connecte | Annulation commande |

Statuts: `en attente`, `accepte`, `en preparation`, `en cours de livraison`, `livre`, `en attente du retour de materiel`, `terminee`, `annulee`.

## Avis

| Methode | Route | Acces | Description |
| --- | --- | --- | --- |
| GET | `/reviews` | Public/Connecte | Public: avis valides. Employe/Admin: tous les avis |
| POST | `/reviews` | Connecte | Creation avis en attente |
| PATCH | `/reviews/:id/status` | Employe/Admin | Validation ou refus |
| POST | `/reviews/request-email` | Employe/Admin | Email simule de demande avis |

## Admin

| Methode | Route | Acces | Description |
| --- | --- | --- | --- |
| GET | `/admin/users` | Admin | Liste des comptes |
| POST | `/admin/employees` | Admin | Creation employe |
| PATCH | `/admin/users/:id/toggle-status` | Admin | Activation/desactivation |
| GET | `/admin/analytics` | Admin | Statistiques MySQL + MongoDB |

## Contact

| Methode | Route | Acces | Description |
| --- | --- | --- | --- |
| POST | `/contact` | Public | Enregistrement message contact |

## Emails simules

Les emails sont stockes dans `server/logs/emails/`:

- bienvenue
- confirmation commande
- reset password
- creation employe
- retour materiel
- demande avis
- contact
