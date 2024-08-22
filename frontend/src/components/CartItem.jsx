import React from 'react'
import { Tr, Td, useToast, IconButton } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useItemStore } from '../store/item.store'

const CartItem = ({ item }) => {

    const { deleteItem } = useItemStore() 
    const toast = useToast()

    const handleDeleteItem = async (itemId) => {
        const { success, message } = await deleteItem(itemId)
    
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
        <Tr>
            <Td>{item.name}</Td>
            <Td>{item.price}</Td>
            <Td><IconButton icon={<DeleteIcon />} onClick={() => handleDeleteItem(item._id)} colorScheme='green'></IconButton></Td>
        </Tr>
    )
}

export default CartItem