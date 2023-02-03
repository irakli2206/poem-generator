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
    PopoverAnchor
} from '@chakra-ui/react'
import React from 'react'
import { RiQuillPenFill } from 'react-icons/ri'
import { BsFillMoonFill } from 'react-icons/bs'
import { HiInformationCircle } from 'react-icons/hi'
import Logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <Box width='100%' height='80px' backdropBlur='20px' >
            <Container maxW='container.xl'>
                <Flex height='100%' width='100%'>
                    <Center p={4} >
                        {/* <RiQuillPenFill size={48} /> */}
                        <Image src={Logo} width='48px' height='48px' />
                        <Text  ms={4} as='h1' fontFamily='Poppins' fontWeight='bold' fontSize='3xl'>Poemo</Text>
                    </Center>
                    <Spacer />
                    <Center p={4} >
                        <Popover >
                            <PopoverTrigger>
                                <IconButton
                                    variant='ghost'
                                    aria-label='Search database'
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
                            icon={<BsFillMoonFill size={24} />} />
                    </Center>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar