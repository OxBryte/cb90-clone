import { Box, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import ContainLayout from '../../components/page-layout/container'
import { ForgottenPasswordComp } from '../../components/auth'

export default function ForgottenPassword() {

    return (
        <Box w='full'>
            <SimpleGrid columns={[1, 2]} justifyContent='space-between' w='full' minH='100vh'>
                <Box w='auto' bg='brand.500'>

                </Box>
                <ContainLayout>
                    <Box mt='30px'>
                        <Image src='./cb90_logo_black.svg' w='180px' alt='CB90-PRO Logo' />
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
