export function isEmail(value) {
  return /\S+@\S+\.\S+/.test(String(value || ''))
}

export function isStrongPassword(value) {
  return (
    typeof value === 'string' &&
    value.length >= 10 &&
    /[A-ZÀ-Ÿ]/.test(value) &&
    /[a-zà-ÿ]/.test(value) &&
    /\d/.test(value) &&
    /[^A-Za-zÀ-ÿ0-9]/.test(value)
  )
}

export function requireFields(body, fields) {
  const missing = fields.filter((field) => body[field] === undefined || body[field] === '')
  if (missing.length) {
    const error = new Error(`Champs obligatoires manquants: ${missing.join(', ')}`)
    error.status = 400
    throw error
  }
}
