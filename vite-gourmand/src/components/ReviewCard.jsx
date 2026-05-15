import React from 'react'
import { FiStar } from 'react-icons/fi'

export function ReviewCard({ review }) {
  return (
    <article className="rounded-lg bg-white p-6 shadow-soft dark:bg-charcoal">
      <div className="flex gap-1 text-gold" aria-label={`${review.rating} étoiles sur 5`}>
        {Array.from({ length: review.rating }).map((_, index) => (
          <FiStar key={index} fill="currentColor" aria-hidden="true" />
        ))}
      </div>
      <p className="mt-4 leading-7 text-ink/75 dark:text-ivory/75">“{review.content}”</p>
      <p className="mt-4 font-semibold text-ink dark:text-ivory">{review.author}</p>
      <p className="text-sm text-wine dark:text-gold">{review.event}</p>
    </article>
  )
}
