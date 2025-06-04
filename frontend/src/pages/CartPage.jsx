import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { Flex, Grid, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem.jsx'
import '../assets/styles.css'

const CartPage = () => {

  const {cartItems, menuItems, fetchCartItems, 
         fetchMenuItems, handleDeleteAllCartItems, getCartItemID, 
         getCartItemQuantity, getMenuItemName, getMenuItemPrice} = useCart()
         
  const [menuItemMap, setMenuItemMap] = useState({})

  useEffect(() => { fetchCartItems() }, [])

  useEffect(() => { fetchMenuItems() }, [])

  useEffect(() => {
    // This ensures we don't access the menuItems array before its populated
    if (menuItems.length === 0) return

    // Here we are converting our menuItems array to a Map so we can have constant lookup time
    // instead of mapping over the cartItems and then having to find the menuItem every time
    // using the cartItem._id
    const menuMap = Object.fromEntries(menuItems.map(menuItem => [menuItem._id, menuItem]))
    setMenuItemMap(menuMap)
  }, [menuItems])

  const handleFindTotalPrice = (cartItems) => {
    let totalPrice = 0

    cartItems.map((cartItem) => {
      const cartItemQuantity = getCartItemQuantity(cartItem)
      const menuItem = menuItemMap[getCartItemID(cartItem)]
      const menuItemPrice = getMenuItemPrice(menuItem)
      totalPrice += menuItemPrice * cartItemQuantity
    })

    return totalPrice.toFixed(2)
  }

  return (
    <div>
      {/* <Text 
        fontSize={'1.5rem'} 
        bgClip={'text'}
      >
        Cart
      </Text> */}

      {cartItems.length === 0 && (
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'column'}
          gap={'1rem'}
        >
          <Text>Your cart is currently empty</Text>
          <Text textAlign={'center'}>Please click the button below to navigate to the menu to start adding items to your cart.</Text>
          <Link to={'/menu'}><Button bgColor={'white'} color={'black'}>Go to menu</Button></Link>
        </Flex>
      )}

      {/* We can display a loading message when there are items in the cart, 
          the menuItem map has yet to be populated */}
      {cartItems.length > 0 && Object.keys(menuItemMap).length === 0 && (
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'row'}
        >
          <Text fontSize={'1.5rem'}>Loading cart...</Text>
        </Flex>
      )}

      {/* We are ensuring that we have items in the cart and that the menuItemMap has items
          to access otherwise we would be accessing something that is undefined */}
      {cartItems.length > 0 && Object.keys(menuItemMap).length !== 0 && (
        <>
          {/* Grid implementation */}
          {/* <Grid
            templateColumns={{base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}}
            templateRows={'1fr'}
            backgroundColor={'rgba(0, 0, 0, 0.45)'}
          >
            {cartItems.map((cartItem) => {
                const menuItem = menuItemMap[getCartItemID(cartItem)]
                return <CartItem cartItemID={getCartItemID(cartItem)}
                                 cartItemQuantity={getCartItemQuantity(cartItem)} 
                                 menuItemName={getMenuItemName(menuItem)} 
                                 menuItemPrice={getMenuItemPrice(menuItem)} />
            })}
          </Grid> */}
          {/* Table implementation */}
          <table className='cart-table'>
            {cartItems.map((cartItem) => {
              const menuItem = menuItemMap[getCartItemID(cartItem)]
              return <CartItem cartItemID={getCartItemID(cartItem)}
                               cartItemQuantity={getCartItemQuantity(cartItem)} 
                               menuItemName={getMenuItemName(menuItem)} 
                               menuItemPrice={getMenuItemPrice(menuItem)} />
            })}
          </table>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
            gap={'1rem'}
          >
            <Text textAlign={'center'}>Your total is ${handleFindTotalPrice(cartItems)}. Click below to purchase.</Text>
            <Button bgColor={'white'} color={'black'} onClick={handleDeleteAllCartItems}>Purchase</Button>
          </Flex>
        </>
      )}
    </div>
  )
}

export default CartPage