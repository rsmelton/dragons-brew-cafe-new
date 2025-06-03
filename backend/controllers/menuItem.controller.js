import mongoose from "mongoose";
import MenuItemModel from "../../models/menuItem.model.js";

export const getMenuItems = async (req, res) => {
    try {
        // this grabs all MenuItem objects from the database
        const menuItems = await MenuItemModel.find({})

        res.status(200).json({ success: true, data: menuItems })
    } catch (error) {
        console.log("Error in fetching menu items:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}