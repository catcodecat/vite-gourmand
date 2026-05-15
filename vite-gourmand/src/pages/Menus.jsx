import React from 'react'
import { useMemo, useState } from 'react'
import { FilterSidebar } from '../components/FilterSidebar'
import { MenuCard } from '../components/MenuCard'
import { SkeletonCard } from '../components/Loader'
import { useAppStore } from '../context/useAppStore'
import { usePageTitle } from '../hooks/usePageTitle'

const initialFilters = { maxPrice: 70, range: '', theme: '', diet: '', people: '' }

export function Menus() {
  usePageTitle('Tous les menus')
  const menus = useAppStore((state) => state.menus)
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState(initialFilters)

  const updateFilters = (next) => {
    setLoading(true)
    setFilters((current) => ({ ...current, ...next }))
    window.setTimeout(() => setLoading(false), 220)
  }

  const filteredMenus = useMemo(() => {
    return menus.filter((menu) => {
      const inRange =
        !filters.range ||
        (filters.range === 'eco' && menu.price < 35) ||
        (filters.range === 'premium' && menu.price >= 35 && menu.price <= 45) ||
        (filters.range === 'luxe' && menu.price > 45)

      return (
        menu.price <= filters.maxPrice &&
        inRange &&
        (!filters.theme || menu.theme === filters.theme) &&
        (!filters.diet || menu.diet === filters.diet) &&
        (!filters.people || menu.minPeople <= Number(filters.people))
      )
    })
  }, [filters, menus])

  return (
    <section className="section">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-wine dark:text-gold">Catalogue</p>
        <h1 className="section-title mt-3">Tous les menus</h1>
        <p className="mt-4 leading-7 text-ink/70 dark:text-ivory/75">Filtrez les offres selon votre budget, votre événement, les régimes et le nombre de convives.</p>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
        <FilterSidebar menus={menus} filters={filters} onChange={updateFilters} onReset={() => updateFilters(initialFilters)} />
        <div>
          <p className="mb-4 text-sm font-semibold text-ink/65 dark:text-ivory/70">{filteredMenus.length} menu(s) disponible(s)</p>
          {loading ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)}
            </div>
          ) : filteredMenus.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredMenus.map((menu) => <MenuCard key={menu.id} menu={menu} />)}
            </div>
          ) : (
            <div className="card text-center">
              <h2 className="font-display text-2xl text-wine dark:text-gold">Aucun menu trouvé</h2>
              <p className="mt-2 text-ink/70 dark:text-ivory/75">Essayez d'élargir vos critères pour afficher d'autres propositions.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
