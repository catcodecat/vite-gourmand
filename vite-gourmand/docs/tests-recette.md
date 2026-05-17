# Tests et recette - Vite & Gourmand

## 1. Introduction

Ce document presente la strategie de tests et le tableau de recette du projet Vite & Gourmand dans le cadre de l'ECF Studi.

L'objectif est de verifier que les principales fonctionnalites de l'application sont utilisables avant la livraison finale : navigation, authentification, commandes, tableaux de bord, bases de donnees, securite simple et deploiement.

## 2. Strategie de test

La recette repose sur des tests manuels realises sur l'application locale et, si disponible, sur l'application deployee.

Environnements a tester :

- front-end local : `http://localhost:5173` ;
- API locale : `http://localhost:5000/api` ;
- application Netlify : <https://startling-bonbon-2b9ff8.netlify.app> ;
- base SQL MySQL : `vite_gourmand` ;
- base NoSQL MongoDB : `vite_gourmand`.

Comptes de test prevus :

| Role | Email | Mot de passe |
| --- | --- | --- |
| Administrateur | `admin@vitegourmand.fr` | `Admin123!` |
| Employe | `lucas@demo.fr` | `Admin123!` |
| Utilisateur | `claire@demo.fr` | `Admin123!` |

## 3. Tests fonctionnels

Les tests fonctionnels portent sur les principaux parcours :

- consultation de l'accueil ;
- consultation du catalogue ;
- affichage du detail d'un menu ;
- inscription ;
- connexion ;
- deconnexion ;
- creation d'une commande ou reservation ;
- consultation des tableaux de bord ;
- moderation ou gestion selon les roles.

## 4. Tests responsive

Les tests responsive permettent de verifier que l'application reste utilisable sur mobile :

- page d'accueil mobile ;
- catalogue mobile ;
- detail menu mobile ;
- formulaires mobiles ;
- dashboard mobile ;
- absence de debordement horizontal.

## 5. Tests formulaires

Les formulaires a tester sont :

- inscription ;
- connexion ;
- commande ;
- contact ;
- creation d'employe ;
- modification de statut si disponible.

Points controles :

- champs obligatoires ;
- format email ;
- mot de passe ;
- messages d'erreur ;
- confirmation apres envoi.

## 6. Tests de securite simples

Les controles de securite simples sont :

- refus d'une connexion incorrecte ;
- acces impossible aux routes protegees sans token ;
- acces admin impossible avec un compte utilisateur ;
- mot de passe stocke sous forme de hash ;
- fichier `.env` absent du depot public.

## 7. Tests de navigation

La navigation doit permettre de passer entre :

- accueil ;
- catalogue ;
- detail menu ;
- connexion ;
- inscription ;
- commande ;
- contact ;
- mentions legales ;
- CGV ;
- dashboards selon le role.

## 8. Tests de connexion

Les tests de connexion verifient :

- connexion utilisateur ;
- connexion employe ;
- connexion administrateur ;
- gestion d'un mauvais mot de passe ;
- deconnexion ;
- conservation ou suppression correcte de la session.

## 9. Tests base de donnees

### Base SQL

Controles :

- presence du fichier `database/sql/schema.sql` ;
- presence du fichier `database/sql/seed.sql` ;
- creation des tables ;
- insertion des donnees de demonstration ;
- presence des comptes de test ;
- creation d'une commande.

### Base NoSQL

Controles :

- presence de `database/nosql/collections.md` ;
- presence de `database/nosql/seed-mongodb.json` ;
- collections `statistics`, `revenue`, `analytics` documentees ;
- donnees analytics consultables si l'API est lancee.

## 10. Tests de deploiement

Controles Netlify :

- build avec `npm run build` ;
- dossier publie : `dist` ;
- ouverture du lien Netlify ;
- navigation sur les routes principales ;
- configuration de `VITE_API_URL` si une API de production existe.

Point important :

Netlify sert le front statique. L'API Express doit etre hebergee separement si les donnees dynamiques sont attendues en production.

## 11. Tableau de recette

| ID du test | Fonctionnalite | Scenario | Resultat attendu | Statut | Commentaire |
| --- | --- | --- | --- | --- | --- |
| T01 | Page d'accueil | Ouvrir `/` | La page d'accueil s'affiche correctement | A verifier | Ajouter capture desktop. |
| T02 | Catalogue / menus | Ouvrir `/menus` | La liste des menus est visible | A verifier | Verifier cartes, prix et images. |
| T03 | Detail menu | Cliquer sur un menu | Le detail du menu s'affiche | A verifier | Verifier informations du menu. |
| T04 | Inscription | Creer un compte avec des donnees valides | Le compte est cree ou un message clair s'affiche | A verifier | Tester aussi les erreurs. |
| T05 | Connexion utilisateur | Se connecter avec `claire@demo.fr` | Acces au compte utilisateur | A verifier | Verifier token/session. |
| T06 | Deconnexion | Cliquer sur l'action de deconnexion | L'utilisateur est deconnecte | A verifier | Verifier retour navigation publique. |
| T07 | Commande / reservation | Remplir une commande valide | La commande est enregistree | A verifier | Necessite API et BDD. |
| T08 | Dashboard utilisateur | Ouvrir `/dashboard` connecte | Les informations utilisateur sont visibles | A verifier | Ajouter capture. |
| T09 | Dashboard employe | Se connecter employe puis ouvrir espace employe | Les commandes et actions employe sont visibles | A verifier | Compte `lucas@demo.fr`. |
| T10 | Dashboard administrateur | Se connecter admin puis ouvrir `/admin` | Les utilisateurs et analytics sont visibles | A verifier | Compte `admin@vitegourmand.fr`. |
| T11 | Validation formulaires | Envoyer formulaires incomplets | Des messages d'erreur s'affichent | A verifier | Inscription, connexion, contact. |
| T12 | Affichage mobile | Tester accueil, catalogue et dashboard en mobile | Les pages sont lisibles sans debordement | A verifier | Ajouter captures mobile. |
| T13 | Navigation | Cliquer sur les liens principaux | Les pages attendues s'ouvrent | A verifier | Tester header et footer. |
| T14 | Securite basique | Acceder a une page protegee sans connexion | L'acces est refuse ou redirige | A verifier | Tester dashboard/admin. |
| T15 | Base SQL | Importer schema et seed | Tables et donnees presentes | A verifier | Verifier comptes et menus. |
| T16 | Base NoSQL | Consulter collections analytics | Collections documentees ou presentes | A verifier | MongoDB requis. |
| T17 | Deploiement Netlify | Ouvrir le lien Netlify | Le front s'affiche | A verifier | Lien : https://startling-bonbon-2b9ff8.netlify.app |
| T18 | API Express | Tester `/api/health` | Retour `status: ok` | A verifier | Si API utilisee en production. |

## 12. Captures a integrer

[Capture à insérer : page d’accueil]

[Capture à insérer : connexion]

[Capture à insérer : tableau de bord]

[Capture à insérer : version mobile]

## 13. Conclusion

La recette finale devra etre completee apres execution manuelle des tests. Les statuts devront etre remplaces par `OK` ou `KO` selon le resultat observe, avec un commentaire en cas d'anomalie.
