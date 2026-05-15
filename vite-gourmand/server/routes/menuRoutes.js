import express from 'express'
import { createMenu, deleteMenu, getMenu, listMenus, updateMenu } from '../controllers/menuController.js'
import { auth, roles } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const menuRoutes = express.Router()

menuRoutes.get('/', asyncHandler(listMenus))
menuRoutes.get('/:id', asyncHandler(getMenu))
menuRoutes.post('/', auth, roles('employe', 'administrateur'), asyncHandler(createMenu))
menuRoutes.put('/:id', auth, roles('employe', 'administrateur'), asyncHandler(updateMenu))
menuRoutes.delete('/:id', auth, roles('employe', 'administrateur'), asyncHandler(deleteMenu))
