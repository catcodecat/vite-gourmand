import bcrypt from 'bcrypt'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { query } from '../config/mysql.js'
import { sendSimulatedEmail } from '../services/emailService.js'
import { isEmail, isStrongPassword, requireFields } from '../utils/validators.js'

function signToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '2h'
  })
}

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    active: Boolean(user.active)
  }
}

export async function register(req, res) {
  requireFields(req.body, ['name', 'email', 'password'])
  const { name, email, phone = '', password } = req.body
  if (!isEmail(email)) return res.status(400).json({ message: 'Email invalide' })
  if (!isStrongPassword(password)) return res.status(400).json({ message: 'Mot de passe trop faible' })

  const exists = await query('SELECT id FROM users WHERE email = ? LIMIT 1', [email])
  if (exists.length) return res.status(409).json({ message: 'Email deja utilise' })

  const roles = await query('SELECT id FROM roles WHERE name = ? LIMIT 1', ['utilisateur'])
  const passwordHash = await bcrypt.hash(password, 12)
  const result = await query(
    'INSERT INTO users (role_id, name, email, phone, password_hash) VALUES (?, ?, ?, ?, ?)',
    [roles[0].id, name, email, phone, passwordHash]
  )
  const user = { id: result.insertId, name, email, phone, role: 'utilisateur', active: 1 }
  await sendSimulatedEmail('bienvenue', email, 'Bienvenue chez Vite & Gourmand', `Bonjour ${name}, votre compte est cree.`)
  res.status(201).json({ user: publicUser(user), token: signToken(user) })
}

export async function login(req, res) {
  requireFields(req.body, ['email', 'password'])
  const users = await query(
    `SELECT users.*, roles.name AS role
     FROM users JOIN roles ON roles.id = users.role_id
     WHERE users.email = ? LIMIT 1`,
    [req.body.email]
  )
  if (!users.length || !users[0].active) return res.status(401).json({ message: 'Identifiants invalides' })

  const ok = await bcrypt.compare(req.body.password, users[0].password_hash)
  if (!ok) return res.status(401).json({ message: 'Identifiants invalides' })

  res.json({ user: publicUser(users[0]), token: signToken(users[0]) })
}

export async function me(req, res) {
  res.json({ user: publicUser(req.user) })
}

export async function requestPasswordReset(req, res) {
  requireFields(req.body, ['email'])
  const users = await query('SELECT id, email, name FROM users WHERE email = ? LIMIT 1', [req.body.email])
  if (users.length) {
    const token = crypto.randomBytes(24).toString('hex')
    await query(
      'INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 1 HOUR))',
      [users[0].id, token]
    )
    await sendSimulatedEmail('reset-password', users[0].email, 'Reinitialisation du mot de passe', `Token local: ${token}`)
  }
  res.json({ message: 'Si le compte existe, un email simule a ete genere.' })
}

export async function ensureInitialAdmin() {
  if (!process.env.ADMIN_PASSWORD) return
  await ensureDemoAccount('administrateur', 'Admin Vite & Gourmand', process.env.ADMIN_EMAIL || 'admin@vitegourmand.fr', '05 56 88 42 10')
  await ensureDemoAccount('employe', 'Lucas Bernard', 'lucas@demo.fr', '05 56 00 11 22')
  await ensureDemoAccount('utilisateur', 'Claire Martin', 'claire@demo.fr', '06 12 34 56 78')
}

async function ensureDemoAccount(roleName, name, email, phone) {
  const password = process.env.ADMIN_PASSWORD
  const existing = await query('SELECT id FROM users WHERE email = ? LIMIT 1', [email])
  if (existing.length) return

  const roles = await query('SELECT id FROM roles WHERE name = ? LIMIT 1', [roleName])
  if (!roles.length) return
  const passwordHash = await bcrypt.hash(password, 12)
  await query(
    'INSERT INTO users (role_id, name, email, phone, password_hash) VALUES (?, ?, ?, ?, ?)',
    [roles[0].id, name, email, phone, passwordHash]
  )
  console.log(`Compte demo cree: ${email}`)
}
