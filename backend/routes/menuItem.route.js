import express from 'express'
import { getMenuItems } from '../controllers/menuItem.controller.js'

const router = express.Router()

router.get("/", getMenuItems)

export default router