import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { AppProvider, useCart } from './context/AppContext.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
// import ContactPage from './pages/ContactPage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import CartPage from './pages/CartPage.jsx'
import theme from './theme/theme.js'
import './assets/styles.css'

const CartTotalQuantity = () => {
  const {cartTotalQuantity, fetchCartItems} = useCart()

  useEffect(() => { fetchCartItems() }, [])

  return (
    <div>{cartTotalQuantity}</div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <AppProvider>
        <BrowserRouter>
          <Flex flexDirection={'column'}>
            <nav className='navbar'>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/reviews">Reviews</Link>
              {/* <Link to="/contact">Contact</Link> */}
              <Flex flexDirection={'row'} alignItems={'center'}>
                <Link to="/cart">
                  <img className='navbar-cart-icon' src={'/images/cart-icon.png'} alt="Cart icon" />
                </Link>
                <CartTotalQuantity />
              </Flex>
            </nav>
            <div className="scrollable-page">
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                {/* <Route path='/contact' element={<ContactPage />} /> */}
                <Route path='/reviews' element={<ReviewsPage />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/cart' element={<CartPage />} />
              </Routes>
            </div>
          </Flex>
        </BrowserRouter>
      </AppProvider>
    </ChakraProvider>
  </StrictMode>,
)
