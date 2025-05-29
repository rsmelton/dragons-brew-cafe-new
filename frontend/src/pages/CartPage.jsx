import React, { useEffect } from 'react'
import { Flex, Text, Table, Thead, Tbody, Tr, Th, TableContainer, Button, useToast } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useCartItemStore } from '../store/cartItem.store.js'
import CartItem from '../components/CartItem.jsx'
import '../assets/styles.css'

const CartPage = () => {

  const { cartItems, fetchCartItems, deleteCartItems } = useCartItemStore()

  useEffect(() => { fetchCartItems() }, [cartItems])

  const toast = useToast()

  const handleFindTotalPrice = (cartItems) => {
    let totalPrice = 0

    cartItems.map((cartItem) => {
      totalPrice += cartItem.price
    })

    return totalPrice.toFixed(2)
  }

  const handleDeleteAllCartItems = async () => {
    // delete all items from database to show that the user "purchased" their items
    const {success, message} = await deleteCartItems()

    if (success === false) {
      toast({
        title: "Error",
        description: "Failed to purchase",
        status: "error",
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      })
    }
  }

  return (
    <div>
      <Text 
        // paddingTop={'2rem'}
        // paddingBottom={'2rem'}
        fontSize={'1.5rem'} 
        bgClip={'text'}
        color={'white'}
      >
        Cart
      </Text>

      {cartItems.length > 0 && (
        <>
          <table className='cart-table'>
            {cartItems.map((cartItem, index) => {
              return <CartItem key={cartItem._id} cartItem={cartItem} />
            })}
          </table>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
            gap={'1rem'}
          >
            <Text color={'white'} fontSize={{base: '1rem', md: '1.25rem'}}>Your total is ${handleFindTotalPrice(cartItems)}. Click below to purchase.</Text>
            <Button bgColor={'white'} color={'black'} onClick={handleDeleteAllCartItems}>Purchase</Button>
          </Flex>
        </>
      )}

      {cartItems.length === 0 && (
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'column'}
          gap={'1rem'}
        >
          <Text color={'white'}>Your cart is currently empty</Text>
          <Text color={'white'} textAlign={'center'}>Please click the button below to navigate to the menu to start adding items to your cart.</Text>
          <Link to={'/menu'}><Button bgColor={'white'} color={'black'}>Go to menu</Button></Link>
        </Flex>
      )}
    </div>
  )
}

export default CartPage