import { Flex, Spacer } from '@chakra-ui/layout'
import {
    Box, Center, Container, IconButton,
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

const Navbar = () => {
    return (
        <Box width='100%' height='80px' backdropBlur='20px' >
            <Container maxW='container.xl'>
                <Flex height='100%' width='100%'>
                    <Center p={4} >
                        <RiQuillPenFill size={48} />
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