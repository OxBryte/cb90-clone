import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import ContainLayout from '../../components/page-layout/container'
import { LoginComp } from '../../components/auth'

export default function Login() {

    return (
        <Box w='full'>
            <SimpleGrid columns={[1, 2]} justifyContent='space-between' w='full' minH='100vh'>
                <Box w='auto' bg='brand.500'>

                </Box>
                <ContainLayout>
                    <VStack align='left' py='100px' gap='50px'>
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
