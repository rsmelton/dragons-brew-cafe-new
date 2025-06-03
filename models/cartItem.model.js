import mongoose from "mongoose"

const cartItemSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    quantity: {
        type: Number,
    },
}, {
    collection: 'cart', // this forces mongodb to name the collection 'cart'
    timestamps: true
})

const CartItemModel = mongoose.model("cartItem", cartItemSchema)

export default CartItemModel