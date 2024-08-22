import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import MenuPage from "./pages/MenuPage.jsx"
import CartPage from "./pages/CartPage.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <Box minH={"100vh"} bgColor={'#645547'}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App