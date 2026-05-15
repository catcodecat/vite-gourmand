export const formatPrice = (amount) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount)

export const uniqueValues = (items, key) => [...new Set(items.map((item) => item[key]))]

export const passwordRules = [
  { label: '10 caractères minimum', test: (value) => value.length >= 10 },
  { label: 'Une majuscule', test: (value) => /[A-ZÀ-Ÿ]/.test(value) },
  { label: 'Une minuscule', test: (value) => /[a-zà-ÿ]/.test(value) },
  { label: 'Un chiffre', test: (value) => /\d/.test(value) },
  { label: 'Un caractère spécial', test: (value) => /[^A-Za-zÀ-ÿ0-9]/.test(value) }
]
