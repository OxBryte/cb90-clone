import { Box, Divider, HStack, Heading, Image, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function Alerts() {

    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <VStack w='full' gap='50px'>
            <VStack align='left' w='full' gap='30px' p='40px' rounded='16px' bg='white'>
                <Heading>Notifications</Heading>
                <Divider />
                <Box>
                    <HStack gap='20px' align='flex-start'>
                        <Image src='./monday.svg' alt='' w='40px' />
                        <HStack align='left' justify='space-between' w='full'>
                            <VStack justify='space-between' align='left'>
                                <Text fontWeight='600' fontSize={['14px', '20px']}>Profit/Loss Threshold Reached</Text>
                                <Text fontSize={['14px', '20px']}>Alert: Your Bot A has achieved a 10% profit</Text>
                            </VStack>
                            {isDesktop && (
                                <VStack justify='space-between' align='flex-end'>
                                    <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                                    <Text fontSize={['14px', '20px']}>16th March, 2023</Text>
                                </VStack>
                            )}
                        </HStack>
                    </HStack>
                    {!isDesktop && (
                        <HStack gap='10px' justify='flex-end' align='flex-end' w='full'>
                            <Text fontSize={['14px', '20px']}>16th March, 2023</Text>
                            <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                        </HStack>
                    )}
                </Box>
                <Box>
                    <HStack gap='20px' align='flex-start'>
                        <Image src='./monday.svg' alt='' w='40px' />
                        <HStack align='left' justify='space-between' w='full'>
                            <VStack justify='space-between' align='left'>
                                <Text fontWeight='600' fontSize={['14px', '20px']}>Profit/Loss Threshold Reached</Text>
                                <Text fontSize={['14px', '20px']}>Alert: Your Bot A has achieved a 10% profit</Text>
                            </VStack>
                            {isDesktop && (
                                <VStack justify='space-between' align='flex-end'>
                                    <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                                    <Text fontSize={['14px', '20px']}>16th March, 2023</Text>
                                </VStack>
                            )}
                        </HStack>
                    </HStack>
                    {!isDesktop && (
                        <HStack gap='10px' justify='flex-end' align='flex-end' w='full'>
                            <Text fontSize={['14px', '20px']}>16th March, 2023</Text>
                            <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                        </HStack>
                    )}
                </Box>
                <Box>
                    <HStack gap='20px' align='flex-start'>
                        <Image src='./monday.svg' alt='' w='40px' />
                        <HStack align='left' justify='space-between' w='full'>
                            <VStack justify='space-between' align='left'>
                                <Text fontWeight='600' fontSize={['14px', '20px']}>Profit/Loss Threshold Reached</Text>
                                <Text fontSize={['14px', '20px']}>Alert: Your Bot A has achieved a 10% profit</Text>
                            </VStack>
                            {isDesktop && (
                                <VStack justify='space-between' align='flex-end'>
                                    <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                                    <Text fontSize={['14px', '20px']}>16th March, 2023</Text>
                                </VStack>
                            )}
                        </HStack>
                    </HStack>
                    {!isDesktop && (
                        <HStack gap='10px' justify='flex-end' align='flex-end' w='full'>
                            <Text fontSize={['14px', '20px']}>16th March, 2023</Text>
                            <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                        </HStack>
                    )}
                </Box>
                <Box>
                    <HStack gap='20px' align='flex-start'>
                        <Image src='./monday.svg' alt='' w='40px' />
                        <HStack align='left' justify='space-between' w='full'>
                            <VStack justify='space-between' align='left'>
                                <Text fontWeight='600' fontSize={['14px', '20px']}>Profit/Loss Threshold Reached</Text>
                                <Text fontSize={['14px', '20px']}>Alert: Your Bot A has achieved a 10% profit</Text>
                            </VStack>
                            {isDesktop && (
                                <VStack justify='space-between' align='flex-end'>
                                    <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                                    <Text fontSize={['14px', '20px']}>16th March, 2023</Text>
                                </VStack>
                            )}
                        </HStack>
                    </HStack>
                    {!isDesktop && (
                        <HStack gap='10px' justify='flex-end' align='flex-end' w='full'>
                            <Text fontSize={['14px', '20px']}>16th March, 2023</Text>
                            <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                        </HStack>
                    )}
                </Box>
            </VStack>
            <VStack bg='white' w='full' minH='400px' p='30px' rounded='16px' align='center' justify='center'>
                <Text>A promotional banner goes here</Text>
            </VStack>
        </VStack>
    )
}
