import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import MenuPage from "./pages/MenuPage.jsx"
import CartPage from "./pages/CartPage.jsx"
import Footer from "./components/Footer.jsx"
import './assets/utils.css'

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      {/* <Footer /> */}
    </Box>
  )
}

export default App