import { Box, Container } from '@chakra-ui/react'
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
    const [AIResponse, setAIResponse] = useState<any>()

    const [error, setError] = useState('')

    useEffect(() => {
        const getAIResponse = async () => {
            if (value.replace(' ', '')) {
                setError('')
                const prompt = 'Write a poem about' + value
                const response = await openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: prompt,
                    temperature: 0,
                    max_tokens: 256,
                })
                console.log(response.data.choices[0].text)
            }
            else setError('You must enter prompts first')

        }

        getAIResponse()
    }, [])

    let handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    return (
        <Container py={12} maxW='container.xl'>
            <Title />
            <Textarea  maxLength={100} variant='outline' my={12} resize='none' fontSize='2xl' shadow='xl' value={value}
                onChange={handleInputChange}
                placeholder='Enter prompts...'
                fontFamily='Quicksand'
                noOfLines={2}
                borderColor='transparent'
            />
        </Container>
    )
}

export default Home