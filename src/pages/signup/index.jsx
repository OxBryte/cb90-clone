import { Box, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import ContainLayout from '../../components/page-layout/container'
import { SignupComp } from '../../components/auth'
import { Carousel } from '../../components/carousel'
import { Link } from 'react-router-dom'

export default function Signup() {

    return (
        <Box w='full'>
            <SimpleGrid columns={[1, 2]} justifyContent='space-between' w='full'>
                <VStack display={['none', 'flex']} w='auto' gap='30px' align='left' px='70px' py='50px' bg='brand.500' position='sticky' top='0' h='100vh'>
                    <Link to='/'>
                        <Image src='/cb90_logo_white.svg' w='180px' alt='CB90-PRO Logo' />
                    </Link>
                    <Text color='white' maxW='560px'>Track your Bot and see an overview of their performance on-the-go with easy dashboard access!</Text>
                    <Carousel />
                </VStack>
                <ContainLayout>
                    <VStack w='full' align='left'>
                        <Box mt='70px'>
                            <Link to='/'>
                                <Image src='/cb90_logo_black.svg' w='180px' alt='CB90-PRO Logo' />
                            </Link>
                        </Box>
                        <VStack w='full' align='left' py='40px' gap='50px'>
                            <VStack align='left' gap='20px'>
                                <Heading>Create an Account</Heading>
                                <Text maxW='530px'>Welcome to CB90-Pro! Join the future of crypto trading by creating your account below</Text>
                            </VStack>
                            <SignupComp />
                        </VStack>
                    </VStack>
                </ContainLayout>
            </SimpleGrid>
        </Box>
    )
}
