import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { Button } from '../components/Button'

export function ErrorPage() {
  const error = useRouteError()

  return (
    <section className="section">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 text-center shadow-premium dark:bg-charcoal">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-wine dark:text-gold">Erreur applicative</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink dark:text-ivory">Une page n'a pas pu s'afficher.</h1>
        <p className="mt-4 leading-7 text-ink/70 dark:text-ivory/75">
          Vous pouvez revenir à l'accueil ou réessayer la navigation.
        </p>
        {error?.message ? (
          <p className="mt-5 rounded-md bg-cream p-3 text-sm font-semibold text-wine dark:bg-ink dark:text-gold">
            {error.message}
          </p>
        ) : null}
        {error?.stack ? (
          <pre className="mt-5 max-h-72 overflow-auto rounded-md bg-ink p-4 text-left text-xs text-ivory">
            {error.stack}
          </pre>
        ) : null}
        <Button to="/" className="mt-6">Retour à l'accueil</Button>
      </div>
    </section>
  )
}
