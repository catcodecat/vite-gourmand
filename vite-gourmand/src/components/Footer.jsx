import React from 'react'
import { Link } from 'react-router-dom'
import { FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl font-bold text-gold">Vite & Gourmand</p>
          <p className="mt-3 max-w-md leading-7 text-white/75">
            Traiteur bordelais premium pour événements professionnels, mariages, cocktails et réceptions privées.
          </p>
        </div>
        <div>
          <p className="font-semibold text-gold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li className="flex gap-2"><FiMapPin aria-hidden="true" /> 18 cours de l'Intendance, Bordeaux</li>
            <li className="flex gap-2"><FiPhone aria-hidden="true" /> 05 56 88 42 10</li>
            <li className="flex gap-2"><FiMail aria-hidden="true" /> contact@vitegourmand.fr</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gold">Liens</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li><Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
            <li><Link to="/cgv" className="hover:text-white">CGV</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><a href="https://www.instagram.com" className="inline-flex items-center gap-2 hover:text-white"><FiInstagram aria-hidden="true" /> Instagram</a></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-sm text-white/55">© 2026 Vite & Gourmand. Projet front-end ECF, données simulées.</p>
    </footer>
  )
}
