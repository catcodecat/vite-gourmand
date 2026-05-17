# Diagramme de sequence - Passage d'une commande

## Objectif

Ce diagramme de sequence represente le parcours de creation d'une commande par un utilisateur connecte.

## Diagramme Mermaid

```mermaid
sequenceDiagram
  actor U as Utilisateur
  participant F as Front-end React
  participant A as API Express
  participant M as MySQL
  participant E as Service email simulé

  U->>F: Sélectionne un menu
  U->>F: Remplit le formulaire de commande
  F->>A: POST /api/orders avec token JWT
  A->>A: Vérifie le token
  A->>A: Valide les données
  A->>M: Vérifie le menu et le stock
  M-->>A: Retourne les informations du menu
  A->>M: Insère la commande
  A->>M: Ajoute l'historique de statut
  A->>E: Génère un email de confirmation simulé
  E-->>A: Email simulé créé
  A-->>F: Retourne la commande créée
  F-->>U: Affiche la confirmation
```

## Etapes principales

1. L'utilisateur choisit un menu.
2. Il remplit les informations de commande.
3. Le front-end envoie la demande a l'API.
4. L'API verifie l'authentification.
5. L'API controle les donnees et le menu.
6. La commande est inseree en base SQL.
7. Un historique de statut est cree.
8. Un email simule est genere.
9. Le front-end affiche la confirmation.

## Notes

- Le token JWT protege la route de creation de commande.
- La commande est stockee dans MySQL.
- L'email est simule par fichier local dans le fonctionnement actuel.
