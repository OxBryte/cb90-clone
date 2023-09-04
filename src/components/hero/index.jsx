import { Box, Button, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import ContainLayout from '../page-layout/container'
import { Carousel, MobileCarousel } from './carousel'

export default function Hero() {

    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <Box bg='brand.100' w='full' py='70px'>
            <ContainLayout>
                <VStack w='full'>
                    <VStack color='white' gap='20px'>
                        <Heading textAlign='center' fontSize={['28px', '46px']}>Unlock Your Crypto Potential with CB90-Pro</Heading>
                        <Text textAlign='center'>Experience Advanced Crypto Trading Strategies, Simplified.</Text>
                        <Button variant='solid' bgGradient='linear(to-b, brand.200, brand.400)' px='32px' color={'white'} _hover={{ bg: 'brand.200' }}>Get Started</Button>
                    </VStack>
                    <Box w='full' mt='50px'>
                        {
                            isDesktop ? (
                                <Carousel />
                            ) : (
                                <Box w='full' px='16px'>
                                    <MobileCarousel />
                                </Box>
                            )
                        }
                    </Box>
                </VStack>
            </ContainLayout>
        </Box>
    )
}
