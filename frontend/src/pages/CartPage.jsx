import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/AppContext.jsx';
import CartItem from '../components/CartItem.jsx';
import '../assets/styles.css';

const CartPage = () => {

  const {cartItems, menuItems, fetchCartItems, fetchMenuItems, 
         doesMenuItemMatchCartItem, handleDeleteAllCartItems, handleFindTotalPriceOfCart} = useCart();

  useEffect(() => { fetchCartItems() }, []);

  useEffect(() => { fetchMenuItems() }, []);

  return (
    <div>
      {/* This displays when the cart is empty */}
      {cartItems.length === 0 && (
        <div className='empty-cart-page-container'>
          <p className='text-align-center'>Your cart is currently empty</p>
          <p className='text-align-center'>Please click the button below to navigate to the menu to start adding items to your cart.</p>
          <Link to={'/menu'}>
            <button className='button'>Go to menu</button>
          </Link>
        </div>
      )}

      {/* We can display a loading message when there are items in the cart, 
          but the menuItems have yet to be populated */}
      {cartItems.length > 0 && menuItems.length === 0 && (
        <div className='loading-text-container'>
          <p className='loading-text-font-size'>Loading cart...</p>
        </div>
      )}

      {/* We are ensuring that we have items in the cart and that the menuItems has items
          to access otherwise we would be accessing something that is undefined */}
      {cartItems.length > 0 && menuItems.length > 0 && (
        <>
          <table className='cart-table'>
            {cartItems.map((cartItem) => {
              const menuItem = menuItems.find((menuItem) => doesMenuItemMatchCartItem(menuItem, cartItem));
              return ( <CartItem cartItem={cartItem} menuItem={menuItem} /> );
            })}
            <tr>
              <td className='cart-table-padding-right' colSpan={'7'}>
                <hr />
              </td>
            </tr>
            <tr>
              <td className='text-align-left'>Total</td>
              <td className='cart-table-padding-right text-align-right' colSpan={'6'}>${handleFindTotalPriceOfCart(cartItems, menuItems)}</td>
            </tr>
            <tr>
              <td className='cart-table-padding-right text-align-right' colSpan={'7'}>
                <button className='button' onClick={handleDeleteAllCartItems}>Purchase</button>
              </td>
            </tr>
          </table>
        </>
      )}
    </div>
  );
};

export default CartPage;