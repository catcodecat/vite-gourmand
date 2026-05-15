import React from 'react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiCheckCircle, FiTruck } from 'react-icons/fi'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { useAppStore } from '../context/useAppStore'
import { usePageTitle } from '../hooks/usePageTitle'
import { formatPrice } from '../utils/format'

export function Order() {
  usePageTitle('Commande')
  const [params] = useSearchParams()
  const menus = useAppStore((state) => state.menus)
  const addOrder = useAppStore((state) => state.addOrder)
  const defaultMenu = params.get('menu') || menus[0].id
  const [form, setForm] = useState({ menuId: defaultMenu, name: '', email: '', address: '', date: '', time: '', people: 20 })
  const [confirmed, setConfirmed] = useState(false)
  const [error, setError] = useState('')

  const menu = menus.find((item) => item.id === form.menuId) || menus[0]
  const pricing = useMemo(() => {
    const subtotal = menu.price * Math.max(form.people, menu.minPeople)
    const delivery = subtotal > 1200 ? 0 : 35
    const discount = subtotal * 0.1
    const total = subtotal + delivery - discount
    return { subtotal, delivery, discount, total }
  }, [form.people, menu])

  const submit = async (event) => {
    event.preventDefault()
    try {
      setError('')
      await addOrder({ menuId: menu.id, name: form.name, email: form.email, address: form.address, date: form.date, time: form.time, people: form.people })
      setConfirmed(true)
    } catch (apiError) {
      setError(apiError.message)
      setConfirmed(false)
    }
  }

  return (
    <section className="section">
      <h1 className="section-title">Commande</h1>
      <p className="mt-4 max-w-2xl leading-7 text-ink/70 dark:text-ivory/75">Le formulaire envoie votre demande a l'API locale Vite & Gourmand.</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <form className="grid gap-5 rounded-lg bg-white p-6 shadow-soft dark:bg-charcoal sm:grid-cols-2" onSubmit={submit}>
          <label className="block text-sm font-semibold sm:col-span-2">
            Menu
            <select className="mt-2 w-full rounded-md border border-wine/20 bg-white px-4 py-3 dark:bg-ink" value={form.menuId} onChange={(event) => setForm({ ...form, menuId: event.target.value })}>
              {menus.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
          </label>
          <Input id="name" label="Nom client" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
          <Input id="email" label="Email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
          <div className="sm:col-span-2"><Input id="address" label="Adresse de livraison" value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} required /></div>
          <Input id="date" label="Date" type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} required />
          <Input id="time" label="Heure" type="time" value={form.time} onChange={(event) => setForm({ ...form, time: event.target.value })} required />
          <Input id="people" label={`Nombre de personnes, minimum ${menu.minPeople}`} type="number" min={menu.minPeople} value={form.people} onChange={(event) => setForm({ ...form, people: Number(event.target.value) })} required />
          {error ? <p className="sm:col-span-2 rounded-md bg-wine/10 p-3 text-sm font-semibold text-wine dark:text-gold">{error}</p> : null}
          <Button className="sm:col-span-2" type="submit">Confirmer la commande</Button>
        </form>
        <aside className="rounded-lg bg-ink p-6 text-white shadow-premium" aria-label="Resume de commande">
          <h2 className="font-display text-3xl text-gold">Resume</h2>
          <div className="mt-5 space-y-3 text-sm">
            <p className="flex justify-between"><span>{menu.title}</span><strong>{formatPrice(menu.price)} / pers.</strong></p>
            <p className="flex justify-between"><span>Convives retenus</span><strong>{Math.max(form.people, menu.minPeople)}</strong></p>
            <p className="flex justify-between"><span>Sous-total</span><strong>{formatPrice(pricing.subtotal)}</strong></p>
            <p className="flex justify-between"><span className="inline-flex items-center gap-2"><FiTruck aria-hidden="true" /> Livraison</span><strong>{formatPrice(pricing.delivery)}</strong></p>
            <p className="flex justify-between text-gold"><span>Reduction automatique 10%</span><strong>- {formatPrice(pricing.discount)}</strong></p>
          </div>
          <p className="mt-6 border-t border-white/15 pt-5 font-display text-4xl text-gold">{formatPrice(pricing.total)}</p>
          {confirmed ? <p className="mt-5 flex items-center gap-2 rounded-md bg-white/10 p-3 font-semibold"><FiCheckCircle aria-hidden="true" /> Commande envoyee a l'API.</p> : null}
        </aside>
      </div>
    </section>
  )
}
