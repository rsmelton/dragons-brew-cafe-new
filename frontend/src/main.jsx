import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { CartProvider, useCart } from './context/CartContext.jsx'
import HomePage from "./pages/HomePage.jsx"
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import MenuPage from "./pages/MenuPage.jsx"
import CartPage from "./pages/CartPage.jsx"
import './assets/styles.css'

const CartTotalQuantity = () => {
  const {cartTotalQuantity, fetchCartItems} = useCart()

  useEffect(() => { fetchCartItems() }, [])

  return (
    <Box color={'white'}>{cartTotalQuantity}</Box>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <CartProvider>
        <BrowserRouter>
          <Box display={'flex'} flexDirection={'column'}>
            <nav className='navbar'>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/contact">Contact</Link>
              {/* <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/menu">Menu</a>
              <a href="/reviews">Reviews</a>
              <a href="/contact">Contact</a> */}
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <CartTotalQuantity />
                <Link to="/cart">
                  <img className='cart-icon' src={'/images/cart-icon.png'} alt="Cart icon" />
                </Link>
                {/* <a href="/cart">
                  <img className='cart-icon' src={'/images/cart-icon.png'} alt="Cart icon" />
                </a> */}
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
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/reviews' element={<ReviewsPage />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/cart' element={<CartPage />} />
              </Routes>
            </div>
          </Box>
        </BrowserRouter>
      </CartProvider>
    </ChakraProvider>
  </StrictMode>,
)
