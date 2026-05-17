# Diagramme de classes - Vite & Gourmand

## Objectif

Ce diagramme represente les principales classes ou entites manipulees par l'application.

## Diagramme Mermaid

```mermaid
classDiagram
  class User {
    +int id
    +string name
    +string email
    +string phone
    +string role
    +boolean active
    +login()
    +logout()
  }

  class Role {
    +int id
    +string name
  }

  class Menu {
    +int id
    +string slug
    +string title
    +string description
    +string theme
    +string diet
    +number price
    +int minPeople
    +int stock
  }

  class Dish {
    +int id
    +string name
    +string description
  }

  class Allergen {
    +int id
    +string name
  }

  class Order {
    +int id
    +string reference
    +string customerName
    +string customerEmail
    +date eventDate
    +time eventTime
    +int people
    +number total
    +string status
    +create()
    +updateStatus()
    +cancel()
  }

  class Review {
    +int id
    +string author
    +int rating
    +string eventType
    +string content
    +string status
    +validate()
    +reject()
  }

  class ContactMessage {
    +int id
    +string title
    +string email
    +string message
    +boolean handled
  }

  class Statistic {
    +string label
    +number value
    +string period
  }

  class Revenue {
    +string month
    +number amount
  }

  class Analytics {
    +string metric
    +number value
    +object details
  }

  Role "1" --> "*" User : attribue
  User "1" --> "*" Order : passe
  User "1" --> "*" Review : redige
  Menu "1" --> "*" Order : concerne
  Menu "*" --> "*" Dish : contient
  Dish "*" --> "*" Allergen : signale
  Order "1" --> "*" Review : peut_recevoir
```

## Notes

- Les classes `Statistic`, `Revenue` et `Analytics` correspondent aux modeles NoSQL.
- Les autres classes representent principalement les entites SQL et les objets manipules par l'application.
