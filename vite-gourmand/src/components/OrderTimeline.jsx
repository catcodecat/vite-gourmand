import React from 'react'
import { FiCheck } from 'react-icons/fi'

export function OrderTimeline({ steps, current }) {
  const currentIndex = steps.indexOf(current)

  return (
    <ol className="grid gap-3 sm:grid-cols-4" aria-label="Suivi de commande">
      {steps.map((step, index) => {
        const done = index <= currentIndex
        return (
          <li key={step} className="flex items-center gap-3 rounded-md bg-ivory p-3 dark:bg-ink">
            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${done ? 'bg-wine text-white' : 'bg-white text-ink/50 dark:bg-charcoal dark:text-ivory/50'}`}>
              <FiCheck aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold capitalize">{step}</span>
          </li>
        )
      })}
    </ol>
  )
}
