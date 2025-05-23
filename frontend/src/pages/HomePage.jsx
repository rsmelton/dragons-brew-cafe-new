import React from 'react'
import { Box, Image, Flex, Text } from '@chakra-ui/react'
import '../assets/utils.css'
import welcomeScreenImg from '../images/welcomeScreen.jpg'
 
const HomePage = () => {

  return (
    <div className={'scrollable-page'}>

      {/* <Flex justifyContent={'center'} padding={10}>
        <video autoplay muted loop id="myVideo">
          <source src="/frontend/src/assets/dragons-brew-cafe-video.mp4" type="video/mp4" />
        </video>
      </Flex> */}
      
      <Flex
        className={'primary-font'}
        alignItems={'flex-start'}
        flexDirection={'column'}
        color={'white'}
        padding={'5rem'}
        gap={'1.5rem'}
      >
        <Box>
          <Text className={'bold'} fontSize={'2rem'}>About</Text>
          <Text paddingBottom={'1rem'}>The ambiance is cozy yet enigmatic, with soft instrumental music playing in the background, creating a serene atmosphere perfect for contemplation or conversation. The menu boasts a variety of unique blends and brews inspired by different dragon lore from around the world. You can savor a "Dragons Fire Latte", a bold and intense latte with a spicy kick, or perhaps indulge in a "Frost Dragon Latte", a creamy concoction infused with mint and white chocolate.</Text>
          <Text paddingBottom={'1rem'}>The baristas, clad in aprons adorned with dragon motifs, are friendly and knowledgeable, ready to guide you through the menu and recommend the perfect drink to suit your mood. Patrons are often seen relaxing with their laptops or books, enjoying the free Wi-Fi and the comforting warmth of their dragon-emblazoned ceramic mugs.</Text>
          <Text>Dragons Brew isn't just a coffee shop; it's a sanctuary where myth and reality blend seamlessly, where every sip transports you on a journey through legends and fantasies. Whether you're seeking a quick caffeine fix or a tranquil retreat from the urban hustle, Dragons Brew promises an unforgettable experience steeped in both magic and the art of coffee.</Text>
        </Box>
        <Box>
          <Text className={'bold'} fontSize={'2rem'}>Contact</Text>
          <Text>PHONE NUMBER: (256)-123-4567</Text>
          <Text>LOCATION: TBA</Text>
          <Text>HOURS: 7:00 am - 4:00 pm</Text>
          <Text>Everyday</Text>
        </Box>
        <Box>
          <Text className={'bold'} fontSize={'2rem'}>Reviews</Text>
          <Text>Name: Robert Melton</Text>
          <Text>Review: ⭐️⭐️⭐️⭐️⭐️</Text>
          <Text paddingBottom={'1rem'}>Dragons Brew is my go-to spot for a perfect cup of coffee! The ambiance is cozy with just the right touch of dragon-themed decor that adds a whimsical charm. The baristas are friendly and knowledgeable, always recommending new blends to try. Their Dragon's Fire Latte is my favorite; it's rich and smooth, perfect for starting my day right!</Text>
          <Text>Name: Deondre North</Text>
          <Text>Review: ⭐️⭐️⭐️⭐️⭐️</Text>
          <Text paddingBottom={'1rem'}>What a gem! Dragons Brew not only serves amazing coffee but also creates a welcoming atmosphere that feels like a home away from home. The moment you step in, you're greeted with the aroma of freshly ground beans and a smile from the staff. I love their attention to detail, from the unique dragon art on the walls to the carefully curated menu. Whether you're in for a quick espresso or a leisurely afternoon latte, this place delivers excellence every time.</Text>
          <Text>Name: Brandon Jones</Text>
          <Text>Review: ⭐️⭐️⭐️⭐️⭐️</Text>
          <Text>Dragons Brew has quickly become my favorite coffee haunt in town. The quality of their coffee is unmatched, sourced from the best beans and expertly brewed to perfection. It's evident that they care about the craft, as each cup is consistently delicious. Beyond the coffee, the staff here truly makes the experience exceptional. They're not just baristas; they're passionate about coffee and always willing to share their knowledge. Whether you're a coffee aficionado or simply enjoy a good cup, Dragons Brew is a must-visit!</Text>
        </Box>
      </Flex>
    </div>
  )
}

export default HomePage