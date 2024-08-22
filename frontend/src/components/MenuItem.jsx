import React from 'react'
import { Box, Flex, Image, Text, Button, useToast } from '@chakra-ui/react'
import { useItemStore } from '../store/item.store'

const MenuItem = (props) => {

  const toast = useToast()
  const { createItem } = useItemStore()

  const handleAddToCart = async () => {
    const { success, message } = await createItem({
      name: props.name, price: props.price
    })

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
        description: "Added to cart successfully",
        status: "success",
        isClosable: true
      })
    }

  }

  return (
    <Box padding={10} >
        <Flex
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
            gap={'1rem'}
        >
          <Image src={props.image} alt={props.name} borderRadius={'50%'} width={{lg: '75%', md: '50%', sm: '50%'}} margin={'auto'} />
          <Text textAlign={'center'} color={'#FEEFB0'}><b>{props.nameAndPrice}</b></Text>
          <Text textAlign={'center'} color={'#FEEFB0'}>{props.description}</Text>
          <Button bgColor={'#FEEFB0'} color={'#645547'} _hover={{ bgColor: '#3EA56C', color: 'white' }} onClick={handleAddToCart}>Add to Cart</Button>
        </Flex>
    </Box>
  )
}

export default MenuItem