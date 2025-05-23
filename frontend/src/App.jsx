import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import MenuPage from "./pages/MenuPage.jsx"
import CartPage from "./pages/CartPage.jsx"
import Footer from "./components/Footer.jsx"
import './assets/utils.css'
import './assets/navbar.css'

function App() {
  return (
    <Box display={'flex'} flexDirection={'column'} height={'100%'}>
      <nav className='navbar'>
        <a href="/cart">Cart</a>
        <a href="/menu">Menu</a>
        <a href="/home">Home</a>
      </nav>
      <div className="scrollable-page">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
      {/* Probably going to delete the footer later */}
      {/* <Footer /> */}
    </Box>
  )
}

export default App