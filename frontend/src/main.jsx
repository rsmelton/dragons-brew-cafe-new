import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import MenuPage from "./pages/MenuPage.jsx"
import CartPage from "./pages/CartPage.jsx"
import './assets/styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Box display={'flex'} flexDirection={'column'}>
          <nav className='navbar'>
            <a href="/cart">Cart</a>
            <a href="/menu">Menu</a>
            <a href="/home">Home</a>
          </nav>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'}>
            <div className='page-title'>
              Dragon's Brew Cafe
            </div>
          </Box>
          <div className="scrollable-page">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/menu' element={<MenuPage />} />
              <Route path='/cart' element={<CartPage />} />
            </Routes>
          </div>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
