import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import { useMenuItemStore } from '../store/menuItem.store.js'
import MenuItem from '../components/MenuItem'
import '../assets/styles.css'

const MenuPage = () => { 

  const { menuItems, fetchMenuItems } = useMenuItemStore()

  useEffect(() => { fetchMenuItems() }, [])

  return (
    <Grid 
      templateColumns={{base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}}
      templateRows={'1fr'}
    >
      {menuItems.map((menuItem) => {
        return <MenuItem 
          name={menuItem.name}
          price={menuItem.price}   
          description={menuItem.description} 
          image={menuItem.imageURLString}
        />
      })}
    </Grid>
  )
}

export default MenuPage