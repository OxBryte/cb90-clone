import { Box, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import ContainLayout from '../page-layout/container'
import Team from '../team'

export default function AboutUs() {
    return (
        <Box my='50px' w='full'>
            <ContainLayout>
                <Stack direction={['column', 'row']} justify='space-between' align='center'>
                    <VStack align='left' maxW='560px' gap='30px'>
                        <Heading>About Our Company</Heading>
                        <Text>At CB90-Pro, we are driven by a passion for simplifying and optimizing the world of crypto trading. Our mission is to empower individuals, whether beginners or experienced traders, with the tools and strategies they need to thrive in the dynamic cryptocurrency landscape. <br /> <br />With a team of dedicated experts and innovative thinkers, we have crafted a platform that brings together advanced trading technologies and user-friendly interfaces. Our goal is to bridge the gap between intricate trading strategies and accessibility, enabling users to make informed decisions and achieve their investment objectives.</Text>
                    </VStack>
                    <Box maxW='500px'>
                        <Image src='./aboutImg.png' alt='' />
                    </Box>
                </Stack>
            </ContainLayout>
            <Box my='50px' py='50px' bg='brand.300' w='full'>
                <ContainLayout>
                    <VStack align='left' gap='50px'>
                        <Heading>CB90-Pro&apos;3 Core Principles</Heading>
                        <Stack direction={['column', 'row']} justify='space-between'>
                            <VStack align='left' maxW='360px'>
                                <Heading>01</Heading>
                                <Text fontWeight={600} fontSize='20px'>Innovation Meets Accessibility</Text>
                                <Text mt='14px' color='brand.600'>We believe that cutting-edge trading strategies should be accessible to everyone. Our platform combines innovative technologies with user-friendly interfaces, making complex trading tactics easily understandable and actionable.</Text>
                            </VStack>
                            <VStack align='left' maxW='360px'>
                                <Heading>02</Heading>
                                <Text fontWeight={600} fontSize='20px'>Knowledge is Power</Text>
                                <Text mt='14px' color='brand.600'>Education is at the heart of our approach. We provide comprehensive market insights, analyses, and resources to empower users with the knowledge they need to make informed trading decisions.</Text>
                            </VStack>
                            <VStack align='left' maxW='360px'>
                                <Heading>03</Heading>
                                <Text fontWeight={600} fontSize='20px'>Your Success, Our Priority:</Text>
                                <Text mt='14px' color='brand.600'>Your success drives us. We are committed to offering unmatched support, helping you navigate the crypto world with confidence. Your journey towards financial achievement is our primary focus and motivation.</Text>
                            </VStack>
                        </Stack>
                    </VStack>
                </ContainLayout>
            </Box>
            <Team />
        </Box>
    )
}
