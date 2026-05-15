import React from 'react'
import { useMemo, useState } from 'react'
import { FiCheck, FiSearch } from 'react-icons/fi'
import { Button } from '../components/Button'
import { DashboardSidebar } from '../components/DashboardSidebar'
import { Input } from '../components/Input'
import { MenuCard } from '../components/MenuCard'
import { useAppStore } from '../context/useAppStore'
import { usePageTitle } from '../hooks/usePageTitle'
import { formatPrice } from '../utils/format'

const statuses = ['en attente', 'accepte', 'en preparation', 'en cours de livraison', 'livre', 'en attente du retour de materiel', 'terminee', 'annulee']

export function EmployeeDashboard() {
  usePageTitle('Dashboard employé')
  const menus = useAppStore((state) => state.menus)
  const orders = useAppStore((state) => state.orders)
  const reviews = useAppStore((state) => state.reviews)
  const updateOrderStatus = useAppStore((state) => state.updateOrderStatus)
  const validateReview = useAppStore((state) => state.validateReview)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  const filteredOrders = useMemo(() => orders.filter((order) => {
    const matchQuery = `${order.id} ${order.customer} ${order.menuTitle}`.toLowerCase().includes(query.toLowerCase())
    return matchQuery && (!statusFilter || order.status === statusFilter)
  }), [orders, query, statusFilter])

  return (
    <section className="section">
      <h1 className="section-title">Dashboard employé</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <DashboardSidebar />
        <div className="space-y-8">
          <div className="card">
            <h2 className="font-display text-3xl text-wine dark:text-gold">Gestion commandes</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_220px]">
              <Input id="search-order" label="Recherche commandes" placeholder="Client, référence, menu..." value={query} onChange={(event) => setQuery(event.target.value)} />
              <label className="text-sm font-semibold">
                Statut
                <select className="mt-1.5 w-full rounded-md border border-wine/20 bg-white px-4 py-3 dark:bg-ink" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                  <option value="">Tous</option>
                  {statuses.map((status) => <option key={status}>{status}</option>)}
                </select>
              </label>
            </div>
            <div className="mt-5 space-y-3">
              {filteredOrders.map((order) => (
                <article key={order.id} className="grid gap-4 rounded-lg border border-wine/10 p-4 dark:border-white/10 lg:grid-cols-[1fr_200px_180px] lg:items-center">
                  <div>
                    <h3 className="font-bold">{order.id} • {order.customer}</h3>
                    <p className="text-sm text-ink/65 dark:text-ivory/70">{order.menuTitle} • {formatPrice(order.total)}</p>
                  </div>
                  <select className="rounded-md border border-wine/20 bg-white px-3 py-3 dark:bg-ink" value={order.status} onChange={(event) => updateOrderStatus(order.id, event.target.value)} aria-label={`Changer le statut de ${order.id}`}>
                    {statuses.map((status) => <option key={status}>{status}</option>)}
                  </select>
                  <p className="text-sm font-semibold capitalize">{order.status}</p>
                </article>
              ))}
              {!filteredOrders.length ? <p className="rounded-md bg-ivory p-4 text-sm font-semibold dark:bg-ink"><FiSearch className="mr-2 inline" aria-hidden="true" /> Aucune commande trouvée.</p> : null}
            </div>
          </div>
          <div className="card">
            <h2 className="font-display text-3xl text-wine dark:text-gold">Validation avis</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {reviews.map((review) => (
                <article key={review.id} className="rounded-lg border border-wine/10 p-4 dark:border-white/10">
                  <p className="font-bold">{review.author} • {review.rating}/5</p>
                  <p className="mt-2 text-sm leading-6">{review.content}</p>
                  <Button className="mt-4" type="button" disabled={review.validated} onClick={() => validateReview(review.id)}>
                    <FiCheck aria-hidden="true" /> {review.validated ? 'Déjà validé' : 'Valider'}
                  </Button>
                </article>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 className="font-display text-3xl text-wine dark:text-gold">Gestion menus</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {menus.slice(0, 3).map((menu) => <MenuCard key={menu.id} menu={menu} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
