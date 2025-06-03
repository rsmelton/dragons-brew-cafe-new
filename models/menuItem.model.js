import mongoose from "mongoose"

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    imageURLString: {
        type: String
    },
}, {
    collection: 'menu', // this forces mongodb to name the collection 'menu'
    timestamps: true
})

const MenuItemModel = mongoose.model("menuItem", menuItemSchema)

export default MenuItemModel