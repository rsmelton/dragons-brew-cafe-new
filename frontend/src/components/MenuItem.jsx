import React from 'react'
import { Box, Flex, Image, Text, Button, useToast } from '@chakra-ui/react'
import { useItemStore } from '../store/item.store'

const MenuItem = (props) => {

  const toast = useToast()
  const { createItem } = useItemStore()

  const handleAddToCart = async () => {

    // Changed price: props.price to price: Number(props.price)
    const { success, message } = await createItem({
      name: props.name, price: Number(props.price)
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
    <Box padding={10}>
        <Flex
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
            gap={'1rem'}
        >
          <Image src={props.image} alt={props.name} borderRadius={'50%'} width={{base:'50%', md: '75%'}} margin={'auto'} />
          <Text className={'bold'} color={'white'} textAlign={'center'}>{props.nameAndPrice}</Text>
          <Text padding={'1rem'} color={'white'} textAlign={'center'}>{props.description}</Text>
          <Button bgColor={'white'} color={'black'} _hover={{ bgColor: '#3EA56C', color: 'white' }} onClick={handleAddToCart}>Add to Cart</Button>
        </Flex>
    </Box>
  )
}

export default MenuItem