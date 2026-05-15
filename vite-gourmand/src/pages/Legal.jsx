import React from 'react'
import { usePageTitle } from '../hooks/usePageTitle'

export function Legal({ type }) {
  const isCgv = type === 'cgv'
  usePageTitle(isCgv ? 'Conditions générales de vente' : 'Mentions légales')

  return (
    <section className="section">
      <article className="prose prose-lg max-w-none rounded-lg bg-white p-8 shadow-soft dark:bg-charcoal">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-wine dark:text-gold">Informations légales</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink dark:text-ivory">{isCgv ? 'Conditions générales de vente' : 'Mentions légales'}</h1>
        {isCgv ? (
          <div className="mt-6 space-y-5 leading-8 text-ink/75 dark:text-ivory/75">
            <p>Les présentes conditions encadrent les commandes simulées passées auprès de Vite & Gourmand dans le cadre de ce projet front-end.</p>
            <p>Les prix affichés sont exprimés en euros TTC par personne. Une réduction automatique de 10% est appliquée dans le tunnel de commande fictif.</p>
            <p>Les commandes doivent respecter le nombre minimum de convives indiqué pour chaque menu. Les délais, stocks et frais de livraison sont mockés.</p>
            <p>Aucun paiement réel n'est collecté. Aucun contrat réel n'est conclu depuis cette application de démonstration.</p>
          </div>
        ) : (
          <div className="mt-6 space-y-5 leading-8 text-ink/75 dark:text-ivory/75">
            <p>Vite & Gourmand, entreprise fictive de traiteur située à Bordeaux, créée pour un livrable ECF Studi.</p>
            <p>Adresse: 18 cours de l'Intendance, 33000 Bordeaux. Email: contact@vitegourmand.fr. Téléphone: 05 56 88 42 10.</p>
            <p>Responsable de publication: Nadia Moreau. Hébergement local via Vite pendant le développement.</p>
            <p>Les images proviennent de banques libres et les données clients, commandes et avis sont entièrement fictives.</p>
          </div>
        )}
      </article>
    </section>
  )
}
