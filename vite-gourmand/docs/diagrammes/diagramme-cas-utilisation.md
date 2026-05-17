# Diagramme de cas d'utilisation - Vite & Gourmand

## Objectif

Ce diagramme presente les interactions principales entre les acteurs et l'application.

## Diagramme Mermaid

```mermaid
flowchart LR
  Visiteur["Visiteur"]
  Utilisateur["Utilisateur connecté"]
  Employe["Employé"]
  Admin["Administrateur"]

  UC1["Consulter la page d'accueil"]
  UC2["Consulter les menus"]
  UC3["Voir le détail d'un menu"]
  UC4["Créer un compte"]
  UC5["Se connecter"]
  UC6["Envoyer un message de contact"]
  UC7["Passer une commande"]
  UC8["Consulter son tableau de bord"]
  UC9["Suivre ses commandes"]
  UC10["Gérer les commandes"]
  UC11["Modérer les avis"]
  UC12["Créer un employé"]
  UC13["Gérer les utilisateurs"]
  UC14["Consulter les analytics"]

  Visiteur --> UC1
  Visiteur --> UC2
  Visiteur --> UC3
  Visiteur --> UC4
  Visiteur --> UC5
  Visiteur --> UC6

  Utilisateur --> UC7
  Utilisateur --> UC8
  Utilisateur --> UC9

  Employe --> UC10
  Employe --> UC11

  Admin --> UC10
  Admin --> UC11
  Admin --> UC12
  Admin --> UC13
  Admin --> UC14
```

## Acteurs

| Acteur | Description |
| --- | --- |
| Visiteur | Personne non connectee qui consulte l'application. |
| Utilisateur connecte | Client disposant d'un compte. |
| Employe | Personnel interne pouvant gerer commandes et avis. |
| Administrateur | Responsable de la gestion des utilisateurs et des analytics. |

## Notes

- L'administrateur herite de droits plus larges que l'employe.
- Les fonctionnalites sensibles necessitent une authentification.
