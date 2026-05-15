import React from 'react'
import { FiX } from 'react-icons/fi'
import { Button } from './Button'

export function Modal({ open, title, children, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-ink/65 p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="w-full max-w-lg rounded-lg bg-ivory p-6 shadow-premium dark:bg-charcoal">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-2xl text-wine dark:text-gold" id="modal-title">
            {title}
          </h2>
          <Button variant="ghost" onClick={onClose} aria-label="Fermer la fenêtre">
            <FiX aria-hidden="true" />
          </Button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}
