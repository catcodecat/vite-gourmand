import React from 'react'
import { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { usePageTitle } from '../hooks/usePageTitle'
import { passwordRules } from '../utils/format'
import { useAppStore } from '../context/useAppStore'

export function Register() {
  usePageTitle('Inscription')
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const register = useAppStore((state) => state.register)
  const clearToast = useAppStore((state) => state.clearToast)
  const validRules = passwordRules.map((rule) => ({ ...rule, ok: rule.test(form.password) }))

  const submit = async (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (form.name.length < 2) nextErrors.name = 'Nom obligatoire.'
    if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'Email invalide.'
    if (!validRules.every((rule) => rule.ok)) nextErrors.password = 'Le mot de passe ne respecte pas toutes les regles.'
    if (form.confirm !== form.password) nextErrors.confirm = 'Les mots de passe ne correspondent pas.'
    setErrors(nextErrors)
    clearToast()

    if (Object.keys(nextErrors).length === 0) {
      try {
        await register({ name: form.name, email: form.email, phone: form.phone, password: form.password })
        setDone(true)
      } catch (error) {
        setDone(false)
        setErrors({ email: error.message })
      }
    }
  }

  return (
    <section className="section">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-premium dark:bg-charcoal">
        <h1 className="font-display text-4xl font-bold">Creer un compte</h1>
        {done ? <p className="mt-4 rounded-md bg-sage/15 p-4 font-semibold text-sage">Compte cree avec succes.</p> : null}
        <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={submit} noValidate>
          <Input id="name" label="Nom complet" value={form.name} error={errors.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          <Input id="phone" label="Telephone" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
          <div className="sm:col-span-2">
            <Input id="email" label="Email" type="email" value={form.email} error={errors.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
          </div>
          <Input id="password" label="Mot de passe securise" type="password" value={form.password} error={errors.password} onChange={(event) => setForm({ ...form, password: event.target.value })} />
          <Input id="confirm" label="Confirmation" type="password" value={form.confirm} error={errors.confirm} onChange={(event) => setForm({ ...form, confirm: event.target.value })} />
          <ul className="sm:col-span-2 grid gap-2 rounded-lg bg-ivory p-4 text-sm dark:bg-ink" aria-label="Regles du mot de passe">
            {validRules.map((rule) => (
              <li key={rule.label} className={`flex items-center gap-2 font-semibold ${rule.ok ? 'text-sage' : 'text-ink/65 dark:text-ivory/65'}`}>
                <FiCheckCircle aria-hidden="true" /> {rule.label}
              </li>
            ))}
          </ul>
          <Button className="sm:col-span-2" type="submit">S'inscrire</Button>
        </form>
      </div>
    </section>
  )
}
