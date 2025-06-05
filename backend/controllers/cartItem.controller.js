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

    // Checks to see if the id has a valid format
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(400).json({ success: false, message: "ID is in an invalid format." })
    }

    try {
        await CartItemModel.findByIdAndUpdate(
            id,
            { $inc: { quantity: 1 }},
            { upsert: true, new: true, setDefaultsOnInsert: true }
        )
        const cartItems = await CartItemModel.find({})
        res.status(201).json({ success: true, data: cartItems })
    } catch (error) {
        console.log("Error with saving cart item to database:", error.message)
        res.status(500).json({ success: false, message: "Cart item did not get added to database." })
    }
}

export const updateCartItemQuantity = async (req, res) => {
    const { id } = req.params
    const { modifyQuantityBy } = req.body

    // Checks to see if the id has a valid format
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(400).json({ success: false, message: "ID is in an invalid format." })
    }

    try {
        // $expr line: adds the quantity field + modifyQuantityBy and then
        // checks to see if that is >= 1. If true then we update the quantity field
        // and save the item. Otherwise we don't update the item. 
        await CartItemModel.findOneAndUpdate(
            {
                _id: id,
                $expr: { $gte: [{ $add: ["$quantity", modifyQuantityBy] }, 1] }
            },
            { $inc: { quantity: modifyQuantityBy } },
            { new: true }
        )

        const cartItems = await CartItemModel.find({})
        res.status(200).json({ success: true, data: cartItems })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Cart item quantity could not be updated." })
    }
}

export const deleteCartItem = async (req, res) => {
    const { id } = req.params

    // Checks to see if the id has a valid format
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(400).json({ success: false, message: "ID is in an invalid format." })
    }

    try {
        await CartItemModel.findByIdAndDelete(id)
        const cartItems = await CartItemModel.find({})
        res.status(201).json({ success: true, data: cartItems })
    } catch (error) {
        console.log("Error when removing item:", error.message)
        res.status(500).json({ success: false, message: "Cart item could not be removed."})
    }
}

export const deleteCartItems = async (req, res) => {
    try {
        await CartItemModel.deleteMany({})
        const cartItems = await CartItemModel.find({})
        res.status(200).json({ success: true, data: cartItems })
    } catch (error) {
        console.log(`Error: ${error}`)
        res.status(500).json({ success: false, message: "Was not able to delete all cart items" })
    }
}