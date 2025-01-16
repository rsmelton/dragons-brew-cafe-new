import React from 'react'
import { Box, Image, Flex, Text } from '@chakra-ui/react'
import welcomeScreenImg from '../images/welcomeScreen.jpg'
 
const HomePage = () => {
  return (
    <>
      <Flex justifyContent={'center'} padding={10}>
        <Image width={{sm: '90%', md: '80%'}} padding={5} src={welcomeScreenImg} alt='Welcome Screen' />
      </Flex>
      <Flex
        className='primary_font blue_font tan_background'
        alignItems={'center'}
        justifyContent={'space-around'}
        flexDirection={'column'}
      >
        <Box padding={'5rem'}>
          <Text fontSize={30} paddingBottom={5} className='bold'>About</Text>
          <Text paddingBottom={5}>The ambiance is cozy yet enigmatic, with soft instrumental music playing in the background, creating a serene atmosphere perfect for contemplation or conversation. The menu boasts a variety of unique blends and brews inspired by different dragon lore from around the world. You can savor a "Dragons Fire Latte," a bold and intense latte with a spicy kick, or perhaps indulge in a "Frost Dragon Latte," a creamy concoction infused with mint and white chocolate.</Text>
          <Text paddingBottom={5}>The baristas, clad in aprons adorned with dragon motifs, are friendly and knowledgeable, ready to guide you through the menu and recommend the perfect drink to suit your mood. Patrons are often seen relaxing with their laptops or books, enjoying the free Wi-Fi and the comforting warmth of their dragon-emblazoned ceramic mugs.</Text>
          <Text paddingBottom={5}>Dragons Brew isn't just a coffee shop; it's a sanctuary where myth and reality blend seamlessly, where every sip transports you on a journey through legends and fantasies. Whether you're seeking a quick caffeine fix or a tranquil retreat from the urban hustle, Dragons Brew promises an unforgettable experience steeped in both magic and the art of coffee.</Text>
          <Text>Indoor and Outdoor seating is available.</Text>
          <Text paddingBottom={5}>Pickup or Delivery is available thru Uber Eats or Doordash.</Text>
          <Text fontSize={30} paddingBottom={5} className='bold'>Contact</Text>
          <Text paddingBottom={1}>PHONE NUMBER: (256)-123-4567</Text>
          <Text paddingBottom={1}>LOCATION: TBA</Text>
          <Text paddingBottom={1}>HOURS: 7:00 am - 4:00 pm</Text>
          <Text>Everyday</Text>
        </Box>
      </Flex>
      <Flex
        className='tan_font'
        alignItems={'center'}
        justifyContent={'space-around'}
        flexDir={'column'}
      >
        <Box padding={'5rem'}>
          <Text>Name: Robert Melton</Text>
          <Text paddingBottom={5}>Review: ⭐️⭐️⭐️⭐️⭐️</Text>
          <Text paddingBottom={5}>Dragons Brew is my go-to spot for a perfect cup of coffee! The ambiance is cozy with just the right touch of dragon-themed decor that adds a whimsical charm. The baristas are friendly and knowledgeable, always recommending new blends to try. Their Dragon's Fire Latte is my favorite; it's rich and smooth, perfect for starting my day right!</Text>
          <Text>Name: Deondre North</Text>
          <Text paddingBottom={5}>Review: ⭐️⭐️⭐️⭐️⭐️</Text>
          <Text paddingBottom={5}>What a gem! Dragons Brew not only serves amazing coffee but also creates a welcoming atmosphere that feels like a home away from home. The moment you step in, you're greeted with the aroma of freshly ground beans and a smile from the staff. I love their attention to detail, from the unique dragon art on the walls to the carefully curated menu. Whether you're in for a quick espresso or a leisurely afternoon latte, this place delivers excellence every time.</Text>
          <Text>Name: Brandon Jones</Text>
          <Text paddingBottom={5}>Review: ⭐️⭐️⭐️⭐️⭐️</Text>
          <Text paddingBottom={5}>Dragons Brew has quickly become my favorite coffee haunt in town. The quality of their coffee is unmatched, sourced from the best beans and expertly brewed to perfection. It's evident that they care about the craft, as each cup is consistently delicious. Beyond the coffee, the staff here truly makes the experience exceptional. They're not just baristas; they're passionate about coffee and always willing to share their knowledge. Whether you're a coffee aficionado or simply enjoy a good cup, Dragons Brew is a must-visit!</Text>
        </Box>
      </Flex>
    </>
  )
}

export default HomePage