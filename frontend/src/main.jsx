import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import { useItemStore } from './store/item.store.js'
import HomePage from "./pages/HomePage.jsx"
import ContactPage from './pages/ContactPage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import MenuPage from "./pages/MenuPage.jsx"
import CartPage from "./pages/CartPage.jsx"
import cartIcon from './images/cart-icon.png'
import './assets/styles.css'


const CartItemCount = () => {

  const { items } = useItemStore()

  return (
    <Box color={'white'}>{items.length}</Box>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Box display={'flex'} flexDirection={'column'}>
          <nav className='navbar'>
            <a href="/home">Home</a>
            <a href="/contact">Contact</a>
            <a href="/reviews">Reviews</a>
            <a href="/menu">Menu</a>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <CartItemCount />
              <a href="/cart">
                <img className='cart-icon' src={cartIcon} alt="Cart icon" />
              </a>
            </Box>
          </nav>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'}>
            <div className='page-title bold'>
              Dragon's Brew Cafe
            </div>
          </Box>
          <div className="scrollable-page">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/reviews' element={<ReviewsPage />} />
              <Route path='/menu' element={<MenuPage />} />
              <Route path='/cart' element={<CartPage />} />
            </Routes>
          </div>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
