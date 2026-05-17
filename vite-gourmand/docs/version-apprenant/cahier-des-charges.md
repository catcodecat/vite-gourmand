# Cahier des charges - Vite & Gourmand

## 1. Présentation du projet

Le projet s'appelle **Vite & Gourmand**.

J'ai créé cette application pour présenter les menus d'un traiteur fictif et faciliter les commandes en ligne.

Le dépôt GitHub du projet est :

<https://github.com/catcodecat/vite-gourmand>

## 2. Contexte

Ce projet est réalisé dans le cadre de mon ECF Studi.

L'idée est de montrer une application web complète avec :

- une partie visible par les clients ;
- un espace pour les utilisateurs connectés ;
- un espace pour les employés ;
- un espace pour l'administrateur ;
- une base de données relationnelle ;
- une base de données non relationnelle ;
- une documentation claire.

## 3. Objectif général

L'objectif principal est de permettre à un client de consulter des menus de traiteur et de passer une commande.

L'application doit aussi permettre à l'administrateur de gérer les utilisateurs, les commandes et les statistiques.

## 4. Public cible

Le projet s'adresse à :

- des visiteurs qui veulent découvrir les menus ;
- des clients qui veulent commander ;
- des employés qui suivent les commandes ;
- un administrateur qui gère l'application ;
- un jury Studi qui vérifie le projet.

## 5. Acteurs

### Visiteur

Le visiteur peut consulter les pages publiques.

Il peut :

- voir la page d'accueil ;
- consulter les menus ;
- voir le détail d'un menu ;
- créer un compte ;
- envoyer un message de contact.

### Utilisateur client

Le client peut se connecter et passer une commande.

Il peut :

- se connecter ;
- commander un menu ;
- consulter son tableau de bord ;
- suivre ses commandes.

### Employé

L'employé peut suivre les commandes.

Il peut :

- voir les commandes ;
- changer un statut ;
- aider à gérer les avis.

### Administrateur

L'administrateur peut gérer l'application.

Il peut :

- voir les utilisateurs ;
- créer un employé ;
- activer ou désactiver un compte ;
- consulter les statistiques.

## 6. Besoins fonctionnels

L'application doit permettre :

- de consulter les menus ;
- de filtrer ou choisir un menu ;
- de voir le détail d'un menu ;
- de s'inscrire ;
- de se connecter ;
- de passer une commande ;
- de consulter un tableau de bord ;
- de gérer les commandes ;
- de gérer les avis ;
- de gérer les utilisateurs.

## 7. Besoins non fonctionnels

L'application doit être :

- claire ;
- utilisable sur ordinateur ;
- utilisable sur mobile ;
- organisée ;
- sécurisée sur les pages importantes ;
- documentée pour l'examen.

## 8. Contraintes techniques

Le projet utilise :

- React pour le front-end ;
- Vite pour le build ;
- Node.js et Express pour le back-end ;
- MySQL pour la base relationnelle ;
- MongoDB pour la base non relationnelle ;
- Netlify pour le déploiement du front-end.

Le dossier de publication Netlify est `dist`.

Le back-end local est dans le dossier `server`.

## 9. Sécurité

J'ai prévu plusieurs points de sécurité :

- les mots de passe sont hashés ;
- certaines routes sont protégées ;
- les rôles sont séparés ;
- les variables sensibles sont dans un fichier `.env` ;
- les formulaires doivent être vérifiés.

## 10. Bases de données

### Base relationnelle

La base relationnelle est en MySQL.

Elle sert à stocker :

- les utilisateurs ;
- les rôles ;
- les menus ;
- les commandes ;
- les avis ;
- les messages de contact.

### Base non relationnelle

La base non relationnelle est en MongoDB.

Elle sert surtout pour les statistiques et les données d'analyse.

## 11. Déploiement

Le front-end est prévu sur Netlify.

Lien Netlify :

<https://startling-bonbon-2b9ff8.netlify.app>

Le back-end Express n'est pas hébergé automatiquement par Netlify. Il doit être hébergé séparément si je veux utiliser l'API en production.

## 12. Limites du projet

Les limites actuelles sont :

- les captures d'écran disponibles sont dans `docs/captures/` ;
- les PDF doivent être exportés ;
- les tests doivent être remplis avec les vrais résultats.

## 13. Améliorations possibles

Je pourrais améliorer le projet en ajoutant :

- plus de tests ;
- une meilleure documentation de l'API ;
- un paiement en ligne ;
- plus de statistiques ;
- une partie RGPD plus complète.

## 14. Conclusion

Ce cahier des charges présente les besoins principaux du projet Vite & Gourmand. Il sert de base pour expliquer le projet pendant l'ECF.
