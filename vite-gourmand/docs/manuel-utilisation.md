# Manuel d'utilisation - Vite & Gourmand

## 1. Presentation

Vite & Gourmand est une application web de traiteur permettant de consulter des menus, creer un compte, passer une commande et suivre les informations liees aux commandes.

Ce manuel presente les principaux parcours utilisateur pour un rendu ECF Studi.

## 2. Public concerne

L'application s'adresse a quatre types d'utilisateurs :

- visiteur non connecte ;
- client connecte ;
- employe ;
- administrateur.

## 3. Acces a l'application

### En local

Front-end :

```text
http://localhost:5173
```

Back-end :

```text
http://localhost:5000/api
```

### En production

<https://startling-bonbon-2b9ff8.netlify.app>

## 4. Page d'accueil

La page d'accueil presente l'identite de Vite & Gourmand, les menus mis en avant et les principaux arguments du service.

[Capture à insérer : page d’accueil]

Actions possibles :

- consulter les menus ;
- acceder a la connexion ;
- acceder a l'inscription ;
- aller vers le formulaire de contact.

## 5. Consultation des menus

L'utilisateur peut consulter la liste des menus disponibles.

Les informations visibles peuvent inclure :

- nom du menu ;
- description ;
- prix ;
- regime alimentaire ;
- theme ;
- image de presentation.

L'utilisateur peut ouvrir le detail d'un menu pour obtenir plus d'informations.

## 6. Connexion

La page de connexion permet a un utilisateur existant de se connecter avec son adresse email et son mot de passe.

[Capture à insérer : connexion]

Comptes de test disponibles :

| Role | Email | Mot de passe |
| --- | --- | --- |
| Administrateur | `admin@vitegourmand.fr` | `Admin123!` |
| Employe | `lucas@demo.fr` | `Admin123!` |
| Utilisateur | `claire@demo.fr` | `Admin123!` |

## 7. Inscription

Un visiteur peut creer un compte utilisateur.

Le formulaire demande notamment :

- nom ;
- adresse email ;
- telephone ;
- mot de passe.

Le mot de passe doit respecter des regles de securite visibles dans l'interface.

## 8. Passage d'une commande

Un utilisateur connecte peut passer une commande en choisissant un menu et en indiquant les informations necessaires :

- menu choisi ;
- nombre de personnes ;
- date de l'evenement ;
- heure de l'evenement ;
- adresse de livraison ;
- informations de contact.

Apres validation, la commande est enregistree dans la base de donnees.

## 9. Tableau de bord utilisateur

Le tableau de bord utilisateur permet de consulter les informations personnelles et les commandes associees au compte.

[Capture à insérer : tableau de bord]

Fonctionnalites attendues :

- consultation des commandes ;
- suivi des statuts ;
- acces aux informations de compte.

## 10. Espace employe

L'espace employe permet de suivre les commandes et de participer a leur gestion.

Fonctionnalites detectees :

- visualisation des commandes ;
- mise a jour des statuts ;
- validation ou moderation des avis selon les droits.

## 11. Espace administrateur

L'espace administrateur donne acces aux fonctions de pilotage.

Fonctionnalites detectees :

- consultation des utilisateurs ;
- creation d'un compte employe ;
- activation ou desactivation d'un compte ;
- consultation des analytics ;
- suivi des commandes et avis.

## 12. Formulaire de contact

Le formulaire de contact permet a un visiteur d'envoyer un message.

Les informations demandees sont :

- titre ;
- email ;
- message.

## 13. Version mobile

L'application est concue pour etre consultable sur desktop et mobile.

[Capture à insérer : version mobile]

Elements a verifier :

- lisibilite des textes ;
- navigation ;
- formulaires ;
- boutons ;
- tableaux de bord.

## 14. Pages legales

L'application contient des pages dediees :

- mentions legales ;
- conditions generales de vente.

## 15. Conclusion

Vite & Gourmand propose les principaux parcours attendus pour une application de commande traiteur : consultation, authentification, commande, suivi et administration.
