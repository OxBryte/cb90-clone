import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import ContainLayout from '../../components/page-layout/container'
import { SignupComp } from '../../components/auth'

export default function Signup() {

    return (
        <Box w='full'>
            <SimpleGrid columns={[1, 2]} justifyContent='space-between' w='full' minH='100vh'>
                <Box w='auto' bg='brand.500'>

                </Box>
                <ContainLayout>
                    <VStack align='left' py='100px' gap='50px'>
                        <VStack align='left' gap='20px'>
                            <Heading>Create an Account</Heading>
                            <Text maxW='530px'>Welcome to CB90-Pro! Join the future of crypto trading by creating your account below</Text>
                        </VStack>
                        <SignupComp />
                    </VStack>
                </ContainLayout>
            </SimpleGrid>
        </Box>
    )
}
