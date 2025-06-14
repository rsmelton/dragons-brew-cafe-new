import React, { useEffect, useState } from 'react'
import { useCart } from '../context/AppContext.jsx'
import { Flex, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem.jsx'
import '../assets/styles.css'

const CartPage = () => {

  const {cartItems, menuItems, fetchCartItems, fetchMenuItems, 
         doesMenuItemMatchCartItem, handleDeleteAllCartItems, handleFindTotalPriceOfCart} = useCart()

  useEffect(() => { fetchCartItems() }, [])

  useEffect(() => { fetchMenuItems() }, [])

  return (
    <div>
      {cartItems.length === 0 && (
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'column'}
          gap={'1rem'}
        >
          <Text>Your cart is currently empty</Text>
          <Text textAlign={'center'}>Please click the button below to navigate to the menu to start adding items to your cart.</Text>
          <Link to={'/menu'}><button className='button'>Go to menu</button></Link>
          {/* <Link to={'/menu'}><Button bgColor={'white'} color={'black'}>Go to menu</Button></Link> */}
        </Flex>
      )}

      {/* We can display a loading message when there are items in the cart, 
          and the menuItems has yet to be populated */}
      {cartItems.length > 0 && menuItems.length === 0 && (
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'row'}
        >
          <Text fontSize={'1.5rem'}>Loading cart...</Text>
        </Flex>
      )}

      {/* We are ensuring that we have items in the cart and that the menuItems has items
          to access otherwise we would be accessing something that is undefined */}
      {cartItems.length > 0 && menuItems.length > 0 && (
        <>
          <table className='cart-table'>
            {cartItems.map((cartItem) => {
              const menuItem = menuItems.find((menuItem) => doesMenuItemMatchCartItem(menuItem, cartItem))
              return <CartItem cartItem={cartItem} menuItem={menuItem} />
            })}
            <tr>
              <td className='cart-table-padding-right' colSpan={'7'}>
                <hr />
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'left'}}>Total</td>
              <td className='cart-table-padding-right' style={{textAlign: 'right'}} colSpan={'6'}>${handleFindTotalPriceOfCart(cartItems, menuItems)}</td>
            </tr>
            <tr>
              <td className='cart-table-padding-right' style={{textAlign: 'right'}} colSpan={'7'}>
                <button className='button' onClick={handleDeleteAllCartItems}>Purchase</button>
              </td>
            </tr>
          </table>
        </>
      )}
    </div>
  )
}

export default CartPage