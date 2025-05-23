import React, { useEffect } from 'react'
import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, TableContainer, Button, useToast } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useItemStore } from '../store/item.store.js'
import CartItem from '../components/CartItem.jsx'

const CartPage = () => {

  const { items, fetchItems, deleteItem, deleteItems } = useItemStore()

  useEffect(() => { fetchItems() }, [fetchItems, items])

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
    <Box className='scrollable-page primary-font'>
      <Text 
        textAlign={'center'} 
        paddingTop={'2rem'}
        paddingBottom={'2rem'}
        fontSize={'1.5rem'} 
        bgClip={'text'}
        color={'white'}
      >
        Current Items in Your Cart 🛒
      </Text>

      {items.length > 0 && (
        <>
          <TableContainer margin={'auto'} paddingLeft={'5rem'} paddingRight={'5rem'} paddingBottom={'1rem'}>
            <Table>
              <Thead>
                <Tr>
                  <Th fontSize={'1rem'} color={'white'}>Name</Th>
                  <Th fontSize={'1rem'} color={'white'}>Price</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody backgroundColor={'rgba(0, 0, 0, 0.5)'}>
                {items.map((item, index) => {
                  return <CartItem key={item._id} item={item} />
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
            <Text color={'white'} fontSize={{base: '1rem', md: '1.25rem'}}>Your total is ${handleFindTotalPrice(items)}. Click below to purchase.</Text>
            <Button bgColor={'white'} color={'black'} _hover={{bgColor: '#3EA56C', color: 'white'}} onClick={handleDeleteAllItems}>Purchase</Button>
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
        >
          <Text color={'white'}>Your Cart is currently empty</Text>
          <Text color={'white'} textAlign={'center'}>Please click the button below to navigate to the menu to start adding items to your cart.</Text>
          <Link to={'/menu'}><Button bgColor={'white'} color={'black'} _hover={{ bgColor: '#3EA56C', color: 'white' }}>Go to menu</Button></Link>
        </Flex>
      )}
    </Box>
  )
}

export default CartPage