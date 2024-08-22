import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box width={'100%'} height={175} bgColor={'#FEEFB0'}>
        <Flex
            padding={12}
            alignItems={'center'}
            flexDir={'column'}
            gap={'1rem'}
        >
            <Text color={'#645547'}>&copy; 2024 Dragon's Brew Coffee</Text>
            <Text color={'#645547'}>A fictional company created by Robert Melton</Text>
        </Flex>
    </Box>
  )
}

export default Footer