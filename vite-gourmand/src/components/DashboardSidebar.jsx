import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiBarChart2, FiBriefcase, FiUser } from 'react-icons/fi'

const links = [
  { to: '/dashboard', label: 'Utilisateur', icon: FiUser },
  { to: '/employe', label: 'Employé', icon: FiBriefcase },
  { to: '/admin', label: 'Admin', icon: FiBarChart2 }
]

export function DashboardSidebar() {
  return (
    <nav className="rounded-lg bg-white p-3 shadow-soft dark:bg-charcoal" aria-label="Navigation des dashboards">
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            `mb-2 flex items-center gap-3 rounded-md px-4 py-3 text-sm font-semibold transition ${isActive ? 'bg-wine text-white' : 'text-ink hover:bg-wine/10 dark:text-ivory'}`
          }
        >
          <Icon aria-hidden="true" />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
