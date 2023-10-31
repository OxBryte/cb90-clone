import { Box, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import ContainLayout from '../../components/page-layout/container'
import { ForgottenPasswordComp } from '../../components/auth'
import { Carousel } from '../../components/carousel'
import { Link } from 'react-router-dom'

export default function ForgottenPassword() {

    return (
        <Box w='full'>
            <SimpleGrid columns={[1, 2]} justifyContent='space-between' w='full'>
                <VStack display={['none', 'flex']} w='auto' gap='30px' align='left' py='70px' px='50px' position='sticky' top='0' h='100vh' bg='brand.500'>
                    <Link to='/'>
                        <Image src='/cb90_logo_white.svg' w='180px' alt='CB90-PRO Logo' />
                    </Link>
                    <Text color='white' maxW='560px'>Track your Bot and see an overview of their performance on-the-go with easy dashboard access!</Text>
                    <Carousel />
                </VStack>
                <ContainLayout>
                    <Box mt='70px'>
                        <Link to='/'>
                            <Image src='/cb90_logo_black.svg' w='180px' alt='CB90-PRO Logo' />
                        </Link>
                    </Box>
                    <VStack align='left' py='40px' gap='50px'>
                        <VStack align='left' gap='20px'>
                            <Heading>Password Recovery</Heading>
                            <Text maxW='530px'>Enter your email to recover your password</Text>
                        </VStack>
                        <ForgottenPasswordComp />
                    </VStack>
                </ContainLayout>
            </SimpleGrid>
        </Box>
    )
}
