import { Box, ChakraProvider, ColorModeProvider, ColorModeScript, Image, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import theme from '../theme'
import Background from '../assets/bg.jpg'
import DarkBackground from '../assets/dark-bg.jpg'

const Root = () => {
    const { colorMode } = useColorMode()
    console.log(colorMode)
    return (

        <>
            <Box className='root' bgImage={colorMode === 'light' ? Background : 'none'} bgSize='cover' minHeight='100vh' width='100%'
            >
                {/* <Image src={Background} className='bg' position='absolute' /> */}
                <Navbar />
                <Box className='outlet'>
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}

export default Root