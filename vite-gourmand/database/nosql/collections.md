# Base non relationnelle MongoDB - Collections

## Objectif

Le projet Vite & Gourmand utilise une base non relationnelle MongoDB pour stocker des donnees analytics. Ces donnees completent la base SQL, qui reste responsable des donnees metier principales.

La base NoSQL est adaptee ici car les indicateurs analytics peuvent evoluer sans imposer une structure relationnelle stricte.

## Technologie

- Type : base non relationnelle.
- SGBD : MongoDB.
- ODM : Mongoose.
- Base par defaut : `vite_gourmand`.

## Collections detectees

Les modeles Mongoose du back-end declarent trois collections :

- `statistics`
- `revenue`
- `analytics`

## Collection `statistics`

### Role

Stocker des statistiques globales ou periodiques affichees dans l'espace administrateur.

### Structure

```json
{
  "label": "commandes",
  "value": 12,
  "period": "global",
  "createdAt": "2026-05-16T00:00:00.000Z",
  "updatedAt": "2026-05-16T00:00:00.000Z"
}
```

### Champs

| Champ | Type | Description |
| --- | --- | --- |
| `label` | string | Nom de l'indicateur. |
| `value` | number | Valeur numerique de l'indicateur. |
| `period` | string | Periode concernee, par exemple `global` ou `2026-05`. |
| `createdAt` | date | Date de creation generee par Mongoose. |
| `updatedAt` | date | Date de modification generee par Mongoose. |

## Collection `revenue`

### Role

Stocker le chiffre d'affaires par mois.

### Structure

```json
{
  "month": "2026-05",
  "amount": 1814.4,
  "createdAt": "2026-05-16T00:00:00.000Z",
  "updatedAt": "2026-05-16T00:00:00.000Z"
}
```

### Champs

| Champ | Type | Description |
| --- | --- | --- |
| `month` | string | Mois concerne au format `YYYY-MM`. |
| `amount` | number | Montant du chiffre d'affaires. |
| `createdAt` | date | Date de creation generee par Mongoose. |
| `updatedAt` | date | Date de modification generee par Mongoose. |

## Collection `analytics`

### Role

Stocker des indicateurs analytics plus flexibles.

### Structure

```json
{
  "metric": "convives",
  "value": 42,
  "details": {
    "source": "orders",
    "description": "Nombre total de convives hors commandes annulees"
  },
  "createdAt": "2026-05-16T00:00:00.000Z",
  "updatedAt": "2026-05-16T00:00:00.000Z"
}
```

### Champs

| Champ | Type | Description |
| --- | --- | --- |
| `metric` | string | Nom technique de l'indicateur. |
| `value` | number | Valeur numerique. |
| `details` | object | Informations complementaires libres. |
| `createdAt` | date | Date de creation generee par Mongoose. |
| `updatedAt` | date | Date de modification generee par Mongoose. |

## Justification ECF

Le projet respecte la contrainte ECF en utilisant :

- une base relationnelle MySQL pour les donnees structurees et fortement liees ;
- une base non relationnelle MongoDB pour les indicateurs analytics, plus souples et evolutifs.

Cette separation permet de montrer deux usages differents et coherents des bases de donnees.
