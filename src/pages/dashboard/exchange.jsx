import { Box, Button, Divider, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'

export default function Exchange() {
    return (
        <VStack w='full' gap='50px'>
            <VStack w='full' rounded='16px' p='30px' gap='12px'>
                <Heading>Connected Exchange Accounts</Heading>
                <Text>Effortlessly manage your cryptocurrency exchange accounts and trade with ease using our integrated exchange hub.</Text>
            </VStack>
            <VStack p='30px' w='full' bg='white'>
                <HStack align='center' justify='space-between'>
                    <Box><Image src='./binance.svg' alt='' w='100px' /></Box>
                    <Button variant='solid' px='26px' bg='none' _hover={{ bg: 'brand.200' }} w='fit-content'>Disconnect</Button>
                </HStack>
                <Divider />
                <HStack align='center' justify='space-between'>
                    <Box><Image src='./binance.svg' alt='' w='100px' /></Box>
                    <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='fit-content'>Get Started</Button>
                </HStack>
            </VStack>
        </VStack>
    )
}
