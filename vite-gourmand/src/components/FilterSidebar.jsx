import React from 'react'
import { FiSliders } from 'react-icons/fi'
import { uniqueValues } from '../utils/format'

export function FilterSidebar({ menus, filters, onChange, onReset }) {
  const themes = uniqueValues(menus, 'theme')
  const diets = uniqueValues(menus, 'diet')

  return (
    <aside className="rounded-lg bg-white p-5 shadow-soft dark:bg-charcoal" aria-label="Filtres des menus">
      <div className="flex items-center gap-2">
        <FiSliders className="text-wine dark:text-gold" aria-hidden="true" />
        <h2 className="font-display text-2xl text-ink dark:text-ivory">Filtres</h2>
      </div>
      <div className="mt-6 space-y-5">
        <label className="block text-sm font-semibold">
          Prix maximum: {filters.maxPrice} €
          <input
            className="mt-3 w-full accent-wine"
            type="range"
            min="20"
            max="70"
            value={filters.maxPrice}
            onChange={(event) => onChange({ maxPrice: Number(event.target.value) })}
          />
        </label>
        <label className="block text-sm font-semibold">
          Fourchette
          <select className="mt-2 w-full rounded-md border border-wine/20 bg-white px-3 py-3 dark:bg-ink" value={filters.range} onChange={(event) => onChange({ range: event.target.value })}>
            <option value="">Toutes</option>
            <option value="eco">Moins de 35 €</option>
            <option value="premium">35 € à 45 €</option>
            <option value="luxe">Plus de 45 €</option>
          </select>
        </label>
        <label className="block text-sm font-semibold">
          Thème
          <select className="mt-2 w-full rounded-md border border-wine/20 bg-white px-3 py-3 dark:bg-ink" value={filters.theme} onChange={(event) => onChange({ theme: event.target.value })}>
            <option value="">Tous</option>
            {themes.map((theme) => (
              <option key={theme}>{theme}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold">
          Régime
          <select className="mt-2 w-full rounded-md border border-wine/20 bg-white px-3 py-3 dark:bg-ink" value={filters.diet} onChange={(event) => onChange({ diet: event.target.value })}>
            <option value="">Tous</option>
            {diets.map((diet) => (
              <option key={diet}>{diet}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold">
          Nombre de personnes
          <input
            className="mt-2 w-full rounded-md border border-wine/20 bg-white px-3 py-3 dark:bg-ink"
            type="number"
            min="1"
            placeholder="Ex: 25"
            value={filters.people}
            onChange={(event) => onChange({ people: event.target.value })}
          />
        </label>
        <button className="text-sm font-bold text-wine underline underline-offset-4 dark:text-gold" type="button" onClick={onReset}>
          Réinitialiser les filtres
        </button>
      </div>
    </aside>
  )
}
