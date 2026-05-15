import React from 'react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiAlertTriangle, FiBox, FiShoppingBag, FiUsers } from 'react-icons/fi'
import { Button } from '../components/Button'
import { useAppStore } from '../context/useAppStore'
import { usePageTitle } from '../hooks/usePageTitle'
import { formatPrice } from '../utils/format'

export function MenuDetail() {
  const { id } = useParams()
  const menus = useAppStore((state) => state.menus)
  const menu = useMemo(() => menus.find((item) => item.id === id), [id, menus])
  const [activeImage, setActiveImage] = useState(0)
  usePageTitle(menu?.title || 'Menu')

  if (!menu) {
    return (
      <section className="section">
        <div className="card">
          <h1 className="section-title">Menu introuvable</h1>
          <Link className="mt-4 inline-block font-bold text-wine underline dark:text-gold" to="/menus">Retour aux menus</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <img className="h-[460px] w-full rounded-lg object-cover shadow-premium" src={menu.images[activeImage]} alt={`Galerie du menu ${menu.title}`} />
          <div className="mt-4 grid grid-cols-2 gap-3">
            {menu.images.map((image, index) => (
              <button key={image} className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-wine" onClick={() => setActiveImage(index)} aria-label={`Afficher l'image ${index + 1}`}>
                <img className="h-28 w-full rounded-md object-cover" src={image} alt="" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-wine dark:text-gold">{menu.theme} • {menu.diet}</p>
          <h1 className="section-title mt-3">{menu.title}</h1>
          <p className="mt-5 leading-8 text-ink/75 dark:text-ivory/75">{menu.longDescription}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="card p-4"><p className="font-display text-2xl text-wine dark:text-gold">{formatPrice(menu.price)}</p><p className="text-sm">par personne</p></div>
            <div className="card p-4"><p className="flex items-center gap-2 font-bold"><FiUsers aria-hidden="true" /> {menu.minPeople}</p><p className="text-sm">personnes min.</p></div>
            <div className="card p-4"><p className="flex items-center gap-2 font-bold"><FiBox aria-hidden="true" /> {menu.stock}</p><p className="text-sm">stocks dispo.</p></div>
          </div>
          <div className="mt-6 rounded-lg border-l-4 border-gold bg-white p-5 shadow-soft dark:bg-charcoal">
            <p className="flex items-center gap-2 font-bold text-wine dark:text-gold"><FiAlertTriangle aria-hidden="true" /> Conditions importantes</p>
            <p className="mt-2 text-sm leading-6">{menu.conditions}</p>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-wine dark:text-gold">Plats</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {menu.dishes.map((dish) => <li key={dish}>• {dish}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-wine dark:text-gold">Allergènes</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {menu.allergens.map((allergen) => <span className="rounded-full bg-wine/10 px-3 py-1 text-sm font-semibold text-wine dark:bg-white/10 dark:text-gold" key={allergen}>{allergen}</span>)}
              </div>
            </div>
          </div>
          <Button to={`/commande?menu=${menu.id}`} className="mt-8 w-full sm:w-auto">
            Commander <FiShoppingBag aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
