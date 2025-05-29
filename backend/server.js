import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { connectDB } from './config/db.js'
import cartItemRoutes from './routes/cartItem.route.js'
import menuItemRoutes from './routes/menuItem.route.js'

// This allows us to use process.env.{variable name} to read from the .env file
dotenv.config()
 
const app = express() 
const PORT = process.env.PORT || 5001

const __dirname = path.resolve()

app.use(express.json())

// This is where the frontend and backend meet
// Middleware for APIs
app.use("/api/cart", cartItemRoutes)
app.use("/api/menu", menuItemRoutes)

// if we are in production build, go to the correct directory
// and then send the file we want for the frontend
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend", "dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    connectDB()
    console.log(`server started at http://localhost:${PORT}`)
})