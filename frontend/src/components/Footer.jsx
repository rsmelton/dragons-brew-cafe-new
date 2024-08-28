import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import '../assets/utils.css'

const Footer = () => {
  return (
    <Box className='bold' color={'#011627'} width={'100%'} height={175} bgColor={'#FEEFB0'}>
        <Flex
            padding={12}
            alignItems={'center'}
            flexDir={'column'}
            gap={'1rem'}
        >
            <Text>&copy; 2024 Dragon's Brew Coffee</Text>
            <Text>A fictional company created by Robert Melton</Text>
        </Flex>
    </Box>
  )
}

export default Footer