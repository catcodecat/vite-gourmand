# Base relationnelle SQL - Vite & Gourmand

## Objectif

Cette documentation presente la base relationnelle du projet Vite & Gourmand pour le dossier ECF.

La base SQL stocke les donnees metier principales de l'application :

- utilisateurs et roles ;
- menus traiteur ;
- plats et allergenes ;
- commandes ;
- historique de statut des commandes ;
- avis clients ;
- messages de contact ;
- horaires d'ouverture ;
- jetons de reinitialisation de mot de passe.

## Technologie

- Type : base relationnelle.
- SGBD : MySQL.
- Nom de la base : `vite_gourmand`.
- Encodage : `utf8mb4`.

## Fichiers livrables

| Fichier | Role |
| --- | --- |
| `database/sql/schema.sql` | Cree la base SQL et toutes les tables relationnelles. |
| `database/sql/seed.sql` | Insere un jeu de donnees coherent pour la demonstration. |

## Installation

Depuis la racine du projet :

```bash
mysql -u root -p < database/sql/schema.sql
mysql -u root -p vite_gourmand < database/sql/seed.sql
```

Les scripts applicatifs existants utilisent aussi les fichiers situes dans `server/database/`. Les fichiers presents dans `database/sql/` constituent les livrables ECF dedies aux bases de donnees.

## Tables principales

### `roles`

Stocke les roles applicatifs.

- `utilisateur`
- `employe`
- `administrateur`

### `users`

Stocke les comptes utilisateurs.

Champs principaux :

- nom ;
- email unique ;
- telephone ;
- hash du mot de passe ;
- statut actif/inactif ;
- role associe.

### `menus`

Stocke les offres de menus traiteur.

Champs principaux :

- slug ;
- titre ;
- description ;
- theme ;
- regime alimentaire ;
- prix ;
- nombre minimum de personnes ;
- stock.

### `menu_images`

Stocke les images associees aux menus.

### `dishes`

Stocke les plats disponibles.

### `allergens`

Stocke les allergenes.

### `dish_allergens`

Table de liaison entre les plats et les allergenes.

### `menu_dishes`

Table de liaison entre les menus et les plats.

### `orders`

Stocke les commandes clients.

Champs principaux :

- reference unique ;
- utilisateur associe si connecte ;
- menu commande ;
- informations client ;
- adresse de livraison ;
- date et heure de l'evenement ;
- nombre de personnes ;
- montant total ;
- statut de commande.

### `order_status_history`

Stocke l'historique des changements de statut d'une commande.

### `reviews`

Stocke les avis clients et leur statut de moderation.

### `contact_messages`

Stocke les messages envoyes via le formulaire de contact.

### `opening_hours`

Stocke les horaires d'ouverture.

### `password_reset_tokens`

Stocke les jetons de reinitialisation de mot de passe.

## Relations principales

- Un utilisateur possede un role.
- Un menu peut avoir plusieurs images.
- Un menu contient plusieurs plats.
- Un plat peut contenir plusieurs allergenes.
- Une commande concerne un menu.
- Une commande peut etre liee a un utilisateur.
- Une commande possede un historique de statuts.
- Un avis peut etre lie a un utilisateur et a une commande.

## Donnees de demonstration

Le fichier `seed.sql` cree notamment :

- 3 roles ;
- 3 comptes de test ;
- 7 allergenes ;
- 6 menus ;
- des plats associes aux menus ;
- des associations allergenes/plats ;
- une commande exemple ;
- 3 avis clients ;
- les horaires d'ouverture.

Comptes de test :

| Role | Email | Mot de passe attendu |
| --- | --- | --- |
| Administrateur | `admin@vitegourmand.fr` | `Admin123!` |
| Employe | `lucas@demo.fr` | `Admin123!` |
| Utilisateur | `claire@demo.fr` | `Admin123!` |

Le mot de passe est stocke sous forme de hash bcrypt dans la base.
