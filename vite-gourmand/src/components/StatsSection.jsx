import React from 'react'
const stats = [
  ['12 ans', 'd’expérience événementielle'],
  ['4,9/5', 'note moyenne clients'],
  ['180+', 'réceptions par an'],
  ['96%', 'clients recommandent']
]

export function StatsSection() {
  return (
    <section className="bg-wine py-12 text-white" aria-label="Chiffres clés">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="rounded-lg border border-white/15 p-5">
            <p className="font-display text-4xl font-bold text-gold">{value}</p>
            <p className="mt-1 text-sm text-white/80">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
