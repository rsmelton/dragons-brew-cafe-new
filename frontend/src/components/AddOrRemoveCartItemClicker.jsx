import React from 'react'
import { useItemStore } from '../store/cartItem.store'
import '../assets/styles.css'

const AddOrRemoveCartItemClicker = ({ item }) => {

  // const itemCount = 0;

  // const { items, deleteItem, createItem } = useItemStore()

  // const updateCount = () => {
  //   items.map((currentItem, index) => {
  //     if (currentItem.name === item.name) {
  //       itemCount++;
  //     }
  //   })
  // }

  // const handleDeleteItem = async (itemId) => {
  //   if (itemCount > 0) {
  //     const { success, message } = await deleteItem(itemId)
  //   }
  //   updateCount()
  // }

  // const handleAddItem = async (item) => {
  //   const { success, message } = await createItem({
  //     name: item.name, price: Number(item.price)
  //   })
  //   updateCount()
  // }

  return (
    <div className='cart-item-clicker-container'>
      {/* {(itemCount < 1 || itemCount > 1) && (
        <img className='cart-minus-icon' src={'/images/minus-icon.png'} onClick={() => handleDeleteCartItem(cartItem._id)} alt="Minus Icon" />
      )}
      {itemCount === 1 && (

      )} */}
      {/* <img className='cart-minus-icon' src={'/images/minus-icon.png'} onClick={() => handleDeleteItem(item._id)} alt="Minus Icon" /> */}
      <div className='cart-item-count'>{itemCount}</div>
      <img className='cart-plus-icon' src={'/images/plus-icon.png'} onClick={() => handleAddItem(item)} alt="Plus Icon" />
    </div>
  )
}

export default AddOrRemoveCartItemClicker