import mongoose from "mongoose"
import Item from "../models/item.model.js"

export async function getItems(req, res) {
    console.log("Cart GET API entered")
    try {
        // this grabs all Item objects from the database
        const items = await Item.find({})

        // **** newly added code ****
        // if (items === null) res.status(204).json({ success: true, data: items})

        res.status(200).json({ success: true, data: items })
    } catch (error) {
        console.log("Error in fetching cart items:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

// app.get("/api/cart", async (req, res) => {
//     console.log("Cart GET API entered")
//     try {
//         // this grabs all Item objects from the database
//         const items = await Item.find({})

//         // **** newly added code ****
//         // if (items === null) res.status(204).json({ success: true, data: items})

//         res.status(200).json({ success: true, data: items })
//     } catch (error) {
//         console.log("Error in fetching cart items:", error.message)
//         res.status(500).json({ success: false, message: "Server Error" })
//     }
// })

// module.exports = app