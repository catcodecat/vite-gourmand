import React from 'react'
export function Input({ label, error, id, className = '', ...props }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-ink dark:text-ivory" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={`w-full rounded-md border border-wine/20 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-ink/45 focus:border-wine focus:ring-2 focus:ring-gold/30 dark:border-white/15 dark:bg-charcoal dark:text-ivory ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error ? (
        <p className="text-sm font-medium text-wine" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  )
}
