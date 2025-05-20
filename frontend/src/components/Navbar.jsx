import React from 'react'
import '../assets/navbar.css'
import { Flex, Text, Image, Box, position } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import dragonsBrewCafeLogo from '../images/dragonsBrewLogoImage.jpg'

const Navbar = () => {

    return (
        <>
            <div className='navbar'>
                <a href="/cart">Cart</a>
                <a href="/menu">Menu</a>
                <a href="/home">Home</a>
            </div>
            {/* <div className='main'>
                <h1>Fixed Top Menu</h1>
                <h2>Scroll this page to see the effect</h2>
                <h2>The navigation bar will stay at the top of the page while scrolling</h2>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
            </div> */}
        </>



        // <Flex 
        //     height={20} 
        //     alignItems={'center'} 
        //     justifyContent={'flex-end'} 
        //     gap={'1rem'} 
        //     flexDirection={'row'} paddingRight={5}
        // >
        //     <Text 
        //         fontSize={{base: '20px', md: '25px', lg: '25px'}} 
        //     >
        //         <Link to={"/home"}>Home</Link>
        //     </Text>
        //     <Text 
        //         fontSize={{base: '20px', md: '25px', lg: '25px'}} 
        //     >
        //         <Link to={"/menu"}>Menu</Link>
        //     </Text>  
        //     <Text 
        //         fontSize={{base: '20px', md: '25px', lg: '25px'}} 
        //     >
        //         <Link to={"/cart"}>Cart</Link>
        //     </Text>         
        // </Flex>





        // <Box className='primary_font tan_font bold' paddingTop={3} bgColor={'#3E3831'}>
        //     <Flex 
        //         height={20} 
        //         alignItems={'center'} 
        //         justifyContent={'center'} 
        //         gap={{base: '1rem', md: '2rem', lg: '3rem'}} 
        //         flexDirection={'row'} paddingLeft={10}
        //     >
        //         <Text 
        //             fontSize={{base: '20px', md: '25px', lg: '25px'}} 
        //             _hover={{ color: '#3EA56C' }}
        //         >
        //             <Link to={"/home"}>Home</Link>
        //         </Text>
        //         <Image 
        //             borderRadius={'50%'} 
        //             boxSize={'95px'} 
        //             src={dragonsBrewCafeLogo} 
        //             alt='Dragons Brew Cafe' 
        //         />
        //         <Text 
        //             fontSize={{base: '20px', md: '25px', lg: '25px'}} 
        //             _hover={{ color: '#3EA56C' }}
        //         >
        //             <Link to={"/menu"}>Menu</Link>
        //         </Text>  
        //         <Text 
        //             fontSize={{base: '20px', md: '25px', lg: '25px'}} 
        //             _hover={{ color: '#3EA56C' }}
        //         >
        //             <Link to={"/cart"}>Cart</Link>
        //         </Text>         
        //     </Flex>
        // </Box>
    )
}

export default Navbar