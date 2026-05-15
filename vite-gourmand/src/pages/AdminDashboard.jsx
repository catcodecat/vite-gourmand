import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Button } from '../components/Button'
import { DashboardSidebar } from '../components/DashboardSidebar'
import { Input } from '../components/Input'
import { useAppStore } from '../context/useAppStore'
import { usePageTitle } from '../hooks/usePageTitle'
import { formatPrice } from '../utils/format'

export function AdminDashboard() {
  usePageTitle('Dashboard administrateur')
  const users = useAppStore((state) => state.users)
  const orders = useAppStore((state) => state.orders)
  const analytics = useAppStore((state) => state.analytics)
  const loadAdminData = useAppStore((state) => state.loadAdminData)
  const createEmployee = useAppStore((state) => state.createEmployee)
  const toggleUserStatus = useAppStore((state) => state.toggleUserStatus)
  const [employee, setEmployee] = useState({ name: '', email: '', phone: '' })

  useEffect(() => {
    loadAdminData().catch(() => null)
  }, [loadAdminData])

  const chartData = useMemo(() => analytics?.chartData || orders.map((order) => ({
    name: order.id.replace('VG-2026-', '#'),
    commandes: order.people,
    ca: Math.round(order.total)
  })), [analytics, orders])

  const submit = (event) => {
    event.preventDefault()
    if (employee.name && employee.email) {
      createEmployee(employee)
      setEmployee({ name: '', email: '', phone: '' })
    }
  }

  return (
    <section className="section">
      <h1 className="section-title">Dashboard administrateur</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <DashboardSidebar />
        <div className="space-y-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="card"><p className="text-sm font-bold text-wine dark:text-gold">CA simulé</p><p className="mt-2 font-display text-3xl">{formatPrice(orders.reduce((sum, order) => sum + order.total, 0))}</p></div>
            <div className="card"><p className="text-sm font-bold text-wine dark:text-gold">Commandes</p><p className="mt-2 font-display text-3xl">{orders.length}</p></div>
            <div className="card"><p className="text-sm font-bold text-wine dark:text-gold">Comptes actifs</p><p className="mt-2 font-display text-3xl">{users.filter((user) => user.active).length}</p></div>
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            <div className="card">
              <h2 className="font-display text-3xl text-wine dark:text-gold">Comparaison commandes</h2>
              <div className="mt-5 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="commandes" fill="#6f1d2f" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="card">
              <h2 className="font-display text-3xl text-wine dark:text-gold">Chiffre d'affaires</h2>
              <div className="mt-5 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="ca" stroke="#c6944b" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="card">
            <h2 className="font-display text-3xl text-wine dark:text-gold">Création employés</h2>
            <form className="mt-5 grid gap-4 md:grid-cols-4" onSubmit={submit}>
              <Input id="employee-name" label="Nom" value={employee.name} onChange={(event) => setEmployee({ ...employee, name: event.target.value })} />
              <Input id="employee-email" label="Email" type="email" value={employee.email} onChange={(event) => setEmployee({ ...employee, email: event.target.value })} />
              <Input id="employee-phone" label="Téléphone" value={employee.phone} onChange={(event) => setEmployee({ ...employee, phone: event.target.value })} />
              <Button className="self-end" type="submit">Créer</Button>
            </form>
          </div>
          <div className="card">
            <h2 className="font-display text-3xl text-wine dark:text-gold">Comptes utilisateurs</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-ivory dark:bg-ink">
                  <tr><th className="p-3">Nom</th><th className="p-3">Email</th><th className="p-3">Rôle</th><th className="p-3">Statut</th><th className="p-3">Action</th></tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr className="border-b border-wine/10 dark:border-white/10" key={user.id}>
                      <td className="p-3 font-semibold">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3 capitalize">{user.role}</td>
                      <td className="p-3">{user.active ? 'Actif' : 'Désactivé'}</td>
                      <td className="p-3"><Button variant="secondary" type="button" onClick={() => toggleUserStatus(user.id)}>{user.active ? 'Désactiver' : 'Activer'}</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
