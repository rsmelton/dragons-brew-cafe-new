import express from 'express';
import { getCartItems, postCartItem, updateCartItemQuantity, deleteCartItem, deleteCartItems } from '../controllers/cartItem.controller.js';

const router = express.Router();

router.get("/", getCartItems);
router.post("/:id", postCartItem);
router.patch("/:id", updateCartItemQuantity);
router.delete("/:id", deleteCartItem);
router.delete("/", deleteCartItems);

export default router;