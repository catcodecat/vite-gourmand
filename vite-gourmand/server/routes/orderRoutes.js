import express from 'express'
import { cancelOrder, createOrder, listOrders, updateOrder } from '../controllers/orderController.js'
import { auth, roles } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const orderRoutes = express.Router()

orderRoutes.get('/', auth, asyncHandler(listOrders))
orderRoutes.post('/', auth, asyncHandler(createOrder))
orderRoutes.put('/:reference', auth, asyncHandler(updateOrder))
orderRoutes.patch('/:reference/cancel', auth, asyncHandler(cancelOrder))
orderRoutes.patch('/:reference/status', auth, roles('employe', 'administrateur'), asyncHandler(updateOrder))
