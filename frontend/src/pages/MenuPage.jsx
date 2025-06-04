import React, { useEffect } from 'react'
import { Flex, Text, Grid } from '@chakra-ui/react'
import { useCart } from '../context/CartContext.jsx'
import MenuItem from '../components/MenuItem.jsx'
import '../assets/styles.css'

const MenuPage = () => { 

  const {menuItems, fetchMenuItems, getMenuItemID, getMenuItemName, 
         getMenuItemPrice, getMenuItemDescription, getMenuItemImageURLString} = useCart()

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
              <MenuItem key={getMenuItemID(menuItem)} 
                        menuItemID={getMenuItemID(menuItem)} 
                        menuItemName={getMenuItemName(menuItem)}
                        menuItemPrice={getMenuItemPrice(menuItem)}
                        menuItemDescription={getMenuItemDescription(menuItem)}
                        menuItemImageURLString={getMenuItemImageURLString(menuItem)} />
            ))}
          </Grid>
        )
      }
    </>
  )
}

export default MenuPage