import React from 'react'
import { Tr, Td, useToast, IconButton } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useItemStore } from '../store/item.store'
import trashcanIcon from '../images/trashcan-icon.png'
import '../assets/styles.css'

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
      // <Tr>
      //   <Td color={'white'} fontSize={{base: '1rem', md: '1.25rem'}}>{item.name}</Td>
      //   <Td color={'white'} fontSize={{base: '1rem', md: '1.25rem'}}>${item.price}</Td>
      //   {/* <td><img className='trashcan-icon' src={trashcanIcon} alt="trashcan icon" onClick={() => handleDeleteItem(item._id)} /></td> */}
      //   <Td><IconButton icon={<DeleteIcon />} onClick={() => handleDeleteItem(item._id)}></IconButton></Td>
      // </Tr>

      <tr>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>
          <img className='trashcan-icon' src={trashcanIcon} alt="trashcan icon" onClick={() => handleDeleteItem(item._id)} />
        </td>
      </tr>
    )
}

export default CartItem