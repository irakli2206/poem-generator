import { Heading } from '@chakra-ui/react'
import React from 'react'

const Title = () => {
    return (
        <Heading as='h1' size='3xl' textAlign={'center'} noOfLines={2} fontFamily='Poppins'
            style={{textShadow: '0px 0px 10px grey'}}
        >
            Generate the most beautiful poems on the internet
        </Heading>
    )
}

export default Title