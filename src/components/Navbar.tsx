import { Flex, Spacer } from '@chakra-ui/layout'
import {
    Box, Center, Container, IconButton, Image, Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    useColorMode,

} from '@chakra-ui/react'
import React from 'react'
import { RiQuillPenFill } from 'react-icons/ri'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { HiInformationCircle } from 'react-icons/hi'
import Logo from '../assets/logo.svg'
import LogoDark from '../assets/logo-dark.svg'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()


    return (
        <Box width='100%' height='80px' backdropBlur='20px' >
            <Container maxW='container.xl'>
                <Flex height='100%' width='100%'>
                    <Center p={4} >
                        <Image src={colorMode === 'light' ? Logo : LogoDark} width='48px' height='48px'  />
                        <Text ms={4} as='h1' fontFamily='Poppins' fontWeight='bold' fontSize='3xl'
                        display={{base: 'none', sm: 'block'}}
                        >Poemo</Text>
                    </Center>
                    <Spacer />
                    <Center p={4} >
                        <Popover >
                            <PopoverTrigger>
                                <IconButton
                                    variant='ghost'
                                    aria-label='Info'
                                    icon={<HiInformationCircle size={24} />} />
                            </PopoverTrigger>
                            <PopoverContent shadow='lg' borderWidth='0' >
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader fontFamily='Poppins'>Made using ChatGPT</PopoverHeader>
                                <PopoverBody fontFamily='Quicksand'>You can enter anything as prompts, it can be full
                                    sentences or comma separated keywords/keyphrases.
                                    <br />
                                    <br />
                                    Example 1: Grassy Ukrainian fields
                                    <br />
                                    <br />
                                    Example 2: moss, fairy, tall building, best friends</PopoverBody>
                            </PopoverContent>
                        </Popover>

                    </Center>
                    <Center p={4} >
                        <IconButton
                            variant='ghost'
                            aria-label='Search database'
                            onClick={toggleColorMode}
                            icon={colorMode === 'light' ? <BsFillMoonFill size={24} /> : <BsFillSunFill size={24} />} />
                    </Center>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar