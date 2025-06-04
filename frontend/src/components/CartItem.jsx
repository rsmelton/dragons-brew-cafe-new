import React from 'react'
import { useCart } from '../context/CartContext.jsx'
import { Flex, Text } from '@chakra-ui/react'
import '../assets/styles.css'

const CartItem = ({ cartItemID, cartItemQuantity, menuItemName, menuItemPrice }) => {

  const {handleDeleteCartItem, handleModifyCartItemQuantity} = useCart()

  return (
    // Grid implementation
    // <Flex
    //   flexDirection={'column'}
    //   gap={'0.25rem'}
    //   paddingTop={'2rem'}
    //   paddingBottom={'2rem'}
    // >
    //   <Flex
    //     flexDirection={'row'}
    //     justifyContent={'center'}
    //     alignItems={'center'}
    //     gap={'1rem'}
    //     fontSize={{ base: '1.25rem', sm: '1.5rem' }}
    //   >
    //     <Text>{menuItemName}</Text>
    //     <Text>${menuItemPrice}</Text>
    //   </Flex>
    //   <Flex
    //     flexDirection={'row'}
    //     justifyContent={'center'}
    //     alignItems={'center'}
    //   >
    //     <div className='cart-item-clicker-container'>
    //       {/* Here we are decrementing the quantitiy of the cart item */}
    //       {(cartItemQuantity > 1) && (
    //         <img className='cart-minus-icon' src={'/images/minus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItemID, -1)} alt="Minus Icon" />
    //       )}
    //       {/* Here we are removing the cartItem all together */}
    //       {cartItemQuantity === 1 && (
    //         <img className='trashcan-icon' src={'/images/trashcan-icon.png'} onClick={() => handleDeleteCartItem(cartItemID)} alt="Trashcan Icon" />
    //       )}
    //       <div className='cart-item-quantity'>{cartItemQuantity}</div>
    //       {/* Here we are incrementing the quantitiy of the cart item */}
    //         <img className='cart-plus-icon' src={'/images/plus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItemID, 1)} alt="Plus Icon" />
    //     </div>
    //   </Flex>
    // </Flex>
    // Table implementation
    <tr>
      <td>
        <div className='cart-item-clicker-container'>
          {/* Here we are decrementing the quantitiy of the cart item */}
          {cartItemQuantity > 1 && (
            <img className='cart-minus-icon' src={'/images/minus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItemID, -1)} alt="Minus Icon" />
          )}
          {/* Here we are removing the cartItem all together */}
          {cartItemQuantity === 1 && (
            <img className='trashcan-icon' src={'/images/trashcan-icon.png'} onClick={() => handleDeleteCartItem(cartItemID)} alt="Trashcan Icon" />
          )}
          <div>{cartItemQuantity}</div>
          {/* Here we are incrementing the quantitiy of the cart item */}
          <img className='cart-plus-icon' src={'/images/plus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItemID, 1)} alt="Plus Icon" />
        </div>
      </td>
      <td>{menuItemName}</td>
      <td style={{textAlign: 'right'}}>${menuItemPrice.toFixed(2)}</td>
      <td style={{textAlign: 'right'}}>x</td>
      <td style={{textAlign: 'right'}}>{cartItemQuantity}</td>
      <td style={{textAlign: 'right'}}>=</td>
      <td style={{textAlign: 'right'}}>${(menuItemPrice * cartItemQuantity).toFixed(2)}</td>
      {/* <td>${menuItemPrice.toFixed(2)} x {cartItemQuantity} = ${(menuItemPrice * cartItemQuantity).toFixed(2)}</td> */}
    </tr>
  )
}

export default CartItem