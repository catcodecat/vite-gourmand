import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { useAppStore } from '../context/useAppStore'
import { usePageTitle } from '../hooks/usePageTitle'

export function Login() {
  usePageTitle('Connexion')
  const navigate = useNavigate()
  const login = useAppStore((state) => state.login)
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const submit = async (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'Adresse email invalide.'
    if (form.password.length < 6) nextErrors.password = 'Le mot de passe doit contenir au moins 6 caracteres.'
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      try {
        const user = await login(form.email, form.password)
        if (user.role === 'administrateur') navigate('/admin')
        else if (user.role === 'employe') navigate('/employe')
        else navigate('/dashboard')
      } catch (error) {
        setErrors({ password: error.message })
      }
    }
  }

  return (
    <section className="section">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-premium dark:bg-charcoal">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-wine dark:text-gold">Espace client</p>
        <h1 className="mt-3 font-display text-4xl font-bold">Connexion</h1>
        <form className="mt-8 space-y-5" onSubmit={submit} noValidate>
          <Input id="email" label="Email" type="email" autoComplete="email" value={form.email} error={errors.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
          <Input id="password" label="Mot de passe" type="password" autoComplete="current-password" value={form.password} error={errors.password} onChange={(event) => setForm({ ...form, password: event.target.value })} />
          <div className="flex items-center justify-between gap-4 text-sm">
            <Link to="/inscription" className="font-semibold text-wine underline dark:text-gold">Creer un compte</Link>
            <a href="mailto:support@vitegourmand.fr" className="font-semibold text-wine underline dark:text-gold">Mot de passe oublie</a>
          </div>
          <Button className="w-full" type="submit"><FiLogIn aria-hidden="true" /> Se connecter</Button>
        </form>
      </div>
    </section>
  )
}
