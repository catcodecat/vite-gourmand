# Documentation technique - Vite & Gourmand

## Table des matieres

1. Architecture
2. Front-end
3. Back-end
4. Bases de donnees
5. Securite
6. Captures a inserer
7. Conclusion

## 1. Architecture

Le projet se compose d'un front-end React/Vite, d'une API Express, d'une base MySQL et d'une base MongoDB.

```text
React/Vite -> API Express -> MySQL
                        -> MongoDB
```

## 2. Front-end

Le front-end est situe dans `src/`. Il utilise React, Vite, React Router, Tailwind CSS et Zustand.

## 3. Back-end

Le back-end est situe dans `server/`. Il utilise Node.js, Express, JWT, bcrypt, MySQL et MongoDB.

## 4. Bases de donnees

Base relationnelle :

- `database/sql/schema.sql`
- `database/sql/seed.sql`

Base non relationnelle :

- `database/nosql/collections.md`
- `database/nosql/seed-mongodb.json`

## 5. Securite

Securite detectee :

- hash bcrypt ;
- JWT ;
- roles ;
- routes protegees ;
- variables `.env` ;
- CORS.

## 6. Captures a inserer

[Capture à insérer : architecture technique]

[Capture à insérer : fichiers SQL]

[Capture à insérer : collections MongoDB]

## 7. Conclusion

L'architecture separe clairement l'interface, l'API et les donnees, ce qui correspond aux attendus du dossier ECF.
