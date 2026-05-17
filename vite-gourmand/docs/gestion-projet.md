# Gestion de projet - Vite & Gourmand

## 1. Objectif du document

Ce document presente l'organisation du projet Vite & Gourmand dans le cadre du dossier ECF Studi.

Il decrit le contexte, les acteurs, les besoins, les fonctionnalites principales et la methode de suivi du projet.

## 2. Contexte

Vite & Gourmand est une entreprise fictive de traiteur. Elle souhaite disposer d'une application web permettant de presenter ses menus, recevoir des commandes et administrer les informations essentielles.

Le projet repond a un besoin de digitalisation d'un service traiteur.

## 3. Objectifs du projet

Les objectifs sont :

- creer une interface moderne et responsive ;
- permettre la consultation des menus ;
- permettre l'inscription et la connexion ;
- permettre la creation de commandes ;
- permettre le suivi des commandes ;
- proposer un espace employe ;
- proposer un espace administrateur ;
- documenter le projet pour un rendu ECF ;
- preparer un deploiement front-end sur Netlify.

## 4. Acteurs

| Acteur | Role |
| --- | --- |
| Visiteur | Consulte les menus, s'inscrit, contacte l'entreprise. |
| Utilisateur | Passe une commande et consulte son tableau de bord. |
| Employe | Suit les commandes et participe a la gestion operationnelle. |
| Administrateur | Gere les utilisateurs, employes, avis et analytics. |

## 5. Besoins fonctionnels

### Visiteur

- Consulter la page d'accueil.
- Voir les menus.
- Voir le detail d'un menu.
- Creer un compte.
- Envoyer un message de contact.

### Utilisateur

- Se connecter.
- Passer une commande.
- Suivre ses commandes.
- Consulter son espace personnel.

### Employe

- Consulter les commandes.
- Modifier le statut d'une commande.
- Participer a la moderation des avis.

### Administrateur

- Gerer les utilisateurs.
- Creer des employes.
- Activer ou desactiver des comptes.
- Consulter les statistiques.

## 6. Besoins non fonctionnels

- Interface responsive.
- Navigation claire.
- Donnees protegees.
- Authentification securisee.
- Separation front-end / back-end.
- Utilisation d'une base SQL et d'une base NoSQL.
- Documentation claire pour l'installation et le deploiement.

## 7. Organisation des taches

Outil de gestion de projet Notion :

```text
https://www.notion.so/362b64d300a6801f9677c455fa92c918?v=8434226078014d1e9793c54f3c3a146a&source=copy_link
```

Exemple de colonnes conseillees :

- A faire ;
- En cours ;
- A tester ;
- Termine.

## 8. Backlog simplifie

| Priorite | Tache | Statut |
| --- | --- | --- |
| Haute | Creer la structure React/Vite | Fait |
| Haute | Creer les pages principales | Fait |
| Haute | Creer l'API Express | Fait |
| Haute | Creer la base MySQL | Fait |
| Moyenne | Ajouter MongoDB pour analytics | Fait |
| Moyenne | Rediger la documentation API | Fait |
| Moyenne | Rediger la documentation de deploiement | Fait |
| Haute | Deployer le front sur Netlify | A faire |
| Haute | Completer les PDF ECF | En cours |
| Moyenne | Ajouter les captures d'ecran | A faire |

## 9. Workflow Git

Workflow recommande pour le rendu :

1. Branche `main` pour la version stable.
2. Branche `develop` pour l'integration.
3. Branches `feature/*` pour les fonctionnalites.
4. Fusion dans `develop` apres validation.
5. Fusion dans `main` pour livraison finale.

## 10. Captures a integrer

[Capture à insérer : page d’accueil]

[Capture à insérer : connexion]

[Capture à insérer : tableau de bord]

[Capture à insérer : version mobile]

## 11. Risques identifies

| Risque | Impact | Solution |
| --- | --- | --- |
| API non hebergee en production | Le front Netlify ne peut pas utiliser les donnees dynamiques | Prevoir un hebergement Node.js separe. |
| Variables d'environnement incompletes | Erreurs de connexion API ou BDD | Verifier `.env` local et variables de production. |
| Documents ECF incomplets | Rendu non conforme | Utiliser la checklist finale. |
| Absence de captures | Dossier moins lisible | Ajouter captures desktop et mobile. |

## 12. Conclusion

Le projet Vite & Gourmand est structure autour d'une application front-end, d'une API, d'une base SQL et d'une base NoSQL. La gestion de projet doit maintenant etre completee avec les preuves de suivi, les captures et les exports finaux.
