import React, { useEffect } from 'react'
import { Flex, Text, Grid } from '@chakra-ui/react'
import { useCart } from '../context/AppContext.jsx'
import MenuItem from '../components/MenuItem.jsx'
import '../assets/styles.css'

const MenuPage = () => { 

  const {menuItems, fetchMenuItems} = useCart()

  useEffect(() => { fetchMenuItems() }, [])

  return (
    <>
      {menuItems.length === 0 ? (
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'row'}
        >
          <Text fontSize={'1.5rem'}>Loading menu...</Text>
        </Flex>
        ) : (
          <Grid 
            templateColumns={{base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}}
            templateRows={'1fr'}
          >
            {menuItems.map((menuItem) => (
              <MenuItem menuItem={menuItem} />
            ))}
          </Grid>
        )
      }
    </>
  )
}

export default MenuPage