import React from 'react'
import { Flex, HStack, Text, Image, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import dragonsBrewCafeLogo from '../images/dragonsBrewLogoImage.png'

const Navbar = () => {
  return (
    <Box className='sofia-regular' maxW={'full'} paddingTop={3} px={15} bgColor={'#3E3831'} color={'#FEEFB0'}>
        <Flex
            height={20}
            alignItems={'center'}
            justifyContent={'space-around'}
            flexDirection={{
                base:"column",
                sm:"row"
            }}
        >
            <HStack spacing={{lg: 20, md: 10, sm: 5}} alignItems={'center'} justifyContent={'center'} paddingLeft={20}>
                {/* Empty text used to balance out the navbar */}
                <Text></Text>
                <Text fontSize={'25px'} _hover={{ color: '#3EA56C' }}><Link to={"/home"}>Home</Link></Text>
                <Image borderRadius={'full'} boxSize={'115px'} src={dragonsBrewCafeLogo} alt='Dragons Brew Cafe' />
                <Text fontSize={'25px'} _hover={{ color: '#3EA56C' }}><Link to={"/menu"}>Menu</Link></Text>  
                <Text fontSize={'25px'} _hover={{ color: '#3EA56C' }} paddingLeft={10}><Link to={"/cart"}>Cart</Link></Text>         
            </HStack>
        </Flex>
    </Box>
  )
}

export default Navbar