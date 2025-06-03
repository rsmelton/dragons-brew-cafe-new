import React from 'react'
import { useCart } from '../context/CartContext.jsx'
import '../assets/styles.css'

const CartItem = ({ cartItemID, cartItemQuantity, menuItemName, menuItemPrice }) => {

  const {handleDeleteCartItem, handleModifyCartItemQuantity} = useCart()

  return (
    <tr>
      <td>{menuItemName}</td>
      <td>${menuItemPrice}</td>
      <td>
        <div className='cart-item-clicker-container'>
          {/* Here we are decrementing the quantitiy of the cart item */}
          {(cartItemQuantity > 1) && (
            <img className='cart-minus-icon' src={'/images/minus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItemID, -1)} alt="Minus Icon" />
          )}
          {/* Here we are removing the cartItem all together */}
          {cartItemQuantity === 1 && (
            <img className='trashcan-icon' src={'/images/trashcan-icon.png'} onClick={() => handleDeleteCartItem(cartItemID)} alt="Trashcan Icon" />
          )}
          <div className='cart-item-count'>{cartItemQuantity}</div>
          {/* Here we are incrementing the quantitiy of the cart item */}
          <img className='cart-plus-icon' src={'/images/plus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItemID, 1)} alt="Plus Icon" />
        </div>
      </td>
    </tr>
  )
}

export default CartItem