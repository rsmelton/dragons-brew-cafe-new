import React from 'react'
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'
import { useCart } from '../context/CartContext.jsx'

const MenuItem = ({menuItemID, menuItemName, menuItemPrice, menuItemDescription, menuItemImageURLString}) => {

  const {handleAddToCart} = useCart()

  return (
    <Box paddingLeft={'1rem'} paddingTop={'1rem'} paddingRight={'1rem'} paddingBottom={'2rem'} >
        <Flex justifyContent={'center'}
              alignItems={'center'}
              flexDir={'column'}
              gap={'0.25rem'}
        >
          <Image src={`/images/${menuItemImageURLString}`} alt={menuItemName} borderRadius={'50%'} width={{base:'50%', md: '75%'}} margin={'auto'} />
          <Text className={'bold'} textAlign={'center'}>{`${menuItemName} - $${menuItemPrice}`}</Text>
          <Text textAlign={'center'}>{menuItemDescription}</Text>
          <Button bgColor={'white'} color={'black'} onClick={() => handleAddToCart(menuItemID)}>Add to Cart</Button>
        </Flex>
    </Box>
  )
}

export default MenuItem