import jwt from 'jsonwebtoken'
import { query } from '../config/mysql.js'

export async function auth(req, res, next) {
  try {
    const header = req.headers.authorization || ''
    const token = header.startsWith('Bearer ') ? header.slice(7) : null
    if (!token) return res.status(401).json({ message: 'Token manquant' })

    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const users = await query(
      `SELECT users.id, users.name, users.email, users.phone, users.active, roles.name AS role
       FROM users JOIN roles ON roles.id = users.role_id
       WHERE users.id = ? LIMIT 1`,
      [payload.id]
    )
    if (!users.length || !users[0].active) return res.status(401).json({ message: 'Compte invalide' })
    req.user = users[0]
    next()
  } catch {
    res.status(401).json({ message: 'Token invalide ou expire' })
  }
}

export async function optionalAuth(req, res, next) {
  const header = req.headers.authorization || ''
  if (!header.startsWith('Bearer ')) return next()
  return auth(req, res, next)
}

export function roles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Acces refuse' })
    }
    next()
  }
}
