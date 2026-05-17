# MCD - Modele Conceptuel de Donnees

## Objectif

Ce document presente le modele conceptuel de donnees du projet Vite & Gourmand.

Le MCD represente les principales entites metier et leurs relations.

## Diagramme Mermaid

```mermaid
erDiagram
  ROLE ||--o{ USER : "possede"
  USER ||--o{ ORDER : "passe"
  USER ||--o{ REVIEW : "redige"
  USER ||--o{ ORDER_STATUS_HISTORY : "modifie"
  MENU ||--o{ ORDER : "est commande"
  MENU ||--o{ MENU_IMAGE : "possede"
  MENU ||--o{ MENU_DISH : "compose"
  DISH ||--o{ MENU_DISH : "appartient"
  DISH ||--o{ DISH_ALLERGEN : "contient"
  ALLERGEN ||--o{ DISH_ALLERGEN : "est associe"
  ORDER ||--o{ ORDER_STATUS_HISTORY : "historise"
  ORDER ||--o{ REVIEW : "peut recevoir"

  ROLE {
    int id
    string name
  }

  USER {
    int id
    int role_id
    string name
    string email
    string phone
    string password_hash
    boolean active
  }

  MENU {
    int id
    string slug
    string title
    string theme
    string diet
    decimal price
    int min_people
    int stock
  }

  MENU_IMAGE {
    int id
    int menu_id
    string url
    string alt_text
    int position
  }

  DISH {
    int id
    string name
    string description
  }

  ALLERGEN {
    int id
    string name
  }

  MENU_DISH {
    int menu_id
    int dish_id
  }

  DISH_ALLERGEN {
    int dish_id
    int allergen_id
  }

  ORDER {
    int id
    string reference
    int user_id
    int menu_id
    string customer_name
    string customer_email
    date event_date
    time event_time
    int people
    decimal total
    string status
  }

  ORDER_STATUS_HISTORY {
    int id
    int order_id
    string status
    int changed_by
    datetime changed_at
  }

  REVIEW {
    int id
    int user_id
    int order_id
    string author
    int rating
    string event_type
    string status
  }
```

## Notes

- Les utilisateurs sont rattaches a un role.
- Les commandes sont rattachees a un menu et peuvent etre rattachees a un utilisateur.
- Les menus peuvent contenir plusieurs plats.
- Les plats peuvent contenir plusieurs allergenes.
- Les avis peuvent etre lies a une commande et a un utilisateur.
- L'historique des statuts permet de suivre l'evolution d'une commande.
