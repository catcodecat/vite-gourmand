import React from 'react'
import { useMemo } from 'react'
import { FiAward, FiCalendar, FiShield } from 'react-icons/fi'
import { HeroSection } from '../components/HeroSection'
import { ReviewCard } from '../components/ReviewCard'
import { StatsSection } from '../components/StatsSection'
import { galleryImages, eventTypes } from '../assets/brand'
import { useAppStore } from '../context/useAppStore'
import { usePageTitle } from '../hooks/usePageTitle'
import { Button } from '../components/Button'

export function Home() {
  usePageTitle('Accueil')
  const allReviews = useAppStore((state) => state.reviews)
  const reviews = useMemo(() => allReviews.filter((review) => review.validated), [allReviews])

  return (
    <>
      <HeroSection />
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-wine dark:text-gold">Savoir-faire bordelais</p>
            <h2 className="section-title mt-3">Une réception soignée, du premier échange au dernier service.</h2>
            <p className="mt-5 leading-8 text-ink/70 dark:text-ivory/75">
              Vite & Gourmand accompagne les particuliers et professionnels avec une cuisine de saison, une organisation rigoureuse et une présentation premium pensée pour valoriser chaque événement.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [FiAward, 'Produits sélectionnés'],
                [FiShield, 'Hygiène & allergènes maîtrisés'],
                [FiCalendar, 'Organisation événementielle']
              ].map(([Icon, label]) => (
                <div className="rounded-lg bg-white p-4 shadow-soft dark:bg-charcoal" key={label}>
                  <Icon className="text-2xl text-wine dark:text-gold" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <img className="h-full min-h-96 rounded-lg object-cover shadow-premium" src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1200&q=80" alt="Table gastronomique dressée avec plusieurs plats" />
        </div>
      </section>
      <StatsSection />
      <section className="section">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-wine dark:text-gold">Événements</p>
            <h2 className="section-title mt-3">Des formats adaptés à chaque moment.</h2>
          </div>
          <Button to="/menus" variant="secondary">Voir tous les menus</Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((event) => (
            <article className="rounded-lg bg-white p-6 shadow-soft dark:bg-charcoal" key={event}>
              <h3 className="font-display text-2xl text-wine dark:text-gold">{event}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/70 dark:text-ivory/75">Une proposition ajustée au nombre d'invités, aux régimes alimentaires et au niveau de service attendu.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-ivory py-16 dark:bg-charcoal">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title">Avis clients validés</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reviews.slice(0, 3).map((review) => <ReviewCard key={review.id} review={review} />)}
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Galerie photos</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <img key={image} className="h-64 w-full rounded-lg object-cover shadow-soft" src={image} alt={`Réalisation traiteur Vite & Gourmand ${index + 1}`} loading="lazy" />
          ))}
        </div>
      </section>
    </>
  )
}
