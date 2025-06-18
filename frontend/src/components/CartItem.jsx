import React from 'react';
import { useCart } from '../context/AppContext.jsx';
import '../assets/styles.css';

const CartItem = ({ cartItem, menuItem }) => {

  const {handleDeleteCartItem, handleModifyCartItemQuantity, getCartItemQuantity, 
         getMenuItemName, getMenuItemPrice} = useCart();

  return (
    <tr>
      <td className='cart-td-padding-right'>
        <div className='cart-item-clicker-container'>
          {/* Here we are decrementing the quantitiy of the cart item */}
          {getCartItemQuantity(cartItem) > 1 && (
            <img className='cart-plus-and-minus-icon' src={'/images/minus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItem, -1)} alt="Minus Icon" />
          )}
          {/* Here we are removing the cartItem all together */}
          {getCartItemQuantity(cartItem) === 1 && (
            <img className='cart-trashcan-icon' src={'/images/trashcan-icon.png'} onClick={() => handleDeleteCartItem(cartItem)} alt="Trashcan Icon" />
          )}
          <div>{getCartItemQuantity(cartItem)}</div>
          {/* Here we are incrementing the quantitiy of the cart item */}
          <img className='cart-plus-and-minus-icon' src={'/images/plus-icon.png'} onClick={() => handleModifyCartItemQuantity(cartItem, 1)} alt="Plus Icon" />
        </div>
      </td>
      {/* Need to take out style prop for the x and = ... just not sure what to call the class for them yet */}
      <td className='cart-td-padding-right'>{getMenuItemName(menuItem)}</td>
      <td className='cart-td-padding-right text-align-right'>${getMenuItemPrice(menuItem).toFixed(2)}</td>
      <td className='text-align-right' style={{paddingRight: '0.5rem'}}>x</td>
      <td className='cart-td-padding-right text-align-right'>{getCartItemQuantity(cartItem)}</td>
      <td className='text-align-right' style={{paddingRight: '0.5rem'}}>=</td>
      <td className='text-align-right'>${(getMenuItemPrice(menuItem) * getCartItemQuantity(cartItem)).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;