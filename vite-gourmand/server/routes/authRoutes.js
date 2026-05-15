import express from 'express'
import { login, me, register, requestPasswordReset } from '../controllers/authController.js'
import { auth } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const authRoutes = express.Router()

authRoutes.post('/register', asyncHandler(register))
authRoutes.post('/login', asyncHandler(login))
authRoutes.get('/me', auth, asyncHandler(me))
authRoutes.post('/forgot-password', asyncHandler(requestPasswordReset))
