import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider, useCart } from './context/AppContext.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import CartPage from './pages/CartPage.jsx';
import theme from './theme/theme.js';
import './assets/styles.css';

const CartTotalQuantity = () => {
  const {cartTotalQuantity, fetchCartItems} = useCart();

  useEffect(() => { fetchCartItems() }, []);

  return ( <div>{cartTotalQuantity}</div> );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <AppProvider>
        <BrowserRouter>
          <div className='app-container'>
            <nav className='navbar'>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/menu">Menu</Link>
              {/* <Link to="/blog">Blog</Link> */}
              <div className='navbar-cart-icon-and-quantity-container'>
                <Link to="/cart">
                  <img className='navbar-cart-icon' src={'/images/cart-icon.png'} alt="Cart icon" />
                </Link>
                <CartTotalQuantity />
              </div>
            </nav>
            <div className="scrollable-page">
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                {/* <Route path='/blog' element={<BlogPage />} /> */}
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/cart' element={<CartPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </AppProvider>
    </ChakraProvider>
  </StrictMode>,
);