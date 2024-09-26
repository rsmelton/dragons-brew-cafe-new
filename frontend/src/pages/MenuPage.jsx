import React from 'react'
import { Grid } from '@chakra-ui/react'
import dragonsFireLatteImg from '../images/dragonsFireLatte.png'
import enchatedEspressoImg from '../images/enchantedEspresso.png'
import frostDragonLatteImg from '../images/frostDragonLatte.png'
import mysticMatchaImg from '../images/mysticMatcha.png'
import phoenixFrappuccinoImg from '../images/phoenixFrappuccino.png'
import sorcerersSmoresMochaImg from '../images/sorcerersSmoresMocha.png'
import unicornColdBrewImg from '../images/unicornColdBrew.png'
import wizardsWhiteChocolateMochaImg from '../images/wizardsWhiteChocolateMocha.png'
import MenuItem from '../components/MenuItem'

const MenuPage = () => {
  return (
    <Grid 
      className='primary_font blue_background'
      templateColumns={{lg: "1fr 1fr", md: "1fr 1fr", sm: "1fr"}}
    >
      <MenuItem 
        image={dragonsFireLatteImg} 
        name="Dragons Fire Latte" 
        price="7.95"
        nameAndPrice="Dragons Fire Latte - $7.95" 
        description="A spicy twist on a classic latte with a hint of cinnamon and cayenne pepper, topped with a good amount of whipped cream" 
      />
      <MenuItem 
        image={enchatedEspressoImg} 
        name="Enchanted Espresso" 
        price="4.95"
        nameAndPrice="Enchanted Espresso - $4.95" 
        description="A double shot of our finest espresso, served with a twist of lemon and a sprinkling of enchanted edible glitter upon request" 
      />
      <MenuItem 
        image={frostDragonLatteImg} 
        name="Frost Dragon Latte" 
        price="6.95"
        nameAndPrice="Frost Dragon Latte - $6.95" 
        description="A freezing cold latte with mint and white chocolate with some whipped cream on top and a drizzle of caramel" 
      />
      <MenuItem 
        image={mysticMatchaImg} 
        name="Mystic Matcha" 
        price="7.99"
        nameAndPrice="Mystic Matcha - $7.99" 
        description="A vibrant green matcha latte with a touch of vanilla and honey, served with a side of mochi" 
      />
      <MenuItem 
        image={phoenixFrappuccinoImg} 
        name="Phoenix Frappuccino" 
        price="7.95"
        nameAndPrice="Phoenix Frappuccino - $7.95" 
        description="A cool, blended drink with flavors of mango, raspberry, and a hint of chili, topped with whipped cream and a fiery chocolate drizzle" 
      />
      <MenuItem 
        image={sorcerersSmoresMochaImg} 
        name="Sorcerers Smores Mocha" 
        price="8.95"
        nameAndPrice="Sorcerers Smores Mocha - $8.95" 
        description="A decadent mocha with toasted marshmallow, graham cracker crumbles, and chocolate drizzle" 
      />
      <MenuItem 
        image={unicornColdBrewImg} 
        name="Unicorn Cold Brew" 
        price="3.95"
        nameAndPrice="Unicorn Cold Brew - $3.95" 
        description="A magical cold brew coffee infused with lavender and vanilla, served with a swirl of pastel-colored cream on the top" 
      />
      <MenuItem 
        image={wizardsWhiteChocolateMochaImg} 
        name="Wizards White Chocolate Mocha" 
        price="6.95"
        nameAndPrice="Wizards White Chocolate Mocha - $6.95" 
        description="A creamy white chocolate mocha mixed with a hazelnut mocha topped with whipped cream and a drizzle of caramel and chocolate" 
      />
    </Grid>
  )
}

export default MenuPage