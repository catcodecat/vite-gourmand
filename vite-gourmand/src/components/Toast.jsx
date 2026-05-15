import React from 'react'
import { useEffect } from 'react'
import { FiCheckCircle, FiInfo } from 'react-icons/fi'
import { useAppStore } from '../context/useAppStore'

export function Toast() {
  const toast = useAppStore((state) => state.toast)
  const clearToast = useAppStore((state) => state.clearToast)

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(clearToast, 3200)
    return () => window.clearTimeout(timer)
  }, [toast, clearToast])

  if (!toast) return null

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex max-w-sm animate-[fadeIn_0.25s_ease-out] items-center gap-3 rounded-md bg-ink px-4 py-3 text-white shadow-premium"
      role="status"
      aria-live="polite"
    >
      {toast.type === 'success' ? <FiCheckCircle aria-hidden="true" /> : <FiInfo aria-hidden="true" />}
      <span className="text-sm font-semibold">{toast.message}</span>
    </div>
  )
}
