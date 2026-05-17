# Wireframes - Vite & Gourmand

## 1. Objectif

Ce document presente les wireframes du projet Vite & Gourmand pour le dossier ECF Studi.

Les wireframes decrivent l'organisation des ecrans avant la finalisation graphique. Ils servent a valider la structure, les zones de contenu, la navigation et le comportement responsive.

## 2. Wireframes desktop prevus

Trois wireframes desktop sont prepares :

1. Page d'accueil.
2. Page catalogue / menus.
3. Tableau de bord utilisateur ou administrateur.

## 3. Wireframes mobile prevus

Trois wireframes mobile sont prepares :

1. Page d'accueil mobile.
2. Page catalogue / menus mobile.
3. Tableau de bord mobile.

## 4. Wireframe desktop - Page d'accueil

### Objectif de l'ecran

Presenter Vite & Gourmand, rassurer l'utilisateur et l'inciter a consulter les menus ou a passer commande.

### Structure

```text
+--------------------------------------------------------------------------------+
| Header : logo | Accueil | Menus | Contact | Connexion                          |
+--------------------------------------------------------------------------------+
| Hero : titre principal, texte de presentation, boutons d'action                |
| [Voir les menus] [Commander]                                                   |
+--------------------------------------------------------------------------------+
| Section menus mis en avant                                                     |
| +----------------------+ +----------------------+ +----------------------+     |
| | Image menu           | | Image menu           | | Image menu           |     |
| | Titre + prix         | | Titre + prix         | | Titre + prix         |     |
| | Bouton detail        | | Bouton detail        | | Bouton detail        |     |
| +----------------------+ +----------------------+ +----------------------+     |
+--------------------------------------------------------------------------------+
| Section arguments / avis clients                                                |
+--------------------------------------------------------------------------------+
| Footer : liens utiles, mentions legales, contact                               |
+--------------------------------------------------------------------------------+
```

### Zones principales

- barre de navigation ;
- zone hero ;
- menus mis en avant ;
- avis ou arguments de confiance ;
- footer.

### Navigation

La navigation donne acces au catalogue, a la connexion, au contact et aux pages legales.

### Elements visibles

- logo Vite & Gourmand ;
- titre ;
- texte de presentation ;
- boutons principaux ;
- cartes de menus ;
- avis ou arguments ;
- liens de bas de page.

### Comportement responsive

Sur mobile, la navigation devient plus compacte, les boutons se placent sur une colonne et les cartes de menus passent en affichage vertical.

## 5. Wireframe desktop - Page catalogue / menus

### Objectif de l'ecran

Permettre a l'utilisateur de consulter les menus disponibles, comparer les offres et acceder au detail d'un menu.

### Structure

```text
+--------------------------------------------------------------------------------+
| Header : logo | Accueil | Menus | Contact | Connexion                          |
+--------------------------------------------------------------------------------+
| Titre : Catalogue des menus                                                     |
| Texte court d'introduction                                                      |
+----------------------+---------------------------------------------------------+
| Filtres              | Grille de menus                                         |
| - Theme              | +----------------+ +----------------+ +--------------+ |
| - Regime             | | Carte menu     | | Carte menu     | | Carte menu   | |
| - Prix               | | Image          | | Image          | | Image        | |
| - Nombre personnes   | | Titre / prix   | | Titre / prix   | | Titre / prix | |
|                      | | Bouton detail  | | Bouton detail  | | Bouton       | |
+----------------------+---------------------------------------------------------+
| Footer                                                                         |
+--------------------------------------------------------------------------------+
```

### Zones principales

- header ;
- titre de page ;
- zone de filtres ;
- grille de cartes menus ;
- footer.

### Navigation

L'utilisateur peut revenir a l'accueil, ouvrir le detail d'un menu ou acceder a la commande depuis une carte ou un detail.

### Elements visibles

- filtres ;
- cartes de menus ;
- images ;
- prix ;
- regimes alimentaires ;
- themes ;
- boutons de detail.

### Comportement responsive

Sur mobile, les filtres peuvent passer au-dessus des cartes ou dans une zone compacte. La grille devient une liste verticale.

## 6. Wireframe desktop - Tableau de bord utilisateur ou administrateur

### Objectif de l'ecran

Afficher les informations importantes du compte et permettre le suivi ou la gestion des commandes selon le role connecte.

### Structure

