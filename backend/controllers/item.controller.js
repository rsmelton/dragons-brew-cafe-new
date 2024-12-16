import mongoose from "mongoose"
import Item from "../../models/item.model.js"

// this function runs when the frontend calls fetch using an API
// with the endpoint of the server and when the fetch request is a 
// GET request, GET requests are default and don't need to be specified.
export const getItems = async (req, res) => {
    try {
        // this grabs all Item objects from the database
        const items = await Item.find({})

        // **** newly added code ****
        if (items === null) res.status(204).json({ success: true, data: items})

        res.status(200).json({ success: true, data: items })
    } catch (error) {
        console.log("Error in fetching cart items:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

// this function runs when the frontend calls fetch using an API
// with the endpoint of the server and with a POST method request
export const postItem = async (req, res) => {
    // this comes from the body of the request in the frontend(store file)
    const item = req.body
    console.log(`Item that was requested to add to DB from frontend: ${item}`)

    // creating the new item using the Item model.
    const newItem = new Item(item)
    console.log(`New Item that was requested to add to DB from frontend: ${newItem}`)

    try {
        // saving new item to the database
        await newItem.save()
        res.status(201).json({ success: true, data: newItem })
    } catch (error) {
        console.log("Error with saving item to database:", error.message)
        res.status(500).json({ success: false, message: "Item did not get added to database."})
    }
}

// this function runs when the frontend calls fetch using an API
// with the endpoint of the server and when the fetch request is a 
// DELETE method request.
export const deleteItem = async (req, res) => {
    // this is destructuring the id from the requests params list
    const { id } = req.params

    // if the id doesn't exist or is not in the database
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(404).json({ success: false, message: "Item not found."})
    }

    try {
        // here we are waiting until we remove the item from the DB
        await Item.findByIdAndDelete(id)
        res.status(201).json({ success: true, message: "Item removed successfully."})
    } catch (error) {
        console.log("Error when removing item:", error.message)
        res.status(500).json({ success: false, message: "Item could not be removed."})
    }
}

export const deleteItems = async (req, res) => {
    try {
        const items = await Item.deleteMany({})
        res.status(200).json({ success: true, data: items })
    } catch (error) {
        console.log(`Error: ${error}`)
        res.status(500).json({ success: false, message: "Was not able to delete all items" })
    }
}