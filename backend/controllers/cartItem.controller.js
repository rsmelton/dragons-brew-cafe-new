import mongoose from "mongoose"
import CartItem from "../../models/cartItem.model.js"

// this function runs when the frontend calls fetch using an API
// with the endpoint of the server and when the fetch request is a 
// GET request, GET requests are default and don't need to be specified.
export const getCartItems = async (req, res) => {
    try {
        // this grabs all CartItem objects from the database
        const cartItems = await CartItem.find({})

        // **** newly added code ****
        // if (items === null) res.status(204).json({ success: true, data: items})

        res.status(200).json({ success: true, data: cartItems })
    } catch (error) {
        console.log("Error in fetching cart items:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

// this function runs when the frontend calls fetch using an API
// with the endpoint of the server and with a POST method request
export const postCartItem = async (req, res) => {
    // this comes from the body of the request in the frontend(store file)
    const cartItem = req.body
    
    // console.log(`Item that was requested to add to DB from frontend: ${item}`)

    // creating the new item using the Item model.
    const newCartItem = new CartItem(cartItem)
    console.log(`New Item that was requested to add to DB from frontend: ${newCartItem}`)
    // console.log(`New items type: ${typeof(newItem)}`);

    // console.log(`Before try block`)
    try {
        // saving new item to the database
        // console.log(`Inside try block`)
        await newCartItem.save()
        res.status(201).json({ success: true, data: newCartItem })
    } catch (error) {
        console.log("Error with saving cart item to database:", error.message)
        res.status(500).json({ success: false, message: "Cart item did not get added to database."})
    }
    // console.log(`After try catch block`)
}

// this function runs when the frontend calls fetch using an API
// with the endpoint of the server and when the fetch request is a 
// DELETE method request.
export const deleteCartItem = async (req, res) => {
    // this is destructuring the id from the requests params list
    const { id } = req.params

    // if the id doesn't exist or is not in the database
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(404).json({ success: false, message: "Cart item not found."})
    }

    try {
        // here we are waiting until we remove the item from the DB
        await CartItem.findByIdAndDelete(id)
        res.status(201).json({ success: true, message: "Cart item removed successfully."})
    } catch (error) {
        console.log("Error when removing item:", error.message)
        res.status(500).json({ success: false, message: "Cart item could not be removed."})
    }
}

export const deleteCartItems = async (req, res) => {
    try {
        const cartItems = await CartItem.deleteMany({})
        res.status(200).json({ success: true, data: cartItems })
    } catch (error) {
        console.log(`Error: ${error}`)
        res.status(500).json({ success: false, message: "Was not able to delete all cart items" })
    }
}