import { Box, ChakraProvider, ColorModeScript, Image } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import theme from '../theme'
import Background from '../assets/bg.jpg'

const Root = () => {
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />

            <Box className='root' bgImage={Background} bgSize='cover' minHeight='100vh' width='100%' >
                {/* <Image src={Background} className='bg' position='absolute' /> */}
                <Navbar />
                <Box className='outlet'>
                    <Outlet />
                </Box>
            </Box>
        </ChakraProvider>
    )
}

export default Root