import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { connectMongo } from './config/mongodb.js'
import { pool } from './config/mysql.js'
import { ensureInitialAdmin } from './controllers/authController.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import { adminRoutes } from './routes/adminRoutes.js'
import { authRoutes } from './routes/authRoutes.js'
import { contactRoutes } from './routes/contactRoutes.js'
import { menuRoutes } from './routes/menuRoutes.js'
import { orderRoutes } from './routes/orderRoutes.js'
import { reviewRoutes } from './routes/reviewRoutes.js'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 5000)

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET manquant dans les variables d environnement')
}

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'vite-gourmand-api' })
})

app.use('/api/auth', authRoutes)
app.use('/api/menus', menuRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/admin', adminRoutes)

app.use(notFound)
app.use(errorHandler)

async function start() {
  await pool.query('SELECT 1')
  await connectMongo()
  await ensureInitialAdmin()
  app.listen(port, () => console.log(`API Vite & Gourmand: http://localhost:${port}`))
}

start().catch((error) => {
  console.error('Demarrage impossible:', error.message)
  process.exit(1)
})
