import { Box, Heading, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import ContainLayout from '../page-layout/container'

export default function StandOut() {
    return (
        <Box bg='brand.300' w='full' py='100px'>
            <ContainLayout>
                <VStack w='full' gap='40px'>
                    <Heading textAlign='center'>What makes  CB90-Pro Stand out?</Heading>
                    <Stack direction={['column', 'column', 'column', 'row']} gap='30px' justify='space-between' align='center' w='full'>
                        <Box>
                            <Image src='./bitcoinbro.png' maxW='420px' alt='' />
                        </Box>
                        <SimpleGrid columns={[1, 2]} gap='20px'>
                            <VStack bg='white' rounded='16px' px='20px' py='40px' gap='20px' maxW='340px' h='auto'>
                                <Text fontSize='24px' fontWeight='600' color='brand.200'>Proven Strategies, Optimal Results</Text>
                                <Text color='brand.600'>Our specialized bots have a successful track record in various markets, ensuring proven strategies guide your investments.</Text>
                            </VStack>
                            <VStack bg='white' rounded='16px' px='20px' py='40px' gap='20px' maxW='340px' h='auto'>
                                <Text fontSize='24px' fontWeight='600' color='brand.200'>Seamless Exchange Integration</Text>
                                <Text color='brand.600'>Trade seamlessly on Coinbase and Binance through our platform, executing quick trades, monitoring real-time prices, and managing assets effortlessly.</Text>
                            </VStack>
                            <VStack bg='white' rounded='16px' px='20px' py='40px' gap='20px' maxW='340px' h='auto'>
                                <Text fontSize='24px' fontWeight='600' color='brand.200'>Tailored Alerts and Insights</Text>
                                <Text color='brand.600'>Get timely alerts via SMS or email about bot activities and market updates, empowering you with real-time insights for informed decisions.</Text>
                            </VStack>
                            <VStack bg='white' rounded='16px' px='20px' py='40px' gap='20px' maxW='340px' h='auto'>
                                <Text fontSize='24px' fontWeight='600' color='brand.200'>User-Centric Design and Support</Text>
                                <Text color='brand.600'>Navigate a user-friendly dashboard that grants you control. With customization choices and extensive support, CB90-Pro guarantees a smooth and rewarding crypto trading journey.</Text>
                            </VStack>
                        </SimpleGrid>
                    </Stack>
                </VStack>
            </ContainLayout>
        </Box>
    )
}
