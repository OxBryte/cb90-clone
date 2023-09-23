import { Box, Button, Divider, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'

export default function Exchange() {
    return (
        <VStack w='full' gap='50px'>
            <VStack w='full' rounded='16px' bg='white' align='left' p='20px' gap='12px'>
                <Heading>Connected Exchange Accounts</Heading>
                <Text>Effortlessly manage your cryptocurrency exchange accounts and trade with ease using our integrated exchange hub.</Text>
            </VStack>
            <VStack p='30px' rounded='16px' gap='20px' w='full' bg='white'>
                <HStack w='full' align='center' justify='space-between'>
                    <Box><Image src='./binance.svg' alt='' w='100px' /></Box>
                    <Button variant='solid' border='1px' borderColor='brand.300' px='26px' bg='none' _hover={{ bg: 'brand.200' }} w='fit-content'>Disconnect</Button>
                </HStack>
                <Divider />
                <HStack w='full' align='center' justify='space-between'>
                    <Box><Image src='./coinbase.png' alt='' w='100px' /></Box>
                    <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='fit-content'>Get Started</Button>
                </HStack>
            </VStack>
        </VStack>
    )
}
