import express from "express"
import mongoose from "mongoose"
import Item from "../models/item.model"

const app = express();

app.get("/api/cart.js", async (req, res) => {
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
});

app.post("/api/cart.js", (req, res) => {
    
});

app.delete("/api/cart.js/:id", (req, res) => {
    
});

app.delete("/api/cart.js", (req, res) => {
    
});