import React from 'react'
import { Box, Image, Container, Flex, Text } from '@chakra-ui/react'
import welcomeScreenImg from '../images/welcomeScreen.png'
import coffeeHouseImg from '../images/coffeeHouse.png'
import '../assets/utils.css'

const HomePage = () => {
  return (
    <>
      <Box className='blue_background' width={'full'} padding={10}>
        <Flex justifyContent={'center'}>
          <Image width={'80%'} padding={5} src={welcomeScreenImg} alt='Welcome Screen' />
        </Flex>
      </Box>
      <Box className='blue_font' padding={1} width={'full'} bgColor={'#FEEFB0'} >
        <Flex
          justifyContent={'space-around'}
          alignItems={'center'}
          gap={'5rem'}
          flexDir={{
            lg: 'row',
            sm: 'column'
          }}
        >
          <Box flex={3} maxWidth={'75ch'} padding={5}>
            <Text textAlign={'center'} fontSize={30} paddingBottom={5}><b>About</b></Text>
            <Text padding={2} textAlign={'center'}>The ambiance is cozy yet enigmatic, with soft instrumental music playing in the background, creating a serene atmosphere perfect for contemplation or conversation. The menu boasts a variety of unique blends and brews inspired by different dragon lore from around the world. You can savor a "Dragons Fire Latte," a bold and intense latte with a spicy kick, or perhaps indulge in a "Frost Dragon Latte," a creamy concoction infused with mint and white chocolate.</Text>
            <Text padding={2} textAlign={'center'}>The baristas, clad in aprons adorned with dragon motifs, are friendly and knowledgeable, ready to guide you through the menu and recommend the perfect drink to suit your mood. Patrons are often seen relaxing with their laptops or books, enjoying the free Wi-Fi and the comforting warmth of their dragon-emblazoned ceramic mugs.</Text>
            <Text padding={2} textAlign={'center'}>Dragons Brew isn't just a coffee shop; it's a sanctuary where myth and reality blend seamlessly, where every sip transports you on a journey through legends and fantasies. Whether you're seeking a quick caffeine fix or a tranquil retreat from the urban hustle, Dragons Brew promises an unforgettable experience steeped in both magic and the art of coffee.</Text>
            <Text padding={2} textDecoration={'underline'} textAlign={'center'}>Indoor and Outdoor seating is available.</Text>
            <Text padding={2} textDecoration={'underline'} textAlign={'center'}>Pickup or Delivery is available thru Uber Eats or Doordash.</Text>
          </Box>
          <Box flex={1} maxWidth={'50ch'} padding={10} marginTop={-20}>
            <Text textAlign={'center'} fontSize={30} paddingBottom={5}><b>Contact</b></Text>
            <Text textAlign={'center'} flexWrap={'nowrap'}>PHONE NUMBER: (256)-123-4567</Text>
            <Text textAlign={'center'} flexWrap={'nowrap'}>LOCATION: TBA</Text>
            <Text textAlign={'center'} flexWrap={'nowrap'}>HOURS: 7:00 am - 4:00 pm</Text>
            <Text textAlign={'center'} flexWrap={'nowrap'}>Everyday</Text>
          </Box>
        </Flex>
      </Box>
      <Box padding={1} color={'#FEEFB0'} bgColor={"--primary-blue-color"}>
        <Flex
          justifyContent={'space-around'}
          alignItems={'center'}
          gap={'5rem'}
          flexDir={{
            lg: 'row',
            sm: 'column'
          }}
        >
          <Box flex={1} padding={5} width={{ lg: '100%', sm: '75%'}}>
            <Image src={coffeeHouseImg} alt='Coffee House' />
          </Box>
          <Box flex={1} maxWidth={'75ch'} padding={10} paddingTop={{lg: 20, sm: -20}}>
            <Text paddingBottom={5} textAlign={'center'}>Name: Robert Melton, Review: ⭐️⭐️⭐️⭐️⭐️</Text>
            <Text paddingBottom={5}>Dragons Brew is my go-to spot for a perfect cup of coffee! The ambiance is cozy with just the right touch of dragon-themed decor that adds a whimsical charm. The baristas are friendly and knowledgeable, always recommending new blends to try. Their Dragon's Fire Latte is my favorite; it's rich and smooth, perfect for starting my day right!</Text>
            <Text paddingBottom={5} textAlign={'center'}>Name: Deondre North, Review: ⭐️⭐️⭐️⭐️⭐️</Text>
            <Text paddingBottom={5}>What a gem! Dragons Brew not only serves amazing coffee but also creates a welcoming atmosphere that feels like a home away from home. The moment you step in, you're greeted with the aroma of freshly ground beans and a smile from the staff. I love their attention to detail, from the unique dragon art on the walls to the carefully curated menu. Whether you're in for a quick espresso or a leisurely afternoon latte, this place delivers excellence every time.</Text>
            <Text paddingBottom={5} textAlign={'center'}>Name: Brandon Jones, Review: ⭐️⭐️⭐️⭐️⭐️</Text>
            <Text paddingBottom={5}>Dragons Brew has quickly become my favorite coffee haunt in town. The quality of their coffee is unmatched, sourced from the best beans and expertly brewed to perfection. It's evident that they care about the craft, as each cup is consistently delicious. Beyond the coffee, the staff here truly makes the experience exceptional. They're not just baristas; they're passionate about coffee and always willing to share their knowledge. Whether you're a coffee aficionado or simply enjoy a good cup, Dragons Brew is a must-visit!</Text>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default HomePage