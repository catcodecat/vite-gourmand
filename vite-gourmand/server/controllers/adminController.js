import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { query } from '../config/mysql.js'
import { Analytics } from '../models/Analytics.js'
import { Revenue } from '../models/Revenue.js'
import { Statistic } from '../models/Statistic.js'
import { sendSimulatedEmail } from '../services/emailService.js'
import { isEmail, requireFields } from '../utils/validators.js'

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email, phone: user.phone, role: user.role, active: Boolean(user.active) }
}

export async function listUsers(req, res) {
  const rows = await query(
    `SELECT users.id, users.name, users.email, users.phone, users.active, roles.name AS role
     FROM users JOIN roles ON roles.id = users.role_id ORDER BY users.created_at DESC`
  )
  res.json(rows.map(publicUser))
}

export async function createEmployee(req, res) {
  requireFields(req.body, ['name', 'email'])
  if (!isEmail(req.body.email)) return res.status(400).json({ message: 'Email invalide' })
  const password = req.body.password || crypto.randomBytes(9).toString('base64url')
  const roles = await query('SELECT id FROM roles WHERE name = ? LIMIT 1', ['employe'])
  const passwordHash = await bcrypt.hash(password, 12)
  const result = await query(
    'INSERT INTO users (role_id, name, email, phone, password_hash) VALUES (?, ?, ?, ?, ?)',
    [roles[0].id, req.body.name, req.body.email, req.body.phone || '', passwordHash]
  )
  await sendSimulatedEmail('creation-employe', req.body.email, 'Compte employe cree', `Mot de passe temporaire: ${password}`)
  res.status(201).json(publicUser({ id: result.insertId, ...req.body, role: 'employe', active: 1 }))
}

export async function toggleUserStatus(req, res) {
  await query('UPDATE users SET active = NOT active WHERE id = ? AND email <> ?', [req.params.id, process.env.ADMIN_EMAIL || 'admin@vitegourmand.fr'])
  const rows = await query(
    `SELECT users.id, users.name, users.email, users.phone, users.active, roles.name AS role
     FROM users JOIN roles ON roles.id = users.role_id WHERE users.id = ?`,
    [req.params.id]
  )
  res.json(publicUser(rows[0]))
}

export async function analytics(req, res) {
  const [totals] = await query(
    `SELECT COUNT(*) AS ordersCount, COALESCE(SUM(total), 0) AS revenueTotal, COALESCE(SUM(people), 0) AS guests
     FROM orders WHERE status <> 'annulee'`
  )
  const chartRows = await query(
    `SELECT reference AS name, people AS commandes, ROUND(total) AS ca FROM orders ORDER BY created_at DESC LIMIT 12`
  )

  await Statistic.findOneAndUpdate({ label: 'commandes' }, { value: totals.ordersCount, period: 'global' }, { upsert: true })
  await Revenue.findOneAndUpdate({ month: new Date().toISOString().slice(0, 7) }, { amount: Number(totals.revenueTotal) }, { upsert: true })
  await Analytics.findOneAndUpdate({ metric: 'convives' }, { value: totals.guests }, { upsert: true })

  res.json({
    totals: {
      ordersCount: Number(totals.ordersCount),
      revenueTotal: Number(totals.revenueTotal),
      guests: Number(totals.guests)
    },
    chartData: chartRows.map((row) => ({
      name: row.name.replace(/^VG-\d+-/, '#'),
      commandes: Number(row.commandes),
      ca: Number(row.ca)
    }))
  })
}
