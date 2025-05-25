import React, { useEffect } from 'react'
import { useItemStore } from '../store/item.store.js'
import { Box } from '@chakra-ui/react'

const CartItemCount = () => {

  const { items, fetchItems } = useItemStore()

  useEffect(() => { fetchItems() }, [items])

  return (
    <Box color={'white'}>{items.length}</Box>
  )
}

export default CartItemCount