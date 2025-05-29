import React from 'react'
import { Tr, Td, useToast, IconButton } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useCartItemStore } from '../store/cartItem.store.js'
// import AddOrRemoveCartItemClicker from './AddOrRemoveCartItemClicker'
import '../assets/styles.css'

const CartItem = ({ cartItem }) => {

    const { deleteCartItem } = useCartItemStore() 
    const toast = useToast()

    const handleDeleteCartItem = async (cartItemId) => {
        const { success, message } = await deleteCartItem(cartItemId)
    
        if (success === false) {
          toast({
            title: "Error",
            description: message,
            status: "error",
            isClosable: true
          })
        } else {
          toast({
            title: "Success",
            description: "Item removed from cart successfully!",
            status: "success",
            isClosable: true
          })
        }
      }

    return (
      <tr>
        <td>{cartItem.name}</td>
        <td>${cartItem.price}</td>
        <td>
          {/* <AddOrRemoveCartItemClicker key={item._id} item={item} /> */}
          <img className='trashcan-icon' src={'/images/trashcan-icon.png'} alt="trashcan icon" onClick={() => handleDeleteCartItem(cartItem._id)} />
        </td>
      </tr>
    )
}

export default CartItem