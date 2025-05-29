import express from 'express'
import { getCartItems, postCartItem, deleteCartItem, deleteCartItems } from '../controllers/cartItem.controller.js'

const router = express.Router()

router.get("/", getCartItems)
router.post("/", postCartItem)
router.delete("/:id", deleteCartItem)
router.delete("/", deleteCartItems)

export default router