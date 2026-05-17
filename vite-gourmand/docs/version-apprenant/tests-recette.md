# Tests et recette - Vite & Gourmand

## 1. Présentation

Ce document liste les tests à faire pour vérifier le projet.

Les tests sont surtout manuels.

## 2. Objectif des tests

Je dois vérifier que l'application fonctionne correctement avant de rendre mon dossier ECF.

## 3. Tests principaux

| ID | Fonctionnalité | Scénario | Résultat attendu | Statut | Commentaire |
| --- | --- | --- | --- | --- | --- |
| T01 | Accueil | Ouvrir la page d'accueil | La page s'affiche | À vérifier | Ajouter une capture. |
| T02 | Catalogue | Ouvrir la page menus | Les menus s'affichent | À vérifier | Vérifier les cartes. |
| T03 | Détail menu | Cliquer sur un menu | Le détail s'affiche | À vérifier | Vérifier les infos. |
| T04 | Inscription | Créer un compte | Le compte est créé | À vérifier | Tester aussi les erreurs. |
| T05 | Connexion | Se connecter | L'utilisateur est connecté | À vérifier | Compte de test. |
| T06 | Déconnexion | Se déconnecter | La session est fermée | À vérifier | Vérifier le retour public. |
| T07 | Commande | Passer une commande | La commande est enregistrée | À vérifier | API nécessaire. |
| T08 | Dashboard utilisateur | Ouvrir le dashboard | Les infos s'affichent | À vérifier | Connecté utilisateur. |
| T09 | Dashboard employé | Ouvrir l'espace employé | Les commandes s'affichent | À vérifier | Connecté employé. |
| T10 | Dashboard admin | Ouvrir l'espace admin | Les données admin s'affichent | À vérifier | Connecté admin. |
| T11 | Formulaires | Envoyer un formulaire vide | Un message d'erreur apparaît | À vérifier | Champs obligatoires. |
| T12 | Mobile | Tester en petit écran | La page reste lisible | À vérifier | Pas de débordement. |
| T13 | Navigation | Cliquer sur les liens | Les bonnes pages s'ouvrent | À vérifier | Header et footer. |
| T14 | Sécurité | Aller sur admin sans connexion | L'accès est bloqué | À vérifier | Route protégée. |
| T15 | Netlify | Ouvrir le lien Netlify | Le site s'affiche | À vérifier | Lien : https://startling-bonbon-2b9ff8.netlify.app |
| T16 | API Express | Tester `/api/health` | L'API répond | À vérifier | Si API utilisée. |

## 4. Tests responsive

Je dois tester :

- accueil mobile ;
- catalogue mobile ;
- dashboard mobile ;
- connexion mobile.

## 5. Tests base de données

Je dois vérifier :

- le fichier `schema.sql` ;
- le fichier `seed.sql` ;
- les collections MongoDB ;
- les données de test.

## 6. Captures d'écran disponibles

Les captures d'écran associées sont disponibles dans le dossier `docs/captures/`.

Captures liées aux tests :

- `accueil-netlify-desktop.png`
- `menus-netlify-desktop.png`
- `connection-desktop.png`
- `dashboard-admin-desktop.png`
- `accueil-mobile.png`
- `galeries-mobile.png`
- `netlify-deploy.png`

## 7. Conclusion

Les statuts doivent être remplacés par OK ou KO après les vrais tests.
