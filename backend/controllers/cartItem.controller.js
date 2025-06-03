import mongoose from "mongoose"
import CartItemModel from "../../models/cartItem.model.js"

export const getCartItems = async (req, res) => {
    try {
        // this grabs all CartItem objects from the database
        const cartItems = await CartItemModel.find({})
        res.status(200).json({ success: true, data: cartItems })
    } catch (error) {
        console.log("Error in fetching cart items:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

export const postCartItem = async (req, res) => {
   const { id } = req.params

    try {
        const cartItem = await CartItemModel.findById(id)
    
        if (cartItem) {
            cartItem.quantity += 1
            await cartItem.save()
            return res.status(200).json({ success: true, data: cartItem })
        }

        // If the cartItem didn't exist
        const newCartItem = new CartItemModel({
            _id: id,
            quantity: 1
        })
        await newCartItem.save()
        res.status(201).json({ success: true, data: newCartItem })
    } catch (error) {
        console.log("Error with saving cart item to database:", error.message)
        res.status(500).json({ success: false, message: "Cart item did not get added to database."})
    }
}

export const updateCartItemQuantity = async (req, res) => {
    const { id } = req.params
    const { modifyQuantityBy } = req.body

    // if the id doesn't exist or is not in the database
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(404).json({ success: false, message: "Cart item not found."})
    }

    try {
        const updatedCartItem = await CartItemModel.findByIdAndUpdate(
            id,
            { $inc: { quantity: modifyQuantityBy } }, // updates quantity field
            { new: true } // returns newly modified cart item
        )

        // This means we could not find the cart item by its id
        if (!updatedCartItem) {
            return res.status(404).json({ success: false, message: "Cart item not found!" })
        }

        res.status(200).json({ success: true, message: "Updated cart item quantity successfully." })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Cart item quantity could not be updated." })
    }
}

export const deleteCartItem = async (req, res) => {
    const { id } = req.params

    // if the id doesn't exist or is not in the database
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(404).json({ success: false, message: "Cart item not found."})
    }

    try {
        await CartItemModel.findByIdAndDelete(id)
        res.status(201).json({ success: true, message: "Cart item removed successfully."})
    } catch (error) {
        console.log("Error when removing item:", error.message)
        res.status(500).json({ success: false, message: "Cart item could not be removed."})
    }
}

export const deleteCartItems = async (req, res) => {
    try {
        await CartItemModel.deleteMany({})
        res.status(200).json({ success: true, data: [] })
    } catch (error) {
        console.log(`Error: ${error}`)
        res.status(500).json({ success: false, message: "Was not able to delete all cart items" })
    }
}