import React from 'react'
import { FiEdit3, FiMessageSquare } from 'react-icons/fi'
import { DashboardSidebar } from '../components/DashboardSidebar'
import { Input } from '../components/Input'
import { OrderTimeline } from '../components/OrderTimeline'
import { ReviewCard } from '../components/ReviewCard'
import { useAppStore } from '../context/useAppStore'
import { usePageTitle } from '../hooks/usePageTitle'
import { formatPrice } from '../utils/format'

export function UserDashboard() {
  usePageTitle('Dashboard utilisateur')
  const user = useAppStore((state) => state.user)
  const orders = useAppStore((state) => state.orders)
  const reviews = useAppStore((state) => state.reviews)

  return (
    <section className="section">
      <h1 className="section-title">Dashboard utilisateur</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <DashboardSidebar />
        <div className="space-y-8">
          <div className="card">
            <h2 className="flex items-center gap-2 font-display text-3xl text-wine dark:text-gold"><FiEdit3 aria-hidden="true" /> Profil</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Input id="profile-name" label="Nom" defaultValue={user.name} />
              <Input id="profile-email" label="Email" defaultValue={user.email} />
              <Input id="profile-phone" label="Téléphone" defaultValue={user.phone} />
            </div>
          </div>
          <div className="card">
            <h2 className="font-display text-3xl text-wine dark:text-gold">Historique commandes</h2>
            <div className="mt-5 space-y-5">
              {orders.map((order) => (
                <article key={order.id} className="rounded-lg border border-wine/10 p-4 dark:border-white/10">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div>
                      <h3 className="font-bold">{order.id} • {order.menuTitle}</h3>
                      <p className="text-sm text-ink/65 dark:text-ivory/70">{order.date} à {order.time} • {order.people} personnes</p>
                    </div>
                    <p className="font-display text-2xl text-wine dark:text-gold">{formatPrice(order.total)}</p>
                  </div>
                  <div className="mt-4"><OrderTimeline steps={order.steps} current={order.status} /></div>
                </article>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 className="flex items-center gap-2 font-display text-3xl text-wine dark:text-gold"><FiMessageSquare aria-hidden="true" /> Mes avis</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {reviews.filter((review) => review.validated).slice(0, 2).map((review) => <ReviewCard key={review.id} review={review} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
