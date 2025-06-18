import React, { useEffect } from 'react';
import { Grid } from '@chakra-ui/react';
import { useCart } from '../context/AppContext.jsx';
import MenuItem from '../components/MenuItem.jsx';
import '../assets/styles.css';

const MenuPage = () => { 

  const {menuItems, fetchMenuItems} = useCart();

  useEffect(() => { fetchMenuItems() }, []);

  return (
    <>
      {menuItems.length === 0 ? (
        <div className='loading-text-container'>
          <p className='loading-text-font-size'>Loading menu...</p>
        </div>
        ) : (
          // <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr));'}}>
          //   {menuItems.map((menuItem) => (
          //      <MenuItem menuItem={menuItem} />
          //   ))}
          // </div>
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
  );
};

export default MenuPage;