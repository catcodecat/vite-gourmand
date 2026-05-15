import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useAppStore } from '../context/useAppStore'
import { Button } from './Button'

const links = [
  ['/', 'Accueil'],
  ['/menus', 'Menus'],
  ['/commande', 'Commande'],
  ['/dashboard', 'Dashboard'],
  ['/contact', 'Contact']
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const darkMode = useAppStore((state) => state.darkMode)
  const toggleDarkMode = useAppStore((state) => state.toggleDarkMode)

  return (
    <header className="sticky top-0 z-30 border-b border-wine/10 bg-ivory/95 backdrop-blur dark:border-white/10 dark:bg-ink/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4" aria-label="Navigation principale">
        <NavLink className="font-display text-2xl font-bold text-wine dark:text-gold" to="/" onClick={() => setOpen(false)}>
          Vite & Gourmand
        </NavLink>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `text-sm font-semibold transition ${isActive ? 'text-wine dark:text-gold' : 'text-ink/70 hover:text-wine dark:text-ivory/75'}`}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" onClick={toggleDarkMode} aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}>
            {darkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </Button>
          <Button to="/connexion" variant="secondary">
            Connexion
          </Button>
        </div>
        <button className="rounded-md p-2 text-wine focus:outline-none focus-visible:ring-2 focus-visible:ring-wine lg:hidden dark:text-gold" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu mobile" aria-expanded={open}>
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-wine/10 bg-ivory px-4 py-4 lg:hidden dark:border-white/10 dark:bg-ink">
          <div className="mx-auto grid max-w-6xl gap-2">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold text-ink hover:bg-wine/10 dark:text-ivory">
                {label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" onClick={toggleDarkMode} aria-label="Changer le thème">
                {darkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
              </Button>
              <Button to="/connexion" variant="secondary" className="flex-1" onClick={() => setOpen(false)}>
                Connexion
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
