import express from 'express'
import { createReview, listReviews, requestReviewEmail, updateReviewStatus } from '../controllers/reviewController.js'
import { auth, optionalAuth, roles } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const reviewRoutes = express.Router()

reviewRoutes.get('/', optionalAuth, asyncHandler(listReviews))
reviewRoutes.post('/', auth, asyncHandler(createReview))
reviewRoutes.patch('/:id/status', auth, roles('employe', 'administrateur'), asyncHandler(updateReviewStatus))
reviewRoutes.post('/request-email', auth, roles('employe', 'administrateur'), asyncHandler(requestReviewEmail))
