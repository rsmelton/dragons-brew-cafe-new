import React, { useEffect } from 'react'
import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, TableContainer, Button, useToast } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useItemStore } from '../store/item.store.js'
import CartItem from '../components/CartItem.jsx'
import '../assets/utils.css'

const CartPage = () => {

  const { items, fetchItems, deleteItem, deleteItems } = useItemStore()

  useEffect(() => { fetchItems() }, [fetchItems, deleteItem, deleteItems, items])

  const toast = useToast()

  const handleFindTotalPrice = (items) => {
    let totalPrice = 0

    items.map((item) => {
      totalPrice += item.price
    })

    return totalPrice.toFixed(2)
  }

  const handleDeleteAllItems = async () => {
    // delete all items from database to show that the user "purchased" their items
    const {success, message} = await deleteItems()

    if (success === false) {
      toast({
        title: "Error",
        description: "Failed to purchase",
        status: "error",
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      })
    }
  }

  return (
    <Box className='blue_background' fontSize={'20px'}>
      <Text 
        className='sofia-regular' 
        textAlign={'center'} 
        py={10} 
        fontSize={'25px'} 
        bgGradient={"linear(to-r, white, #645547)"} 
        bgClip={'text'}
      >
        Current Items in Your Cart 🛒
      </Text>

      {items.length > 0 && (
        <Box>
          <TableContainer margin={'auto'} px={10} paddingBottom={10}>
            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                  <Th fontSize={'15px'}>Name</Th>
                  <Th fontSize={'15px'}>Price</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {items.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
            gap={'1rem'}
          >
            <Text textAlign={'center'}>Your total is ${handleFindTotalPrice(items)} click below to purchase!</Text>
            <Text textAlign={'center'} paddingBottom={10}><Button bgColor={'#FEEFB0'} color={'#645547'} _hover={{ bgColor: '#3EA56C', color: 'white' }} onClick={handleDeleteAllItems}>Purchase</Button></Text>
          </Flex>
        </Box>
      )}

      {items.length === 0 && (
        // render empty page here
        <Box margin={'auto'} paddingBottom={10}>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
            gap={'1rem'}
          >
            <Text className='tan_font' textAlign={'center'}>Your Cart is currently empty</Text>
            <Text className='tan_font' textAlign={'center'}>Please click the button below to navigate to the menu to start adding items to your cart!</Text>
            <Text textAlign={'center'}><Button bgColor={'#FEEFB0'} color={'#645547'} _hover={{ bgColor: '#3EA56C', color: 'white' }}><Link to={'/menu'}>Go to menu</Link></Button></Text>
          </Flex>
        </Box>
      )}

    </Box>
  )
}

export default CartPage