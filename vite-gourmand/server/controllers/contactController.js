import { query } from '../config/mysql.js'
import { sendSimulatedEmail } from '../services/emailService.js'
import { isEmail, requireFields } from '../utils/validators.js'

export async function createContactMessage(req, res) {
  requireFields(req.body, ['title', 'email', 'message'])
  if (!isEmail(req.body.email)) return res.status(400).json({ message: 'Email invalide' })
  const result = await query(
    'INSERT INTO contact_messages (title, email, message) VALUES (?, ?, ?)',
    [req.body.title, req.body.email, req.body.message]
  )
  await sendSimulatedEmail('contact', req.body.email, 'Reception de votre demande', 'Votre message a bien ete recu.')
  res.status(201).json({ id: result.insertId, message: 'Message envoye' })
}
