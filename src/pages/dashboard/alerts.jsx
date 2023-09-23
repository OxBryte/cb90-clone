import { Box, Divider, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'

export default function Alerts() {
    return (
        <VStack w='full' gap='50px'>
            <VStack align='left' w='full' gap='20px' p='40px' rounded='16px' bg='white'>
                <Heading>Notifications</Heading>
                <Divider />
                <HStack gap='20px' align='flex-start'>
                    <Image src='./monday.svg' alt='' w='40px' />
                    <VStack align='left' w='full'>
                        <Flex justify='space-between' align='center'>
                            <Text fontWeight='600' fontSize='20px'>Profit/Loss Threshold Reached</Text>
                            <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                        </Flex>
                        <Flex justify='space-between' align='center'>
                            <Text fontSize='20px'>Alert: Your Bot A has achieved a 10% profit</Text>
                            <Text fontSize='20px'>16th March, 2023</Text>
                        </Flex>
                    </VStack>
                </HStack>
                <HStack gap='20px' align='flex-start'>
                    <Image src='./monday.svg' alt='' w='40px' />
                    <VStack align='left' w='full'>
                        <Flex justify='space-between' align='center'>
                            <Text fontWeight='600' fontSize='20px'>Profit/Loss Threshold Reached</Text>
                            <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                        </Flex>
                        <Flex justify='space-between' align='center'>
                            <Text fontSize='20px'>Alert: Your Bot A has achieved a 10% profit</Text>
                            <Text fontSize='20px'>16th March, 2023</Text>
                        </Flex>
                    </VStack>
                </HStack>
                <HStack gap='20px' align='flex-start'>
                    <Image src='./monday.svg' alt='' w='40px' />
                    <VStack align='left' w='full'>
                        <Flex justify='space-between' align='center'>
                            <Text fontWeight='600' fontSize='20px'>Profit/Loss Threshold Reached</Text>
                            <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                        </Flex>
                        <Flex justify='space-between' align='center'>
                            <Text fontSize='20px'>Alert: Your Bot A has achieved a 10% profit</Text>
                            <Text fontSize='20px'>16th March, 2023</Text>
                        </Flex>
                    </VStack>
                </HStack>
                <HStack gap='20px' align='flex-start'>
                    <Image src='./monday.svg' alt='' w='40px' />
                    <VStack align='left' w='full'>
                        <Flex justify='space-between' align='center'>
                            <Text fontWeight='600' fontSize='20px'>Profit/Loss Threshold Reached</Text>
                            <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                        </Flex>
                        <Flex justify='space-between' align='center'>
                            <Text fontSize='20px'>Alert: Your Bot A has achieved a 10% profit</Text>
                            <Text fontSize='20px'>16th March, 2023</Text>
                        </Flex>
                    </VStack>
                </HStack>
                <HStack gap='20px' align='flex-start'>
                    <Image src='./monday.svg' alt='' w='40px' />
                    <VStack align='left' w='full'>
                        <Flex justify='space-between' align='center'>
                            <Text fontWeight='600' fontSize='20px'>Profit/Loss Threshold Reached</Text>
                            <Box w='20px' h='20px' rounded='full' bgGradient='linear(to-r, brand.200, brand.500)' />
                        </Flex>
                        <Flex justify='space-between' align='center'>
                            <Text fontSize='20px'>Alert: Your Bot A has achieved a 10% profit</Text>
                            <Text fontSize='20px'>16th March, 2023</Text>
                        </Flex>
                    </VStack>
                </HStack>
            </VStack>
            <VStack bg='white' w='full' minH='400px' p='30px' rounded='16px' align='center' justify='center'>
                <Text>A promotional banner goes here</Text>
            </VStack>
        </VStack>
    )
}
