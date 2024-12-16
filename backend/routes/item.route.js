import express from 'express'
import { getItems, postItem, deleteItem, deleteItems } from '../controllers/item.controller.js'

const router = express.Router()

router.get("/", getItems)
router.post("/api/cart", postItem)
router.delete("/:id", deleteItem)
router.delete("/", deleteItems)

export default router