import mongoose from "mongoose"

const cartItemSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        // required: true
    },
}, {
    collection: 'cart' // this forces mongodb to name the collection 'cart'
}, {
    timestamps: true
})

const CartItem = mongoose.model("cartItem", cartItemSchema)

export default CartItem