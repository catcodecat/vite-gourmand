import { query } from '../config/mysql.js'
import { sendSimulatedEmail } from '../services/emailService.js'
import { requireFields } from '../utils/validators.js'

function toFrontReview(review) {
  return {
    id: review.id,
    author: review.author,
    rating: review.rating,
    event: review.event_type,
    validated: review.status === 'valide',
    content: review.content
  }
}

export async function listReviews(req, res) {
  const includeAll = req.user && ['employe', 'administrateur'].includes(req.user.role)
  const rows = await query(`SELECT * FROM reviews ${includeAll ? '' : "WHERE status = 'valide'"} ORDER BY created_at DESC`)
  res.json(rows.map(toFrontReview))
}

export async function createReview(req, res) {
  requireFields(req.body, ['author', 'rating', 'event', 'content'])
  const result = await query(
    'INSERT INTO reviews (user_id, author, rating, event_type, content, status) VALUES (?, ?, ?, ?, ?, ?)',
    [req.user?.id || null, req.body.author, Number(req.body.rating), req.body.event, req.body.content, 'en attente']
  )
  res.status(201).json(toFrontReview({ id: result.insertId, ...req.body, event_type: req.body.event, status: 'en attente' }))
}

export async function updateReviewStatus(req, res) {
  const status = req.body.validated ? 'valide' : 'refuse'
  await query('UPDATE reviews SET status = ?, moderated_by = ? WHERE id = ?', [status, req.user.id, req.params.id])
  res.json({ message: `Avis ${status}` })
}

export async function requestReviewEmail(req, res) {
  requireFields(req.body, ['email'])
  await sendSimulatedEmail('demande-avis', req.body.email, 'Votre avis compte', 'Merci de partager votre experience Vite & Gourmand.')
  res.json({ message: 'Email de demande avis simule' })
}
