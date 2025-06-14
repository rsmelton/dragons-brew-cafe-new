import React from 'react'
import { Image } from '@chakra-ui/react'
import { useCart } from '../context/AppContext.jsx'
import '../assets/styles.css'

const MenuItem = ({menuItem}) => {

  const {getMenuItemName, getMenuItemPrice, 
         getMenuItemDescription, getMenuItemImageURLString,
         handleAddToCart} = useCart()

  return (
    <div className='menu-item-container'>
      <Image src={`/images/${getMenuItemImageURLString(menuItem)}`} alt={getMenuItemName(menuItem)} borderRadius={'50%'} width={{base:'50%', md: '75%'}} margin={'auto'} />
      <p className='bold text-align-center'>{`${getMenuItemName(menuItem)} - $${getMenuItemPrice(menuItem)}`}</p>
      <p className='text-align-center'>{getMenuItemDescription(menuItem)}</p>
      <button className='button' onClick={() => handleAddToCart(menuItem)}>Add to cart</button>
    </div>
  )
}

export default MenuItem