import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Button } from './Button'

export function HeroSection() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-ink text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1800&q=85"
        alt="Buffet traiteur élégant dressé pour une réception"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[86vh] max-w-6xl items-center px-4 py-20">
        <div className="max-w-2xl animate-[fadeIn_0.7s_ease-out]">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">Traiteur premium à Bordeaux</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">Vite & Gourmand</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/86">
            Menus raffinés, logistique maîtrisée et service chaleureux pour vos mariages, cocktails, séminaires et réceptions privées.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/menus">
              Découvrir les menus <FiArrowRight aria-hidden="true" />
            </Button>
            <Button to="/contact" variant="secondary">
              Demander un devis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
