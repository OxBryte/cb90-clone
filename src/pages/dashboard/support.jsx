import { Grid, GridItem, HStack, Image, Text, VStack } from '@chakra-ui/react'

export default function Support() {
    return (
        <VStack w='full' gap='50px' bg='white' minH='400px' p='30px' rounded='16px'>
            <Grid templateColumns='repeat(2, 1fr)' w='full' gap={14} align='center' justify='flex-start'>
                <GridItem>
                    <HStack border='1px' borderColor='brand.300' px='16px' py='24px' rounded='16px' align='center' gap='30px'>
                        <Image src='./support_icon1.svg' alt='' />
                        <VStack align='flex-start' gap='0'>
                            <Text fontSize='22px' fontWeight='700'>FAQs</Text>
                            <Text color='#4e4e4e'>Easy responses to your possible questions</Text>
                        </VStack>
                    </HStack>
                </GridItem>
                <GridItem>
                    <HStack border='1px' borderColor='brand.300' px='16px' py='24px' rounded='16px' align='center' gap='30px'>
                        <Image src='./support_icon2.svg' alt='' />
                        <VStack align='flex-start' gap='0'>
                            <Text fontSize='22px' fontWeight='700'>Live Chat</Text>
                            <Text color='#4e4e4e'>The average response time is 10 minutes</Text>
                        </VStack>
                    </HStack>
                </GridItem>
            </Grid>
            <VStack w='full' p='50px' gap='30px' border='1px' borderColor='brand.300' rounded='16px'>
                <Text fontSize='22px' fontWeight='700'>Connect with us on social media</Text>
                <HStack align='center' gap='20px'>
                    <Image src='./social1.svg' alt='' />
                    <Image src='./social4.svg' alt='' />
                    <Image src='./social2.svg' alt='' />
                    <Image src='./social3.svg' alt='' />
                </HStack>
            </VStack>
        </VStack>
    )
}
