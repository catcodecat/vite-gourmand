import React from 'react'
import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { useAppStore } from '../context/useAppStore'
import { usePageTitle } from '../hooks/usePageTitle'

export function Contact() {
  usePageTitle('Contact')
  const [form, setForm] = useState({ name: '', email: '', event: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const sendContact = useAppStore((state) => state.sendContact)

  const submit = async (event) => {
    event.preventDefault()
    try {
      setError('')
      await sendContact({ title: form.event || form.name, email: form.email, message: form.message })
      setSent(true)
    } catch (apiError) {
      setError(apiError.message)
      setSent(false)
    }
  }

  return (
    <section className="section">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-wine dark:text-gold">Contact</p>
          <h1 className="section-title mt-3">Parlons de votre evenement.</h1>
          <p className="mt-5 leading-8 text-ink/70 dark:text-ivory/75">Notre equipe vous repond sous 24h ouvrees pour affiner le format, le budget, les regimes alimentaires et les contraintes logistiques.</p>
          <ul className="mt-8 space-y-4 font-semibold">
            <li className="flex gap-3"><FiMapPin className="text-wine dark:text-gold" aria-hidden="true" /> 18 cours de l'Intendance, Bordeaux</li>
            <li className="flex gap-3"><FiPhone className="text-wine dark:text-gold" aria-hidden="true" /> 05 56 88 42 10</li>
            <li className="flex gap-3"><FiMail className="text-wine dark:text-gold" aria-hidden="true" /> contact@vitegourmand.fr</li>
          </ul>
        </div>
        <form className="rounded-lg bg-white p-8 shadow-premium dark:bg-charcoal" onSubmit={submit}>
          {sent ? <p className="mb-5 rounded-md bg-sage/15 p-4 font-semibold text-sage">Message envoye. Merci pour votre demande.</p> : null}
          {error ? <p className="mb-5 rounded-md bg-wine/10 p-4 font-semibold text-wine dark:text-gold">{error}</p> : null}
          <div className="grid gap-5 sm:grid-cols-2">
            <Input id="contact-name" label="Nom" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
            <Input id="contact-email" label="Email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
            <Input id="contact-event" label="Type d'evenement" value={form.event} onChange={(event) => setForm({ ...form, event: event.target.value })} />
            <label className="block text-sm font-semibold sm:col-span-2" htmlFor="contact-message">
              Message
              <textarea
                id="contact-message"
                className="mt-1.5 min-h-40 w-full rounded-md border border-wine/20 bg-white px-4 py-3 outline-none focus:border-wine focus:ring-2 focus:ring-gold/30 dark:bg-ink"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                required
              />
            </label>
            <Button className="sm:col-span-2" type="submit">Envoyer la demande</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
