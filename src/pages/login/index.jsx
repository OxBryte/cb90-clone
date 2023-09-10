import { Box, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import ContainLayout from '../../components/page-layout/container'
import { LoginComp } from '../../components/auth'
import { Carousel } from '../../components/carousel'

export default function Login() {

    return (
        <Box w='full'>
            <SimpleGrid columns={[1, 2]} justifyContent='space-between' w='full' minH='100vh'>
                <VStack display={['none', 'flex']} w='auto' gap='30px' align='left' p='70px' bg='brand.500'>
                    <Image src='./cb90_logo_white.svg' w='180px' alt='CB90-PRO Logo' />
                    <Text color='white' maxW='560px'>Track your Bot and see an overview of their performance on-the-go with easy dashboard access!</Text>
                    <Carousel />
                </VStack>
                <ContainLayout>
                    <Box mt='30px'>
                        <Image src='./cb90_logo_black.svg' w='180px' alt='CB90-PRO Logo' />
                    </Box>
                    <VStack align='left' py='40px' gap='50px'>
                        <VStack align='left' gap='20px'>
                            <Heading>Login to CB90-Pro Dashboard</Heading>
                            <Text maxW='530px'>Your dashboard is just a few clicks away! Please provide the necessary information below to access it.</Text>
                        </VStack>
                        <LoginComp />
                    </VStack>
                </ContainLayout>
            </SimpleGrid>
        </Box>
    )
}
