import { Box, Button, Center, Container, useToast, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { Textarea } from '@chakra-ui/react'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_SK,
});

const openai = new OpenAIApi(configuration);


const Home = () => {
    //chatgpt prompt will be 'write poem about' + user input
    //maybe add short and long poem options
    const [value, setValue] = useState('')
    const [poem, setPoem] = useState<string>('')
    const [error, setError] = useState('')
    const [poemLoading, setPoemLoading] = useState(false)

    const inputIsEmpty = !value.replace(' ', '')
    console.log(inputIsEmpty)

    const toast = useToast()

    useEffect(() => {
        const getAIResponse = async () => {


        }

        getAIResponse()
    }, [])

    let handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    const generatePoem = async () => {
        try {
            setPoemLoading(true)
            if (Boolean(value.replace(' ', '')) === false) {
                throw new Error('Prompt cannot be empty', { cause: 'Prompt cannot be empty' })
            }

            const prompt = 'Write a poem about' + value
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0,
                max_tokens: 256,
            })

            if (response.data.choices[0].text) {
                console.log(response.data.choices[0].text)
                setPoem(response.data.choices[0].text)
            }
            else throw new Error("Couldn't generate poem")


        } catch (e: any) {
            let errorMessage = ''
            if (e.message) {
                errorMessage = e.message
            }
            if (e.response) {
                errorMessage = e.response.data.error.message
            }

            //@ts-ignore
            console.log(errorMessage)
            toast({
                title: 'Error',
                description: errorMessage,
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } finally {
            setPoemLoading(false)
        }




    }


    return (
        <Container py={12} maxW='container.xl'>
            <Title />
            <Textarea maxLength={100} variant='outline' my={12} resize='none' fontSize='2xl' shadow='xl' value={value}
                onChange={handleInputChange}
                placeholder='Enter prompts...'
                fontFamily='Quicksand'
                borderColor='transparent'
                isInvalid={!!error}
            />
            <Center>
                <Button isLoading={poemLoading} loadingText='This may take a minute'
                    isDisabled={inputIsEmpty}
                    colorScheme='messenger' fontFamily='Poppins' size='lg'
                    fontWeight='light'
                    shadow='lg'
                    onClick={generatePoem}
                >Generate</Button>

            </Center>
            {poem &&
                <Center >
                    <Text as='pre' maxW='100%'  fontFamily='Quicksand' fontSize={{ base: '12px', md: '20px', lg: '24px' }} fontWeight='semibold'>{poem}</Text>
                </Center>}

        </Container>
    )
}

export default Home