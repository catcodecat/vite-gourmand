import express from 'express'
import { createContactMessage } from '../controllers/contactController.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const contactRoutes = express.Router()

contactRoutes.post('/', asyncHandler(createContactMessage))
