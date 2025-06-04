import React from 'react'
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'
import { useCart } from '../context/AppContext.jsx'

const MenuItem = ({menuItem}) => {

  const {getMenuItemID, getMenuItemName, getMenuItemPrice, 
         getMenuItemDescription, getMenuItemImageURLString,
         handleAddToCart} = useCart()

  return (
    <Box paddingLeft={'1rem'} paddingTop={'1rem'} paddingRight={'1rem'} paddingBottom={'2rem'} >
        <Flex justifyContent={'center'}
              alignItems={'center'}
              flexDir={'column'}
              gap={'0.25rem'}
        >
          <Image src={`/images/${getMenuItemImageURLString(menuItem)}`} alt={getMenuItemName(menuItem)} borderRadius={'50%'} width={{base:'50%', md: '75%'}} margin={'auto'} />
          <Text className={'bold'} textAlign={'center'}>{`${getMenuItemName(menuItem)} - $${getMenuItemPrice(menuItem)}`}</Text>
          <Text textAlign={'center'}>{getMenuItemDescription(menuItem)}</Text>
          <Button bgColor={'white'} color={'black'} onClick={() => handleAddToCart(getMenuItemID(menuItem))}>Add to Cart</Button>
        </Flex>
    </Box>
  )
}

export default MenuItem