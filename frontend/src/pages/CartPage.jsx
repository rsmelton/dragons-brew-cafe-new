import React, { useEffect } from 'react'
import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, TableContainer, Button, useToast } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useItemStore } from '../store/item.store.js'
import CartItem from '../components/CartItem.jsx'

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
    <Box className='blue_background primary_font bold' fontSize={'20px'}>
      <Text 
        textAlign={'center'} 
        py={10} 
        fontSize={'25px'} 
        bgGradient={"linear(to-r, white, #645547)"} 
        bgClip={'text'}
      >
        Current Items in Your Cart 🛒
      </Text>

      {items.length > 0 && (
        <>
          <TableContainer margin={'auto'} px={{base: 0, md: 10, lg: 20}} paddingBottom={10}>
            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                  <Th fontSize={'15px'} color={'#FEEFB0'}>Name</Th>
                  <Th fontSize={'15px'} color={'#FEEFB0'}>Price</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {items.map((item, index) => {
                  return <CartItem key={item._id} item={item} clr={index % 2 === 0 ? "#011627" : "#FEEFB0"} />
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
            gap={'1rem'}
          >
            <Text className='tan_font' fontSize={{base: '15px', md: '20px', lg: '20px'}}>Your total is ${handleFindTotalPrice(items)} click below to purchase!</Text>
            <Button bgColor={'white'} color={'#011627'} marginBottom={10} _hover={{ bgColor: '#3EA56C', color: 'white' }} onClick={handleDeleteAllItems}>Purchase</Button>
          </Flex>
        </>
      )}

      {items.length === 0 && (
        // render empty page here
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'column'}
          gap={'1rem'}
          paddingBottom={10}
        >
          <Text className='tan_font'>Your Cart is currently empty</Text>
          <Text className='tan_font' textAlign={'center'}>Please click the button below to navigate to the menu to start adding items to your cart!</Text>
          <Link to={'/menu'}><Button bgColor={'white'} color={'#011627'} _hover={{ bgColor: '#3EA56C', color: 'white' }}>Go to menu</Button></Link>
        </Flex>
      )}
    </Box>
  )
}

export default CartPage