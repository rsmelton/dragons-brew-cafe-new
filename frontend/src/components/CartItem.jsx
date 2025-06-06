import React from 'react'
import { useCart } from '../context/AppContext.jsx'
import '../assets/styles.css'

const CartItem = ({ cartItem, menuItem }) => {

  const {handleDeleteCartItem, handleModifyCartItemQuantity, getCartItemQuantity, 
         getMenuItemName, getMenuItemPrice} = useCart()

  return (
    <tr>
      <td className='cart-table-padding-right'>
        <div className='cart-item-clicker-container'>
          {/* Here we are decrementing the quantitiy of the cart item */}
          {getCartItemQuantity(cartItem) > 1 && (
            <img className='cart-minus-icon' src={'/images/minus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItem, -1)} alt="Minus Icon" />
          )}
          {/* Here we are removing the cartItem all together */}
          {getCartItemQuantity(cartItem) === 1 && (
            <img className='trashcan-icon' src={'/images/trashcan-icon.png'} onClick={() => handleDeleteCartItem(cartItem)} alt="Trashcan Icon" />
          )}
          <div>{getCartItemQuantity(cartItem)}</div>
          {/* Here we are incrementing the quantitiy of the cart item */}
          <img className='cart-plus-icon' src={'/images/plus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItem, 1)} alt="Plus Icon" />
        </div>
      </td>
      <td className='cart-table-padding-right'>{getMenuItemName(menuItem)}</td>
      <td className='cart-table-padding-right' style={{textAlign: 'right'}}>${getMenuItemPrice(menuItem).toFixed(2)}</td>
      <td style={{textAlign: 'right', paddingRight: '0.5rem'}}>x</td>
      <td className='cart-table-padding-right' style={{textAlign: 'right'}}>{getCartItemQuantity(cartItem)}</td>
      <td style={{textAlign: 'right', paddingRight: '0.5rem'}}>=</td>
      <td className='cart-table-padding-right' style={{textAlign: 'right'}}>${(getMenuItemPrice(menuItem) * getCartItemQuantity(cartItem)).toFixed(2)}</td>
    </tr>
  )
}

export default CartItem

// const CartItem = ({ cartItemID, cartItemQuantity, menuItemName, menuItemPrice }) => {

//   const {handleDeleteCartItem, handleModifyCartItemQuantity} = useCart()

//   return (
//     <tr>
//       <td className='cart-table-padding-right'>
//         <div className='cart-item-clicker-container'>
//           {/* Here we are decrementing the quantitiy of the cart item */}
//           {cartItemQuantity > 1 && (
//             <img className='cart-minus-icon' src={'/images/minus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItemID, -1)} alt="Minus Icon" />
//           )}
//           {/* Here we are removing the cartItem all together */}
//           {cartItemQuantity === 1 && (
//             <img className='trashcan-icon' src={'/images/trashcan-icon.png'} onClick={() => handleDeleteCartItem(cartItemID)} alt="Trashcan Icon" />
//           )}
//           <div>{cartItemQuantity}</div>
//           {/* Here we are incrementing the quantitiy of the cart item */}
//           <img className='cart-plus-icon' src={'/images/plus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItemID, 1)} alt="Plus Icon" />
//         </div>
//       </td>
//       <td className='cart-table-padding-right'>{menuItemName}</td>
//       <td className='cart-table-padding-right' style={{textAlign: 'right'}}>${menuItemPrice.toFixed(2)}</td>
//       <td className='cart-table-padding-right' style={{textAlign: 'right'}}>x</td>
//       <td className='cart-table-padding-right' style={{textAlign: 'right'}}>{cartItemQuantity}</td>
//       <td className='cart-table-padding-right' style={{textAlign: 'right'}}>=</td>
//       <td className='cart-table-padding-right' style={{textAlign: 'right'}}>${(menuItemPrice * cartItemQuantity).toFixed(2)}</td>
//     </tr>
//   )
// }

// export default CartItem