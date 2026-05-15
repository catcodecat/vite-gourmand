import React from 'react'
import { FiArrowRight, FiUsers } from 'react-icons/fi'
import { formatPrice } from '../utils/format'
import { Button } from './Button'

export function MenuCard({ menu }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-premium dark:bg-charcoal">
      <img className="h-56 w-full object-cover" src={menu.images[0]} alt={`Présentation du menu ${menu.title}`} loading="lazy" />
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-wine dark:text-gold">
          <span>{menu.theme}</span>
          <span aria-hidden="true">•</span>
          <span>{menu.diet}</span>
        </div>
        <div>
          <h2 className="font-display text-2xl text-ink dark:text-ivory">{menu.title}</h2>
          <p className="mt-2 text-sm leading-6 text-ink/70 dark:text-ivory/75">{menu.description}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="font-display text-2xl font-bold text-wine dark:text-gold">{formatPrice(menu.price)} / pers.</p>
          <p className="flex items-center gap-1 text-sm font-semibold text-ink/70 dark:text-ivory/75">
            <FiUsers aria-hidden="true" /> min. {menu.minPeople}
          </p>
        </div>
        <Button to={`/menus/${menu.id}`} variant="secondary" className="w-full">
          Voir le menu <FiArrowRight aria-hidden="true" />
        </Button>
      </div>
    </article>
  )
}
