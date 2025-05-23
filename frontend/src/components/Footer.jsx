import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
        className='primary-font bold'
        padding={12}
        alignItems={'center'}
        flexDir={'column'}
        gap={'1rem'}
        textAlign={'center'}
        height={175}
    >
        <Text>&copy; 2024 Dragon's Brew Coffee</Text>
        <Text>A fictional company created by Robert Melton</Text>
    </Flex>
  )
}

export default Footer