import React from 'react'
export function Loader({ label = 'Chargement' }) {
  return (
    <div className="flex items-center justify-center gap-3 py-10 text-wine" role="status" aria-live="polite">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-wine/30 border-t-wine" />
      <span className="font-semibold">{label}</span>
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-soft dark:bg-charcoal" aria-hidden="true">
      <div className="h-52 animate-pulse bg-wine/10 dark:bg-white/10" />
      <div className="space-y-3 p-5">
        <div className="h-4 w-2/3 animate-pulse rounded bg-wine/10 dark:bg-white/10" />
        <div className="h-3 w-full animate-pulse rounded bg-wine/10 dark:bg-white/10" />
        <div className="h-3 w-4/5 animate-pulse rounded bg-wine/10 dark:bg-white/10" />
      </div>
    </div>
  )
}
