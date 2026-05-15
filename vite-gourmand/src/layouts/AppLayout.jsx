import React from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Toast } from '../components/Toast'
import { useAppStore } from '../context/useAppStore'

export function AppLayout() {
  const darkMode = useAppStore((state) => state.darkMode)
  const loadInitialData = useAppStore((state) => state.loadInitialData)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  useEffect(() => {
    loadInitialData()
  }, [loadInitialData])

  return (
    <div className="min-h-screen bg-cream text-ink transition dark:bg-ink dark:text-ivory">
      <Navbar />
      <main id="contenu" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
      <Toast />
    </div>
  )
}
