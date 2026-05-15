import { query } from '../config/mysql.js'
import { calculateOrder, FRONT_STEPS, ORDER_STATUSES } from '../services/orderService.js'
import { sendSimulatedEmail } from '../services/emailService.js'
import { requireFields } from '../utils/validators.js'

function toFrontOrder(row) {
  return {
    id: row.reference,
    customer: row.customer_name,
    menuId: row.menu_slug,
    menuTitle: row.menu_title,
    date: row.event_date,
    time: String(row.event_time).slice(0, 5),
    people: row.people,
    total: Number(row.total),
    status: row.status,
    steps: FRONT_STEPS
  }
}

async function fetchOrders(where = '', params = []) {
  const rows = await query(
    `SELECT orders.*, menus.slug AS menu_slug, menus.title AS menu_title
     FROM orders JOIN menus ON menus.id = orders.menu_id
     ${where}
     ORDER BY orders.created_at DESC`,
    params
  )
  return rows.map(toFrontOrder)
}

export async function listOrders(req, res) {
  const filters = []
  const params = []
  if (req.user.role === 'utilisateur') {
    filters.push('orders.user_id = ?')
    params.push(req.user.id)
  }
  if (req.query.status) {
    filters.push('orders.status = ?')
    params.push(req.query.status)
  }
  const where = filters.length ? `WHERE ${filters.join(' AND ')}` : ''
  res.json(await fetchOrders(where, params))
}

export async function createOrder(req, res) {
  requireFields(req.body, ['menuId', 'name', 'email', 'address', 'date', 'time', 'people'])
  const menus = await query('SELECT * FROM menus WHERE slug = ? LIMIT 1', [req.body.menuId])
  if (!menus.length) return res.status(404).json({ message: 'Menu introuvable' })
  if (Number(req.body.people) < Number(menus[0].min_people)) {
    return res.status(400).json({ message: `Minimum ${menus[0].min_people} personnes pour ce menu` })
  }

  const pricing = calculateOrder(menus[0], req.body.people)
  const reference = `VG-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`
  const result = await query(
    `INSERT INTO orders
     (reference, user_id, menu_id, customer_name, customer_email, delivery_address, event_date, event_time, people, subtotal, delivery_fee, discount, total, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      reference,
      req.user?.id || null,
      menus[0].id,
      req.body.name,
      req.body.email,
      req.body.address,
      req.body.date,
      req.body.time,
      pricing.people,
      pricing.subtotal,
      pricing.delivery,
      pricing.discount,
      pricing.total,
      'en attente'
    ]
  )
  await query('INSERT INTO order_status_history (order_id, status, changed_by) VALUES (?, ?, ?)', [result.insertId, 'en attente', req.user?.id || null])
  await sendSimulatedEmail('confirmation-commande', req.body.email, 'Confirmation de commande', `Votre commande ${reference} est en attente.`)
  res.status(201).json((await fetchOrders('WHERE orders.id = ?', [result.insertId]))[0])
}

export async function updateOrder(req, res) {
  const orders = await query('SELECT * FROM orders WHERE reference = ? LIMIT 1', [req.params.reference])
  if (!orders.length) return res.status(404).json({ message: 'Commande introuvable' })
  if (req.body.status && !ORDER_STATUSES.includes(req.body.status)) return res.status(400).json({ message: 'Statut invalide' })

  await query(
    `UPDATE orders SET event_date = COALESCE(?, event_date), event_time = COALESCE(?, event_time),
     people = COALESCE(?, people), status = COALESCE(?, status) WHERE reference = ?`,
    [req.body.date || null, req.body.time || null, req.body.people || null, req.body.status || null, req.params.reference]
  )
  if (req.body.status) {
    await query('INSERT INTO order_status_history (order_id, status, changed_by) VALUES (?, ?, ?)', [orders[0].id, req.body.status, req.user.id])
    if (req.body.status === 'en attente du retour de materiel') {
      await sendSimulatedEmail('retour-materiel', orders[0].customer_email, 'Retour du materiel', `La commande ${orders[0].reference} attend le retour du materiel.`)
    }
  }
  res.json((await fetchOrders('WHERE orders.reference = ?', [req.params.reference]))[0])
}

export async function cancelOrder(req, res) {
  req.body.status = 'annulee'
  return updateOrder(req, res)
}