```text
+--------------------------------------------------------------------------------+
| Header : logo | Navigation compte | Deconnexion                                |
+----------------------+---------------------------------------------------------+
| Sidebar              | Contenu principal                                      |
| - Profil             | +---------------------------------------------------+ |
| - Commandes          | | Resume : commandes, statut, chiffres utiles      | |
| - Avis               | +---------------------------------------------------+ |
| - Administration     |                                                         |
|                      | Tableau ou liste des commandes                         |
|                      | +----------+-------------+------------+------------+   |
|                      | | Reference| Menu        | Statut     | Action     |   |
|                      | +----------+-------------+------------+------------+   |
+----------------------+---------------------------------------------------------+
```

### Zones principales

- header connecte ;
- sidebar ou menu secondaire ;
- resume des informations ;
- liste ou tableau des commandes ;
- actions selon le role.

### Navigation

La navigation interne permet de passer entre profil, commandes, avis et administration si l'utilisateur possede les droits.

### Elements visibles

- nom de l'utilisateur ;
- role ;
- commandes ;
- statuts ;
- boutons d'action ;
- statistiques pour l'administrateur.

### Comportement responsive

Sur mobile, la sidebar peut devenir un menu compact. Les tableaux sont remplaces par des cartes pour eviter le debordement horizontal.

## 7. Wireframe mobile - Page d'accueil mobile

### Objectif de l'ecran

Presenter rapidement le service et donner acces aux actions principales sur petit ecran.

### Structure

```text
+------------------------------+
| Logo                  Menu    |
+------------------------------+
| Titre principal              |
| Texte court                  |
| [Voir les menus]             |
| [Commander]                  |
+------------------------------+
| Menu mis en avant            |
| Image                        |
| Titre / prix                 |
| [Voir le detail]             |
+------------------------------+
| Avis ou argument             |
+------------------------------+
| Footer                       |
+------------------------------+
```

### Zones principales

- header mobile ;
- hero ;
- carte menu ;
- arguments ;
- footer.

### Navigation

La navigation est regroupee dans un menu mobile ou une navigation simplifiee.

### Elements visibles

- logo ;
- bouton menu ;
- titre ;
- boutons d'action ;
- cartes empilees.

### Comportement responsive

Les contenus sont affiches sur une seule colonne. Les boutons sont suffisamment grands pour une utilisation tactile.

## 8. Wireframe mobile - Page catalogue / menus mobile

### Objectif de l'ecran

Permettre la consultation des menus sur smartphone sans perte de lisibilite.

### Structure

```text
+------------------------------+
| Logo                  Menu    |
+------------------------------+
| Catalogue des menus          |
| [Filtres]                    |
+------------------------------+
| Carte menu                   |
| Image                        |
| Titre                        |
| Prix / regime                |
| [Voir le detail]             |
+------------------------------+
| Carte menu                   |
+------------------------------+
| Footer                       |
+------------------------------+
```

### Zones principales

- header mobile ;
- titre catalogue ;
- zone filtres compacte ;
- liste verticale de menus ;
- footer.

### Navigation

L'utilisateur peut ouvrir les filtres, consulter un detail de menu ou revenir a l'accueil.

### Elements visibles

- bouton filtres ;
- cartes menus ;
- images ;
- prix ;
- boutons de detail.

### Comportement responsive

La grille desktop devient une colonne. Les filtres doivent etre accessibles sans occuper trop d'espace.

## 9. Wireframe mobile - Tableau de bord mobile

### Objectif de l'ecran

Afficher les commandes et actions principales du compte dans une interface mobile lisible.

### Structure

```text
+------------------------------+
| Logo                  Menu    |
+------------------------------+
| Tableau de bord              |
| Nom utilisateur / role       |
+------------------------------+
| Resume                       |
| Commandes : 3                |
| Avis : 1                     |
+------------------------------+
| Carte commande               |
| Reference                    |
| Menu                         |
| Statut                       |
| [Action]                     |
+------------------------------+
| Carte commande               |
+------------------------------+
```

### Zones principales

- header mobile ;
- resume du compte ;
- cartes commandes ;
- actions principales.

### Navigation

Les sections du dashboard peuvent etre accessibles via un menu, des onglets ou des boutons empiles.

### Elements visibles

- nom ou role ;
- resume ;
- commandes ;
- statuts ;
- boutons d'action.

### Comportement responsive

Les tableaux sont remplaces par des cartes. Les actions sont visibles et faciles a toucher.

## 10. Conclusion

Ces six wireframes couvrent les ecrans attendus pour le dossier ECF : trois vues desktop et trois vues mobile. Ils peuvent servir de base pour produire des maquettes finales dans Figma, Canva, Penpot ou directement a partir de captures de l'application.
