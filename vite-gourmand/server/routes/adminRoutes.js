import express from 'express'
import { analytics, createEmployee, listUsers, toggleUserStatus } from '../controllers/adminController.js'
import { auth, roles } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const adminRoutes = express.Router()

adminRoutes.use(auth, roles('administrateur'))
adminRoutes.get('/users', asyncHandler(listUsers))
adminRoutes.post('/employees', asyncHandler(createEmployee))
adminRoutes.patch('/users/:id/toggle-status', asyncHandler(toggleUserStatus))
adminRoutes.get('/analytics', asyncHandler(analytics))
