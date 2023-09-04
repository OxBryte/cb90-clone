import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import ContainLayout from '../page-layout/container'
import Carousel from './carousel'

export default function Hero() {

    return (
        <Box bg='brand.100' w='full' py='70px'>
            <ContainLayout>
                <VStack w='full'>
                    <VStack color='white' gap='26px'>
                        <Heading fontSize={46}>Unlock Your Crypto Potential with CB90-Pro</Heading>
                        <Text>Experience Advanced Crypto Trading Strategies, Simplified.</Text>
                        <Button variant='solid' bgGradient='linear(to-b, brand.200, brand.400)' px='32px' color={'white'} _hover={{ bg: 'brand.200' }}>Get Started</Button>
                    </VStack>
                    <Box w='full' mt='50px'>
                        <Carousel />
                    </Box>
                </VStack>
            </ContainLayout>
        </Box>
    )
}
